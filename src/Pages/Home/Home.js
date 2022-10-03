import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ViewDrawerCart from './ViewDrawerCart';
import { Helmet } from "react-helmet";

const Home = ({ setNav }) => {


    return (
        <div>
            <Helmet>
                <title>TCM TakeWay
                </title>

            </Helmet>
            <ViewDrawerCart
                setNav={setNav}
            ></ViewDrawerCart>


        </div >
    );
};

export default Home;