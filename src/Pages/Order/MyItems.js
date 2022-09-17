import React from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

const MyItems = ({ myItem }) => {
    console.log(myItem)
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

                        <p class="font-bold text-sm text-left">{myItem?.name}</p>
                        <div class="flex items-center hover:bg-gray-100 lg:-mx-8 lg:px-6 lg:py-5 sm:mx-4">
                            <div class="flex w-2/5">
                                <div class="lg:w-20 sm:w-24">
                                    <img class="h-24 p-1" src='https://i.ibb.co/K6hpLmj/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg' alt="" />
                                </div>

                            </div>
                            <div class="flex justify-center w-1/5">
                                <MinusIcon className='h-6 w-6'></MinusIcon>

                                <input class="mx-2 border text-center w-6" type="text" value="1" />

                                <PlusIcon className='h-6 w-6'></PlusIcon>
                            </div>
                            <span class="text-center w-1/5 font-semibold text-sm">{myItem?.qty}</span>
                            {/* <span class="text-center w-1/5 font-semibold text-sm">{myItem?.priceList[0].mrp}</span> */}
                        </div>
                        <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyItems;