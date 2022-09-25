import React, { useState } from 'react';
import Banner from './Banner';
import CategoryWiseFoods from './CategoryWiseFoods';
import Menus from './Menus';
import MenuSelectedFoods from './MenuSelectedFoods';
import 'react-toastify/dist/ReactToastify.css';
import ViewDrawerCart from './ViewDrawerCart';
import { getStoredCart } from '../../hooks/localStorageCart3';


const Home = ({ setNav }) => {


    return (
        <div>
            <ViewDrawerCart
                setNav={setNav}
            ></ViewDrawerCart>


        </div >
    );
};

export default Home;