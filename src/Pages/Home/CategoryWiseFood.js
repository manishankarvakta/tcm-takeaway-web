import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart, addToDb } from '../../hooks/localStorageCart3';
import { toast } from 'react-toastify';

const CategoryWiseFood = ({ menuFood, setOpenModal }) => {
    const { ean, name, _id, priceList } = menuFood;
    const navigate = useNavigate();

    const handleProductDetails = (id) => {
        navigate(`/product/${id}`)
    }
    const handleAddToCart = (id) => {
        const { _id } = menuFood;
        const addProduct = addToCart(menuFood);
        // console.log(addProduct)
        // const restItem = addProduct.find((p) => p.id === _id);
        // console.log(restItem.qty)
        // window.location.reload();
        toast("Your Item is added to your cart");

    }

    return (
        // <div className="drop-shadow-lg flex">

        //     <label
        //         htmlFor="food-details-modal"
        //         onClick={() => setOpenModal(menuFood)}
        //     ><figure><img className='rounded' src='https://i.ibb.co/K6hpLmj/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg' alt="menu" /></figure>
        //     </label>



        //     <div className="card-body">
        //         <h2 className="text-center font-bold text-md">{name}</h2>

        //         <p className='text-center'>Price: {priceList[0]?.mrp}</p>
        //     </div>

        //     <div className='flex space-x-4'>
        //         <button onClick={() => handleAddToCart(menuFood)} className='btn btn-xs'>Add to Cart</button>
        //         <button onClick={() => handleProductDetails(_id)} className='btn btn-xs'>View Details</button>
        //     </div>


        // </div>
        <div className='w-full flex justify-center items-center'>
            <div className='w-1/2'>
                <label
                    htmlFor="food-details-modal"
                    onClick={() => setOpenModal(menuFood)}
                ><figure><img className='rounded' src='https://i.ibb.co/K6hpLmj/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg' alt="menu" /></figure>
                </label>
            </div>
            <div className='w-1/2 justify-items-center items-center'>
                <div>
                    <h2 className="text-center font-bold text-md">{name}</h2>

                    <p className='text-center'>Price: {priceList[0]?.mrp}</p>
                </div>

                <div className='space-x-4 justify-end items-end'>
                    <button onClick={() => handleAddToCart(menuFood)} className='btn btn-xs'>Add to Cart</button>
                    {/* <button onClick={() => handleProductDetails(_id)} className='btn btn-xs'>View Details</button> */}
                </div>
            </div>

        </div>
    );
};

export default CategoryWiseFood;