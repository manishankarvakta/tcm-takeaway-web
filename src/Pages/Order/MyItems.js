import React from 'react';

const MyItems = ({ myItem }) => {
    console.log(myItem.name)
    return (
        <div className='lg:flex lg:flex-row sm:flex sm:flex-col'>
            <div className='lg:w-1/2 sm:w-full'>
                <figure><img className='rounded-xl px-12 pt-12' src='https://i.ibb.co/K6hpLmj/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg' alt="menu" /></figure>
            </div>
            <div className='text-left p-12'>
                <h1 className='text-3xl font-semibold'>{myItem.name}</h1>
                <p className='text-left text-sm'> Order Quantity: {myItem.qty}</p>
                <p className='text-left'><b>Price :</b> $20</p>
            </div>

        </div>
    );
};

export default MyItems;