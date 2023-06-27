'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

const EditItem = () => {
    const router = useRouter();
    const searchItems = useSearchParams();
    const itemId = searchItems.get("id");

    const [submitting, setIsSubmitting] = useState(false);
    const [item, setItem] = useState({
        name: "",
        category: "",
        buy: "",
        sell: "",
        stock: "",
        details: "",
    });

    useEffect(() => {
        const getItemDetails = async () => {
            const response = await fetch(`/api/item/${itemId}`)
            const data = await response.json();

            setItem({
                name: data.name,
                category: data.category,
                buy: data.buy,
                sell: data.sell,
                stock: data.stock,
                details: data.details,
            })
        }

        if(itemId) getItemDetails()

    }, [itemId])

    const updateItem = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if(!itemId) return alert('Item ID no encontrado')

        try {
            const response = await fetch(`/api/item/${itemId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    name: item.name,
                    category: item.category,
                    buy: item.buy,
                    sell: item.sell,
                    stock: item.stock,
                    details: item.details,
                })
            })

            if (response.ok){
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form
            type="Editar"
            item={item}
            setItem={setItem}
            submitting={submitting}
            handleSubmit={updateItem}
        />
    );
};

export default EditItem;