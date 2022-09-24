import React, { useEffect, useState } from 'react';
import MenuSelectedFood from '../Home/MenuSelectedFood';

const Allproducts = () => {
    const [menuFoods, setMenuFoods] = useState([]);
    const [openModal, setOpenModal] = useState(null);

    useEffect(() => {
        fetch('https://pos-api-v1.herokuapp.com/api/product/category/632041d1a4dc0dfbfc32d7c1')
            .then(res => res.json())
            .then(result => setMenuFoods(result))
    }, [])

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-5 gap-8 drop-shadow-md justify-items-center items-center pt-5 px-12'>
            {
                menuFoods?.length > 0 ?
                    menuFoods?.map(menuFood =>
                        <MenuSelectedFood
                            menuFood={menuFood}
                            setOpenModal={setOpenModal}
                        ></MenuSelectedFood>

                    )
                    :
                    <></>
            }

        </div>
    );
};

export default Allproducts;