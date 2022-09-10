import React, { useEffect, useState } from 'react';
import MenuSelectedFood from './MenuSelectedFood';

const MenuSelectedFoods = () => {

    const [menuFoods, setMenuFoods] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(result => setMenuFoods(result.meals))
    }, [])
    console.log(menuFoods)

    return (
        <div className='grid grid-cols-4 gap-3 justify-items-center items-center px-6'>
            {
                menuFoods?.length > 0 ?
                    menuFoods?.map(menuFood =>
                        <MenuSelectedFood
                            menuFood={menuFood}
                        ></MenuSelectedFood>
                        // console.log(menuFood.strMeal)
                    )
                    :
                    <></>
            }
        </div>
    );
};

export default MenuSelectedFoods;