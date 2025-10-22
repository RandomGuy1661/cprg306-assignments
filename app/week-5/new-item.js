"use client"

import { useState } from "react"

export default function NewItem(){
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    //const handleQuan = (event) => setQuantity(event.target.value); 
    const handleName = (event) => setName(event.target.value); 
    const handleCategory = (event) => setCategory(event.target.value); 

    const incrementQuantity = () => {
        if(quantity<20){
            setQuantity(quantity+1);
        }
    }
    const decrementQuantity = () => {
        if(quantity>1){
            setQuantity(quantity-1);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            name: name,
            quantity: quantity,
            category: category
        } 

        console.log(`The item ${name} has been added. Category: ${category}, Quantity: ${quantity}`);
        alert(`The item ${name} has been added. Category: ${category}, Quantity: ${quantity}`);
        formReset();
    }

    const formReset = () => {
        setName("");
        setCategory("produce");
        setQuantity(1);
    }

    let buttonStylesGreen = "bg-green-400 text-white rounded-2xl p-6 cursor-pointer hover:bg-green-600 transition-colors active:bg-green-800 "
    if(quantity >= 20){
        buttonStylesGreen = "text-white rounded-2xl p-6 bg-gray-500"
    }
    let buttonStylesRed = "bg-red-400 text-white rounded-2xl p-6 cursor-pointer hover:bg-red-600 transition-colors active:bg-red-800 "
    if(quantity <= 1){
        buttonStylesRed = "text-white rounded-2xl p-6 bg-gray-500"
    }
    return (
        <form className="bg-gray-900" onSubmit={handleSubmit}>
            <div>
                <p>Quantity: {quantity}</p>
                <button type="button" className={buttonStylesGreen} onClick={incrementQuantity}>+</button>
                <button type="button" className={buttonStylesRed} onClick={decrementQuantity}>-</button>
            </div>
            <div>
                <label>Name: </label>
                <input type="text" on onChange={handleName} value={name}></input>
            </div>
            <div>
                <label>Category: </label>
                <select type="" on onChange={handleCategory} value={category}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="canned goods">Canned Good</option>
                    <option value="dried goods">Dried Goods</option>
                    <option value="household">Household</option>
                </select>
            </div>
            <div>
                <button className={"bg-blue-600 rounded-2xl"} type="submit">Submit</button>
            </div>
        </form>
    )
}
