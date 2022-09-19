import React, { useState } from 'react';
import { PlusCircleIcon, MinusCircleIcon, MinusIcon } from '@heroicons/react/24/solid';
import { addToDb, removeQuantity } from '../../hooks/localStorageCart3';

const ViewNewCartItems = ({ myNewItem, removeFoodFromCart }) => {
    const [count, setCount] = useState(1);
    // console.log(myNewItem)

    // console.log(myNewItem.qty)
    // setCount(myNewItem.qty) // ai line er jnno error ase


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
        <div>
            <div className='w-full flex justify-center items-center'>
                <div className='w-1/2'>
                    <figure><img className='rounded w-full' src='https://i.ibb.co/K6hpLmj/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg' alt="menu" /></figure>
                </div>
                <div className='w-1/2 justify-items-center items-center'>
                    <div>
                        <h2 className="text-center font-bold text-sm">{myNewItem?.name}</h2>

                        <p className='text-center text-xs'>Price: {myNewItem.priceList[0].mrp}</p>
                        <div className='flex justify-center items-center space-x-4 mb-2'>
                            {
                                count > 1 ? <MinusCircleIcon onClick={() => handleSubtraction(myNewItem)} className='h-6 w-6'></MinusCircleIcon> : <MinusCircleIcon className='h-6 w-6'></MinusCircleIcon>
                            }
                            {/* <input type="text" placeholder="0" disabled value={count} className="w-10 input input-bordered text-center"></input> */}
                            <p>{count}</p>
                            <PlusCircleIcon onClick={() => handleAddition(myNewItem)} className='h-6 w-6'></PlusCircleIcon>
                        </div>
                        <button onClick={() => removeFoodFromCart(myNewItem)} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewNewCartItems;