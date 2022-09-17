import React from 'react';
import { getStoredCart } from '../../hooks/localStorageCart3';
import MenuSelectedFood from './MenuSelectedFood';

const GetDataFromLocalStore = () => {
    const foodItems = getStoredCart();
    console.log(foodItems)
    return (
        <div>
            {
                foodItems?.length > 0 ?
                    foodItems?.map(foodItem =>
                        <MenuSelectedFood
                            foodItem={foodItem}
                        ></MenuSelectedFood>
                        // console.log(menuFood.strMeal)
                    )
                    :
                    <></>
            }
        </div>
    );
};

export default GetDataFromLocalStore;