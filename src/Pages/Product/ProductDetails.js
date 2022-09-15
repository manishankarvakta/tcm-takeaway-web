import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import StarRatings from 'react-star-ratings';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    console.log(id)
    const getData = async id => {
        await fetch(`https://pos-api-v1.herokuapp.com/api/product/${id}`)
            .then(res => res.json())
            .then(result => setProduct(result))

    }
    useEffect(() => {
        getData(id)
    }, [id])
    console.log(product)
    return (
        // <div className='flex p-6 space-x-4 row'>
        //     <div className='col-5'>
        //         <figure><img className='rounded-lg' src='https://i.ibb.co/K6hpLmj/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg' alt="menu" /></figure>
        //     </div>
        //     <div className='col-7'>
        //         <h1 className='text-3xl font-semibold'>{product.name}</h1>
        //         <p className='inset-y-0 left-0 w-16 '> <StarRatings
        //             numberOfStars={1}
        //             starDimension="20px"
        //             starRatedColor='rgb(249, 249, 7)'
        //             rating={1}
        //         /> 4.3</p>
        //         <p className='text-left'><b>Price :</b> $20</p>
        //     </div>

        // </div >
        <div className='lg:flex lg:flex-row sm:flex sm:flex-col'>
            <div className='lg:w-1/2 sm:w-full'>
                <figure><img className='rounded-xl px-12 pt-12' src='https://i.ibb.co/K6hpLmj/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl.jpg' alt="menu" /></figure>
            </div>
            <div className='text-left p-12'>
                <h1 className='text-3xl font-semibold'>{product.name}</h1>
                <p className='inset-y-0 left-0 w-16 '> <StarRatings
                    numberOfStars={1}
                    starDimension="20px"
                    starRatedColor='rgb(249, 249, 7)'
                    rating={1}
                /> 4.3</p>
                <p className='text-left text-sm'>{product.details}</p>
                <p className='text-left'><b>Price :</b> $20</p>
            </div>

        </div>

    );
};

export default ProductDetails;