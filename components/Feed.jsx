'use client';

import { useState, useEffect } from 'react';

import ItemCard from './ItemCard';

const ItemCardList = ({ data }) => {    
    return (
        <div className="mt-3 prompt_layout">
            {data.map((item) => (
                <ItemCard
                    key = {item._id}
                    item = {item}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [allItems, setAllItems] = useState([]);

    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);
        
    const fetchItems = async () => {
        const response = await fetch ("api/item");
        const data = await response.json();

        setAllItems(data);
    }
    
    useEffect(() => {
        fetchItems();
    }, []);

    const filterItems = (searchtext) => {
        const regex = new RegExp(searchtext, "i");

        return allItems.filter(
            (item) =>
                regex.test(item.creator.username) ||
                regex.test(item.name) ||
                regex.test(item.category) ||
                regex.test(item.buy) ||
                regex.test(item.sell) ||
                regex.test(item.stock) ||
                regex.test(item.details)
        );
    }

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterItems(e.target.value);
                setSearchedResults(searchResult);
            }, 500)
        );
    }

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

            {searchText ? (
                <ItemCardList
                    data={searchedResults}
                />
            ) : (
                <ItemCardList 
                    data={allItems}
                />
            )}
        </section>
    );
};

export default Feed;