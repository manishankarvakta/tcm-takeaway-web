import React from 'react';
import Banner from './Banner';
import Menus from './Menus';
import MenuSelectedFoods from './MenuSelectedFoods';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Menus></Menus>
            <MenuSelectedFoods></MenuSelectedFoods>
        </div>
    );
};

export default Home;