import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Category from './Category';
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

const Menus = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://pos-api-v1.herokuapp.com/api/category/master/91')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const loadMenus = () => {

    }
    return (
        <div className='mb-5 justify-center items-center'>
            <h1 className='font-semibold text-3xl'>We Serve</h1>

            <div className='flex justify-center items-center'>

                {
                    categories?.length > 0 ?
                        categories?.map(category =>
                            <Category
                                category={category}
                            ></Category>
                        )
                        :
                        <></>
                }
            </div>

        </div>


    );
};

export default Menus;