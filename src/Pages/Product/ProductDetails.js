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
        await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(result => setProduct(result.meals))

    }
    useEffect(() => {
        getData(id)
    }, [id])
    console.log(product[0])
    return (
        <div className='flex p-6 space-x-4 row'>
            <div className='col-5'>
                <figure><img className='rounded-lg' src={product[0]?.strMealThumb} alt="menu" /></figure>
            </div>
            <div className='col-7'>
                <h1 className='text-3xl font-semibold'>{product[0]?.strMeal}</h1>
                <p className='text-sm text-left'>{product[0]?.strInstructions}</p>
                <p className='inset-y-0 left-0 w-16 '> <StarRatings
                    numberOfStars={1}
                    starDimension="20px"
                    starRatedColor='rgb(249, 249, 7)'
                    rating={1}
                /> 4.3</p>
                <p className='text-left'><b>Price :</b> $20</p>
            </div>

        </div>
    );
};

export default ProductDetails;