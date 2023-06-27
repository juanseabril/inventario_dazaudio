"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const MyProfile = () => {
    const { data: session } = useSession(); 

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch (`/api/users/${session?.user.id}/items`);
            const data = await response.json();

            setItems(data);
        }

        if(session?.user.id) fetchItems();
    }, []);

    const handleEdit = () => {

    }

    const handleDelete = async () => {
        
    }

    return (
        <Profile
            name="Mi"
            desc="Aquí podrás encontrar todos los registros creados por ti, podras editar y eliminar, lo que te permitirá mantener actualizado y ordenado tu inventario."
            data={items}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile