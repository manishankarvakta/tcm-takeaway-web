import React, { useState } from 'react';
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/solid';
import { addToDb, removeFromDb, removeQuantity } from '../../hooks/localStorageCart3';
import { toast } from 'react-toastify';


const MyItems = ({ myNewItem, removeFoodFromCart }) => {
    // console.log(myNewItem)
    const [count, setCount] = useState(1);


    // const handleRemoveItemFromCart = (myNewItem) => {
    //     console.log('clicked')
    //     const data = removeFromDb(myNewItem)
    //     setMynewItems(data)
    //     console.log(data)
    // }
    const toastMsg = () => {
        toast("Item Added");
    }

    const handleAddition = (myNewItem) => {
        const { id } = myNewItem;
        // console.log(id)
        const addProduct = addToDb(myNewItem);
        // console.log(addProduct)
        const restItem = addProduct.find((p) => p.id === id);
        // console.log(restItem.qty)
        setCount(restItem.qty)


    }
    const handleSubtraction = (menuFood) => {
        const { id } = myNewItem;
        const removeProductQty = removeQuantity(menuFood)
        // console.log(removeProductQty)
        const restItem = removeProductQty.find((p) => p.id === id);
        // console.log(restItem)
        if (restItem === 'undefined') {
            setCount(1)
        }
        else {
            setCount(restItem?.qty)
        }
        // setCount(restItem?.qty)
    }


    return (
        // <div className='lg:flex lg:flex-row sm:flex sm:flex-col'>
        //     <div className='lg:w-1/2 sm:w-full'>
        //         <figure><img className='rounded-xl px-12 pt-12' src='https://i.ibb.co/K6hpLmj/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg' alt="menu" /></figure>
        //     </div>
        //     <div className='text-left p-12'>
        //         <h1 className='text-3xl font-semibold'>{myItem.name}</h1>
        //         <p className='text-left text-sm'> Order Quantity: {myItem.qty}</p>
        //         <p className='text-left'><b>Price :</b> $20</p>
        //     </div>
        // </div>
        <div>
            <div class="container mx-auto mt-10">
                <div class="flex shadow-md my-10 ">
                    <div class="lg:w-3/4 bg-white lg:px-10 sm:py-2 sm:px-2 sm:w-full">

                        <p class="font-bold text-sm text-left">{myNewItem?.name}</p>
                        <div class="flex items-center hover:bg-gray-100 lg:-mx-8 lg:px-6 lg:py-5 sm:mx-4">
                            <div class="flex w-2/5">
                                <div class="lg:w-20 sm:w-24">
                                    <img class="h-24 p-1" src='https://i.ibb.co/K6hpLmj/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg' alt="" />
                                </div>

                            </div>
                            <div class="flex justify-center w-1/5">
                                {/* <MinusIcon onClick={() => handleSubtraction(myNewItem)} className='h-6 w-6'></MinusIcon> */}
                                {
                                    count > 1 ? <MinusIcon onClick={() => handleSubtraction(myNewItem)} className='h-6 w-6'></MinusIcon> : <MinusIcon className='h-6 w-6'></MinusIcon>
                                }
                                <input class="mx-2 border text-center w-6" type="text" disabled value={count} />

                                <PlusIcon onClick={() => handleAddition(myNewItem)} className='h-6 w-6'></PlusIcon>
                            </div>
                            <span class="text-center w-1/5 font-semibold text-sm">{count}</span>
                            {/* <span class="text-center w-1/5 font-semibold text-sm">{myItem?.priceList[0].mrp}</span> */}
                        </div>
                        {/* <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a> */}
                        <button onClick={() => removeFoodFromCart(myNewItem)} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>

                    </div>
                    {/* <TrashIcon onClick={() => handleRemoveItemFromCart(myNewItem)} className='h-6 w-6'></TrashIcon> */}

                </div>
            </div>

        </div >
    );
};

export default MyItems;