import React from 'react';
import { getStoredCart } from '../../hooks/localStorageCart3';
import MyItems from './MyItems';

const ViewCart = () => {
    const myItems = getStoredCart();
    console.log(myItems)
    return (
        <div>
            {

                myItems.length > 0 ?
                    myItems?.map(myItem =>
                        <MyItems
                            myItem={myItem}
                        ></MyItems>
                        // console.log(menuFood.strMeal)
                    )
                    :
                    <></>

            }
        </div>
    );
};

export default ViewCart;