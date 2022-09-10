import React from 'react';

const Menus = () => {
    const loadMenus = () => {

    }
    return (
        <div className='mb-5 justify-center items-center'>
            <h1>Menu</h1>

            <div className='flex justify-center items-center'>
                <div onClick={() => { loadMenus() }} className='card bg-base-100 shadow-xl mx-2 pb-2 px-2 hover:bg-orange-200 hover:scale-105'>
                    <figure className="px-2 pt-2">
                        <img className='h-16 w-16 rounded-xl' src="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg" alt="burger" />
                    </figure>
                    <p className='text-sm'>Pasta</p>
                </div>

                <div className='card bg-base-100 shadow-xl mx-2 pb-2 px-2  hover:bg-orange-200 hover:scale-105'>
                    <figure className="px-2 pt-2">
                        <img className='h-16 w-16 rounded-xl' src="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg" alt="burger" />
                    </figure>
                    <p className='text-sm'>Salad</p>
                </div>
                <div className='card bg-base-100 shadow-xl mx-2 pb-2 px-2  hover:bg-orange-200 hover:scale-105'>
                    <figure className="px-2 pt-2">
                        <img className='h-16 w-16 rounded-xl' src="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg" alt="burger" />
                    </figure>
                    <p className='text-sm'>Pizza</p>
                </div>
                <div className='card bg-base-100 shadow-xl mx-2 pb-2 px-2 hover:bg-orange-200 hover:scale-105'>
                    <figure className="px-2 pt-2">
                        <img className='h-16 w-16 rounded-xl' src="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg" alt="burger" />
                    </figure>
                    <p className='text-sm'>Fresh Fruits
                    </p>
                </div>
                <div className='card bg-base-100 shadow-xl mx-2 pb-2 px-2  hover:bg-orange-200 hover:scale-105'>
                    <figure className="px-2 pt-2">
                        <img className='h-16 w-16 rounded-xl' src="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg" alt="burger" />
                    </figure>
                    <p className='text-sm'>Sub Sandwich</p>
                </div>
                <div className='card bg-base-100 shadow-xl mx-2 pb-2 px-2  hover:bg-orange-200 hover:scale-105'>
                    <figure className="px-2 pt-2">
                        <img className='h-16 w-16 rounded-xl' src="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg" alt="burger" />
                    </figure>
                    <p className='text-sm'>Sandwich
                    </p>
                </div>
                <div className='card bg-base-100 shadow-xl mx-2 pb-2 px-2  hover:bg-orange-200 hover:scale-105'>
                    <figure className="px-2 pt-2">
                        <img className='h-16 w-16 rounded-xl' src="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg" alt="burger" />
                    </figure>
                    <p className='text-sm'>Fish and Fry

                    </p>
                </div>
                <div className='card bg-base-100 shadow-xl mx-2 pb-2 px-2  hover:bg-orange-200 hover:scale-105'>
                    <figure className="px-2 pt-2">
                        <img className='h-16 w-16 rounded-xl' src="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg" alt="burger" />
                    </figure>
                    <p className='text-sm'>Fries</p>
                </div>
                <div className='card bg-base-100 shadow-xl mx-2 pb-2 px-2  hover:bg-orange-200 hover:scale-105'>
                    <figure className="px-2 pt-2">
                        <img className='h-16 w-16 rounded-xl' src="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg" alt="burger" />
                    </figure>
                    <p className='text-sm'>Fruit Juice</p>
                </div>
                <div className='card bg-base-100 shadow-xl mx-2 pb-2 px-2 hover:bg-orange-200 hover:scale-105'>
                    <figure className="px-2 pt-2">
                        <img className='h-16 w-16 rounded-xl' src="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg" alt="burger" />
                    </figure>
                    <p className='text-sm'>Hot Drinks</p>
                </div>
            </div>

        </div>


    );
};

export default Menus;