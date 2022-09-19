import React, { useState } from 'react';
import Banner from './Banner';
import CategoryWiseFoods from './CategoryWiseFoods';
import Menus from './Menus';
import MenuSelectedFoods from './MenuSelectedFoods';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const [id, setId] = useState('632034faef40a0aafbee12f9')
    return (
        <div>
            <Banner></Banner>
            <Menus setId={setId}></Menus>
            {/* <MenuSelectedFoods
                id={id}
            ></MenuSelectedFoods> */}
            <CategoryWiseFoods id={id}></CategoryWiseFoods>

        </div >
    );
};

export default Home;