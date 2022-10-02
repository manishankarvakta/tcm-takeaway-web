import React, { useState } from 'react';
import Banner from './Banner';
import CategoryWiseFoods from './CategoryWiseFoods';
import Menus from './Menus';
import MenuSelectedFoods from './MenuSelectedFoods';
import 'react-toastify/dist/ReactToastify.css';
import ViewDrawerCart from './ViewDrawerCart';
import { getStoredCart } from '../../hooks/localStorageCart3';
import { Helmet } from "react-helmet";

const Home = ({ setNav }) => {


    return (
        <div>
            <Helmet>
                <title>TCM TakeWay
                </title>
                <link rel="Home" type='image/jpg' href="https://i.ibb.co/6sy5871/front-view-burger-stand.jpg" />
            </Helmet>
            <ViewDrawerCart
                setNav={setNav}
            ></ViewDrawerCart>


        </div >
    );
};

export default Home;