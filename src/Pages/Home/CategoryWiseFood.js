import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart, addToDb, getStoredCart } from '../../hooks/localStorageCart3';
import { toast } from 'react-toastify';
import Navbar from '../Shared/Navbar';
import { useContext } from 'react';
import { CountContext } from '../../App';

const CategoryWiseFood = ({ menuFood, setOpenModal, setNav }) => {

    const [cartCount, setCartCount] = useContext(CountContext)
    const { ean, name, _id, priceList } = menuFood;
    const navigate = useNavigate();

    const handleProductDetails = (id) => {
        navigate(`/product/${id}`)
    }
    const handleAddToCart = (id) => {
        const { _id } = menuFood;
        const addProduct = addToCart(menuFood);
        const getCart = getStoredCart()
        setNav(getCart)
        setCartCount(getCart?.length)
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
                    <button onClick={() => handleAddToCart(menuFood)} className='btn btn-xs btn-accent text-white'>Add to Cart</button>
                    {/* <button onClick={() => handleProductDetails(_id)} className='btn btn-xs'>View Details</button> */}
                </div>
            </div>

        </div>
    );
};

export default CategoryWiseFood;