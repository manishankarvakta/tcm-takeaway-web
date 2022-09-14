import React, { useState } from 'react';
import Banner from './Banner';
import Menus from './Menus';
import MenuSelectedFoods from './MenuSelectedFoods';


const Home = () => {
    const [id, setId] = useState('632034faef40a0aafbee12f9')
    return (
        <div>
            <Banner></Banner>
            <Menus setId={setId}></Menus>
            <MenuSelectedFoods
                id={id}
            ></MenuSelectedFoods>
        </div >
    );
};

export default Home;