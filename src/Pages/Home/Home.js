import React, { useState } from 'react';
import Banner from './Banner';
import CategoryWiseFoods from './CategoryWiseFoods';
import Menus from './Menus';
import MenuSelectedFoods from './MenuSelectedFoods';
import 'react-toastify/dist/ReactToastify.css';
import ViewDrawerCart from './ViewDrawerCart';
import { getStoredCart } from '../../hooks/localStorageCart3';


const Home = () => {


    return (
        <div className='overflow-x-hidden'>
            <ViewDrawerCart />


        </div >
    );
};

export default Home;