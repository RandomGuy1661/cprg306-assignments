"use client"

import { useState } from "react";
import Item from "./item.js";
import itemData from "./items.json"


export default function ItemList(){
    let items = itemData.map( (item) => ({...item}));

    let [sortBy, setSortBy] = useState('name');
    const handleSortChange = (event) => setSortBy(event.target.value)

        items.sort((i1, i2) =>
        {
            if (sortBy == 'category') {
                if (i1.category.toLowerCase() > i2.category.toLowerCase()) return 1;
                if (i1.category.toLowerCase() < i2.category.toLowerCase()) return -1;
                return 0;
            } else {
                if (i1.name.toLowerCase() > i2.name.toLowerCase()) return 1;
                if (i1.name.toLowerCase() < i2.name.toLowerCase()) return -1;
                return 0;
            }
        })
    
    return(
        <div>
            <select onChange={handleSortChange}>
                <option value='name'>Name</option>
                <option value='category'>Category</option>
            </select>
            <ul className="bg-amber-950 rounded-2xl m-3 p-4">
                {items.map((i) => (
                    <li key={i.id}><Item i = {i}/></li>
                ))}
            </ul>
        </div>
    )
};