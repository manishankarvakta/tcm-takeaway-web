import React from 'react';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from "react-router-dom";

import { addToDb, getStoredCart, removeQuantity } from '../../hooks/localStorageCart3'
import { useState } from 'react';
import { useEffect } from 'react';
import getFoodQuantity from '../../hooks/getFoodQuantity';

const MenuSelectedFood = ({ menuFood, setOpenModal, foodItem }) => {
    // console.log(menuFood)
    const { ean, name, _id } = menuFood;
    const navigate = useNavigate();

    const [count, setCount] = useState(0);

    const foodItems = getStoredCart();
    console.log(foodItems);
    const food = getFoodQuantity(_id)
    console.log(food)
    // setCount(food.qty)

    const handleAddition = (menuFood) => {
        const { _id } = menuFood;
        const addProduct = addToDb(menuFood);
        console.log(addProduct)
        const restItem = addProduct.find((p) => p.id === _id);
        console.log(restItem.qty)
        setCount(restItem.qty)

    }
    const handleSubtraction = (menuFood) => {
        const { _id } = menuFood;
        const removeProductQty = removeQuantity(menuFood)
        // console.log(removeProductQty)
        const restItem = removeProductQty.find((p) => p.id === _id);
        console.log(restItem)
        if (restItem === 'undefined') {
            setCount(0)
        }
        else {
            setCount(restItem?.qty)
        }
        // setCount(restItem?.qty)
    }


    const handleProductDetails = (id) => {
        navigate(`/product/${id}`)
    }


    return (
        <div className="drop-shadow-md ">
            <label
                htmlFor="food-details-modal"
                onClick={() => setOpenModal(menuFood)}
            ><figure><img className='rounded-full' src='https://i.ibb.co/K6hpLmj/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg' alt="menu" /></figure>
            </label>

            <div className="card-body">
                <h2 className="text-center font-bold text-lg">{name}</h2>

                <p className='text-center'>Price: $20</p>
            </div>
            <div className='flex justify-center items-center space-x-4 mb-4'>
                <MinusCircleIcon onClick={() => { handleSubtraction(menuFood) }} className='h-6 w-6'></MinusCircleIcon>
                <input type="text" placeholder="0" disabled value={count || food.qty} className="w-20 input input-bordered text-center"></input>


                <PlusCircleIcon onClick={() => { handleAddition(menuFood) }} className='h-6 w-6'></PlusCircleIcon>
            </div>
            <div className='flex space-x-4'>
                <button className='btn btn-xs'>Add to Cart</button>
                <button onClick={() => handleProductDetails(_id)} className='btn btn-xs'>View Details</button>
            </div>

        </div>
    );
};

export default MenuSelectedFood;