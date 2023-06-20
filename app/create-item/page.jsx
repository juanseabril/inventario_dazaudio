'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateItem = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setIsSubmitting] = useState(false);
    const [item, setItem] = useState({
        name: "",
        category: "",
        buy: "",
        sell: "",
        stock: "",
        details: "",
    });

    const createItem = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/item/new', {
                method: 'POST',
                body: JSON.stringify({
                    userId: session?.user.id,
                    name: item.name,
                    category: item.category,
                    buy: item.buy,
                    sell: item.sell,
                    stock: item.stock,
                    details: item.details,
                })
            })

            console.log("response.ok", response.ok);

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
            type="Crear"
            item={item}
            setItem={setItem}
            submitting={submitting}
            handleSubmit={createItem}
        />
    );
};

export default CreateItem;