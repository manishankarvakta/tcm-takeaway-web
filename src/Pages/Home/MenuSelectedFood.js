import React from 'react';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from "react-router-dom";

const MenuSelectedFood = ({ menuFood, setOpenModal, count, setCount }) => {
    // console.log(menuFood)
    const { ean, name, _id } = menuFood;
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
                <PlusCircleIcon onClick={() => { handleAddition() }} className='h-6 w-6'></PlusCircleIcon>
                <input type="text" placeholder="0" disabled value={count || ''} className="w-20 input input-bordered text-center"></input>

                <MinusCircleIcon onClick={() => { handleSubtraction() }} className='h-6 w-6'></MinusCircleIcon>
            </div>
            <div className='flex space-x-4'>
                <button className='btn btn-xs'>Add to Cart</button>
                <button onClick={() => handleProductDetails(_id)} className='btn btn-xs'>View Details</button>
            </div>

        </div>
    );
};

export default MenuSelectedFood;