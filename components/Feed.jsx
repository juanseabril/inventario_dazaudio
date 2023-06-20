'use client';

import { useState, useEffect } from 'react';

import ItemCard from './ItemCard';

const ItemCardList = ({ data, handleCategoryClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((item) => (
                <ItemCard
                    key = {item._id}
                    item = {item}
                    handleCategoryClick = {handleCategoryClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [searchText,setSearchText] = useState('');
    const [items, setItems] = useState([]);

    const handleSearchChange = (e) => {

    }

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch ('api/item');
            const data = await response.json();

            setItems(data);
        }

        fetchItems();
    }, []);

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Buscar en la base de datos"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>

            <ItemCardList
                data={items}
                handleCategoryClick={() => {}}
            />
        </section>
    )
}

export default Feed