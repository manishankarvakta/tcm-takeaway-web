import { TrashIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { deleteFoodCart, getStoredCart, removeFromDb } from '../../hooks/localStorageCart3';
import ViewNewCartItems from './ViewNewCartItems';

const ViewNewCart = () => {
    const [newCount, setNewCount] = useState([]);
    const myNewItems = getStoredCart();
    // console.log(myNewItems)
    // setMynewItems(myItems)
    const removeFoodFromCart = (menuFood) => {
        console.log(menuFood)
        const restFoods = removeFromDb(menuFood)
        window.location.reload();
    }
    const handleRemoveAllItems = () => {
        deleteFoodCart();
        window.location.reload();

    }
    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('food_cart'));
        if (items) {
            setItems(items);
        }
    }, []);
    console.log(items)

    return (
        <div>
            <div className='flex justify-between'>
                <h1>Total Items: {myNewItems.length}</h1>
                <div onClick={() => handleRemoveAllItems()} className='flex items-center hover:text-red-600 hover:cursor-pointer text-sm'>
                    <p>Remove All</p>
                    <TrashIcon className='h-4 w-4'></TrashIcon>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-12 drop-shadow-md justify-items-center items-center pt-5'>
                {
                    myNewItems?.length > 0 ?
                        myNewItems?.map(myNewItem =>
                            <ViewNewCartItems
                                myNewItem={myNewItem}
                                removeFoodFromCart={removeFoodFromCart}
                            ></ViewNewCartItems>

                        )
                        :
                        <></>
                }


            </div>

        </div>
    );
};

export default ViewNewCart;