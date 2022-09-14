import React, { useEffect, useState } from 'react';
import FoodDetailsModal from './FoodDetailsModal';
import MenuSelectedFood from './MenuSelectedFood';

const MenuSelectedFoods = () => {

    const [menuFoods, setMenuFoods] = useState([]);
    const [openModal, setOpenModal] = useState(null);
    // const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(result => setMenuFoods(result.meals))
    }, [])


    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-5 gap-12 drop-shadow-md justify-items-center items-center pt-5 px-16'>
            {
                menuFoods?.length > 0 ?
                    menuFoods?.map(menuFood =>
                        <MenuSelectedFood
                            menuFood={menuFood}
                            setOpenModal={setOpenModal}
                            setCount={setCount}
                            count={count}
                        ></MenuSelectedFood>
                        // console.log(menuFood.strMeal)
                    )
                    :
                    <></>
            }
            {
                openModal && <FoodDetailsModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                ></FoodDetailsModal>
            }
        </div >
    );
};

export default MenuSelectedFoods;