import React from 'react';

const MenuSelectedFood = ({ menuFood }) => {
    console.log(menuFood);
    const { strMealThumb, strMeal } = menuFood;
    return (
        <div className="">
            <figure><img className='rounded' src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p className='text-left'>If a dog chews shoes whose shoes does he choose?</p>
                <p className='text-left'>Price: $20</p>
            </div>
        </div>
    );
};

export default MenuSelectedFood;