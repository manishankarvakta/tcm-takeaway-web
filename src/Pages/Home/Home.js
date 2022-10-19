import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ViewDrawerCart from './ViewDrawerCart';
import { Helmet } from "react-helmet";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Home = ({ setNav }) => {
    const [user] = useAuthState(auth);
    console.log(user)

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