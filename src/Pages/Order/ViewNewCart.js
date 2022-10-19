import { TrashIcon } from '@heroicons/react/24/solid';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FoodCountContext } from '../../App';
import { deleteFoodCart, getStoredCart, removeFromDb } from '../../hooks/localStorageCart3';
import ViewNewCartItems from './ViewNewCartItems';

const ViewNewCart = () => {

    const myNewItems = getStoredCart();
    const navigate = useNavigate()
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
    const [totalSum, setTotalSum] = useState(0)

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('food_cart'));
        if (items) {
            setItems(items);
        }
    }, []);
    // console.log(items)



    const totalCalculation = (myNewItems = { myNewItems }) => {
        // console.log(myNewItems)
        let sum = 0;
        const totalCalculation2 = myNewItems?.map(items =>
            sum = (items.qty * items.priceList[0].mrp)
            // console.log(items.qty * items.priceList[0].mrp)

        )

        const total = totalCalculation2.reduce((totalSummation, a) => totalSummation + a, 0);
        // console.log(total)
        return total

    }

    const total = totalCalculation(myNewItems);

    useEffect(() => {
        setTotalSum(total);
    }, [myNewItems])



    // console.log(total)

    const navigateToOrderConfirmationPage = () => {
        navigate('/orderConfirmation')
    }
    let newCart = myNewItems?.sort((a, b) => b.order - a.order);

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

                    newCart?.length > 0 ?
                        newCart?.map(myNewItem =>
                            <ViewNewCartItems
                                myNewItem={myNewItem}
                                removeFoodFromCart={removeFoodFromCart}
                                totalCalculation={totalCalculation}
                                setTotalSum={setTotalSum}

                            ></ViewNewCartItems>

                        )
                        :
                        <></>
                }


            </div>
            <div className="divider"></div>
            <div className='flex justify-between items-center'>
                <p className='text-xs font-semibold'>Total</p>
                <p className='text-sm'>{totalSum}</p>
            </div>
            {
                newCart?.length > 0 ? <button onClick={() => navigateToOrderConfirmationPage()} className='btn bg-gradient-to-tr from-red-500 to-red-700 border-none text-white'>Check out</button> : <button disabled className='btn bg-gradient-to-tr from-gray-500 to-gray-700 border-none text-white'>Check out</button>
            }




        </div>
    );
};

export default ViewNewCart;