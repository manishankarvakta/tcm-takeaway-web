import React from 'react';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid'

const FoodDetailsModal = ({ openModal, setOpenModal }) => {
    const { name } = openModal;
    return (
        <div>
            <input type="checkbox" id="food-details-modal" className="modal-toggle" />
            <div className="modal justify-center items-center">
                <div className="modal-box">

                    <div className="card lg:card-side row">
                        <figure><img className='rounded-lg w-full columns-6' src='https://i.ibb.co/K6hpLmj/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg' alt="menu" /></figure>
                        <div className="card-body columns-6">
                            <h2 className="card-title">{name}</h2>
                            {/* <p className='text-sm text-left'></p> */}
                            <div className='flex justify-items-center items-center space-x-4 mb-4'>
                                <PlusCircleIcon className='h-6 w-6'></PlusCircleIcon>
                                <input type="text" placeholder="0" className="w-20 input input-bordered" />
                                <MinusCircleIcon className='h-6 w-6'></MinusCircleIcon>
                            </div>
                        </div>
                    </div>



                    {/* <div className='flex flex-row '>
                        <figure><img className='rounded-lg w-full basis-1/2' src={strMealThumb} alt="menu" /></figure>
                        <div>
                            <h3 className="font-bold text-lg">{strMeal}</h3>
                            <p className="py-4 text-left">{strInstructions}</p>
                            <div className='flex justify-items-center items-center space-x-4 mb-4'>
                                <PlusCircleIcon className='h-6 w-6'></PlusCircleIcon>
                                <input type="text" placeholder="0" className="w-20 input input-bordered" />
                                <MinusCircleIcon className='h-6 w-6'></MinusCircleIcon>
                            </div>
                        </div>
                    </div> */}

                    <div className="modal-action">
                        <label htmlFor="food-details-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default FoodDetailsModal;