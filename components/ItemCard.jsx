"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const ItemCard = ({ item, handleEdit, handleDelete }) => {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    const [copied, setCopied] = useState("");

    const handleProfileClick = () => {    
        if (item.creator._id === session?.user.id) return router.push("/profile");
    
        router.push(`/profile/${item.creator._id}?name=${item.creator.username}`);
      };

    const handleCopy = () => {
        setCopied(item.name);
        navigator.clipboard.writeText(item.name);
        setTimeout(() => setCopied(""), 3000);
    }

    return (
        <div className="prompt_card">
            <div className="flex justify-between items-center gap-3">
                <div>
                    <p className="font-satoshi text-xl text-black font-bold">
                        {item.name}
                    </p>
                    <p 
                        className="font-inter text-sm orange_gradient">
                        {item.category}
                    </p>
                </div>
                <div className="flex items-center flex-col">
                    <span className="font-satoshi text-base text-black font-bold">{item.stock}</span>
                    <span className="font-inter text-sm orange_gradient">Unidades</span>
                </div>
            </div>
            <div className="pt-2 border-t border-gray-300 flex-grow"></div>
            <p className="pt-4 font-satoshi text-lg blue_gradient font-bold text-center">
                Se compró en: {item.buy}
            </p>
            <p className="pt-1 pb-4 font-satoshi text-2xl orange_gradient font-bold text-center">
                Se vende en: {item.sell}
            </p>
            <div className="py-3 border-t border-gray-300 flex-grow">
                <p className="text-justify">
                    {item.details}
                </p>
            </div>                
            <div className="border-t border-gray-300 flex-grow"></div>
            <div className="pt-3 pb-2 flex justify-between items-center gap-5">
                <div 
                    className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
                    onClick={handleProfileClick}
                >
                    <Image
                        src={item.creator.image}
                        alt="user_image"
                        width={40}
                        height={40}
                        className="rounded-full object-contain"    
                    />
                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold text-gray-500 text-sm">
                            {item.creator.username}
                        </h3>
                        <p className="font-inter text-sm text-gray-500">
                            {item.creator.email}
                        </p>
                    </div>                
                </div>
                <div className="copy_btn" onClick={handleCopy}>
                    <Image
                        src={copied === item.name 
                            ? '/assets/icons/tick.svg'
                            : '/assets/icons/copy.svg'
                        }
                        width={12}
                        height={12}
                    />
                </div>
            </div>
            
            {session?.user.id === item.creator._id && pathName === "/profile" && (
                <div className='flex-center gap-4 border-t border-gray-300 pt-4'>
                <p
                    className='font-inter text-sm green_gradient cursor-pointer'
                    onClick={handleEdit}
                >
                    Editar
                </p>
                <p
                    className='font-inter text-sm orange_gradient cursor-pointer'
                    onClick={handleDelete}
                >
                    Eliminar
                </p>
                </div>
            )}
        </div>
    )
}

export default ItemCard