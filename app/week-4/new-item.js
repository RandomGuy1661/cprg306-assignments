"use client"

import { useState } from "react"

export default function NewItem(){
    const [quantity, setQuantity] = useState(1);

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

    let buttonStylesGreen = "bg-green-400 text-white rounded-2xl p-6 cursor-pointer hover:bg-green-600 transition-colors active:bg-green-800 "
    if(quantity >= 20){
        buttonStylesGreen = "text-white rounded-2xl p-6 bg-gray-500"
    }
    let buttonStylesRed = "bg-red-400 text-white rounded-2xl p-6 cursor-pointer hover:bg-red-600 transition-colors active:bg-red-800 "
    if(quantity <= 1){
        buttonStylesRed = "text-white rounded-2xl p-6 bg-gray-500"
    }
    return (
        <div className="bg-gray-900">
            <p>Quantity: {quantity}</p>
            <button className={buttonStylesGreen} onClick={incrementQuantity}>+</button>
            <button className={buttonStylesRed} onClick={decrementQuantity}>-</button>
        </div>
    )
}
