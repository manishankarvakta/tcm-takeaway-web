import React, { useEffect, useState } from 'react';
import CategoryWiseFood from './CategoryWiseFood';
import FoodDetailsModal from './FoodDetailsModal';
import NewFoodModal from './NewFoodModal';
import Loading from '../Shared/Loading'

const CategoryWiseFoods = ({ id, setNav }) => {
    const [menuFoods, setMenuFoods] = useState([]);
    const [openModal, setOpenModal] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const url = `https://pos-api-v1.herokuapp.com/api/product/category/${id}`
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(result => setMenuFoods(result))
    }, [id])

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 drop-shadow-md justify-items-center items-center pt-5 px-16'>
            {
                menuFoods?.length > 0 ?
                    menuFoods?.map(menuFood =>
                        <CategoryWiseFood
                            key={menuFood._id}
                            menuFood={menuFood}
                            setOpenModal={setOpenModal}
                            setNav={setNav}
                        ></CategoryWiseFood>

                    )
                    :
                    <>
                        <p>Coming Soon.........</p>

                    </>
            }
            {/* {
                openModal && <FoodDetailsModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                ></FoodDetailsModal>
            } */}
            {
                openModal && <NewFoodModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                ></NewFoodModal>
            }

        </div>
    );
};

export default CategoryWiseFoods;