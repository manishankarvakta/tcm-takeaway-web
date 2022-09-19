import React from 'react';
import { deleteFoodCart, getStoredCart, removeFromDb } from '../../hooks/localStorageCart3';
import MyItems from './MyItems';
import { ArrowLeftIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const ViewCart = () => {

    // const [myNewItems, setMynewItems] = useState([]);
    const myNewItems = getStoredCart();
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

    return (
        <div>

            <div class="container mx-auto mt-10">
                <div class="flex justify-center items-center shadow-md my-10">
                    <div class="lg:w-3/4 bg-white lg:px-10 lg:py-10 sm:w-full sm:px-2 sm:py-2">

                        <div class="flex justify-between border-b pb-8">
                            <h1 class="font-semibold text-2xl">Food Cart</h1>
                            <h2 class="font-semibold text-2xl">Total Items: {myNewItems.length}</h2>
                            <div onClick={() => handleRemoveAllItems()} className='flex hover:text-red-600 hover:cursor-pointer'>
                                <p>Remove All</p>
                                <TrashIcon className='h-6 w-6'></TrashIcon>
                            </div>

                        </div>
                        <div class="flex mt-10 mb-5">
                            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>
                        {

                            myNewItems?.length > 0 ?
                                myNewItems?.map(myNewItem =>
                                    <MyItems
                                        myNewItem={myNewItem}
                                        // setMynewItems={setMynewItems}
                                        removeFoodFromCart={removeFoodFromCart}
                                    ></MyItems>

                                )
                                :
                                <></>

                        }
                        <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">

                            <ArrowLeftIcon className='h-6 w-6'></ArrowLeftIcon>
                            Continue Shopping
                        </a>
                    </div>

                </div>
            </div>
            {/* {

                myItems.length > 0 ?
                    myItems?.map(myItem =>
                        <MyItems
                            myItem={myItem}
                        ></MyItems>
                        // console.log(menuFood.strMeal)
                    )
                    :
                    <></>

            } */}
        </div>
    );
};

export default ViewCart;