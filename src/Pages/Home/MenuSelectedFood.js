import React from 'react';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from "react-router-dom";

const MenuSelectedFood = ({ menuFood, setOpenModal, count, setCount, setShowModal }) => {
    const { strMealThumb, strMeal } = menuFood;
    const navigate = useNavigate();

    const handleAddition = () => {
        count = count + 1;
        setCount(count);
    }
    const handleSubtraction = () => {
        if (count > 0) {
            count = count - 1;
            setCount(count);
        }

    }
    const handleProductDetails = () => {

    }


    return (
        <div className="drop-shadow-md ">
            <label
                htmlFor="food-details-modal"
                onClick={() => setOpenModal(menuFood)}
            ><figure><img className='rounded-full' src={strMealThumb} alt="menu" /></figure>
            </label>
            {/* <figure><img className='rounded-full' src={strMealThumb} alt="menu" /></figure>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpenModal(menuFood)}
            >
                Open regular modal
            </button> */}

            <div className="card-body">
                <h2 className="text-center font-bold text-lg">{strMeal}</h2>

                <p className='text-center'>Price: $20</p>
            </div>
            <div className='flex justify-center items-center space-x-4 mb-4'>
                <PlusCircleIcon onClick={() => { handleAddition() }} className='h-6 w-6'></PlusCircleIcon>
                <input type="text" placeholder="0" disabled value={count || ''} className="w-20 input input-bordered text-center"></input>

                <MinusCircleIcon onClick={() => { handleSubtraction() }} className='h-6 w-6'></MinusCircleIcon>
            </div>
            <div className='flex space-x-4'>
                <button className='btn btn-xs'>Add to Cart</button>
                <button onClick={() => handleProductDetails()} className='btn btn-xs'>View Details</button>
            </div>

        </div>
    );
};

export default MenuSelectedFood;