import React from 'react';
import { addToCart } from '../../hooks/localStorageCart3';
import { toast } from 'react-toastify';

const NewFoodModal = ({ openModal, setOpenModal }) => {
    console.log(openModal)
    const { name } = openModal;
    const handleAddToCart = (openModal) => {
        const { _id } = openModal;
        const addProduct = addToCart(openModal);
        // console.log(addProduct)
        // const restItem = addProduct.find((p) => p.id === _id);
        // console.log(restItem.qty)
        // window.location.reload();
        toast("Your Item is added to your cart");

    }

    return (
        <div>
            <input type="checkbox" id="food-details-modal" className="modal-toggle" />
            <label htmlFor="food-details-modal" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <div className='w-full flex'>
                        <div className='w-1/2'>
                            <figure><img className='rounded-lg w-full columns-6' src='https://i.ibb.co/K6hpLmj/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg' alt="menu" /></figure>
                        </div>
                        <div className='w-1/2'>
                            <h1 className='font-semibold'>{name}</h1>
                            <button onClick={() => handleAddToCart(openModal)} className='btn btn-accent btn-xs text-white'>Add to Cart</button>
                        </div>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default NewFoodModal;