import React, { useState } from 'react';
import { getStoredCart } from '../../hooks/localStorageCart3';
import ViewNewCart from '../Order/ViewNewCart';
import Banner from './Banner';
import CategoryWiseFoods from './CategoryWiseFoods';
import Menus from './Menus';

const ViewDrawerCart = ({ setNav }) => {
    const getCartData = getStoredCart();
    const [id, setId] = useState('632034faef40a0aafbee12f9')
    return (
        <div className='max-h-max'>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content overflow-hidden">

                    <Banner></Banner>
                    <Menus setId={setId}></Menus>
                    {/* <MenuSelectedFoods
                id={id}
            ></MenuSelectedFoods> */}
                    <CategoryWiseFoods
                        id={id}
                        setNav={setNav}
                    ></CategoryWiseFoods>
                    {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <div className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">

                        <ViewNewCart
                        ></ViewNewCart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDrawerCart;