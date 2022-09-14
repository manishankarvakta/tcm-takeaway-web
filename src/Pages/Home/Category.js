import React from 'react';

const Category = ({ category }) => {
    console.log(category)
    const { name } = category
    return (
        <div>
            <div className='card bg-base-100 shadow-xl mx-2 pb-2 px-2 mb-2 hover:bg-orange-200 hover:scale-105'>
                <figure className="px-2 pt-2">
                    <img className='h-16 w-16 rounded-xl' src="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg" alt="burger" />
                </figure>
                <p className='text-sm'>{name}</p>
            </div>
        </div>
    );
};

export default Category;