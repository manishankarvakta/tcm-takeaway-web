import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Category from './Category';
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Menus = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://pos-api-v1.herokuapp.com/api/category/master/91')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    const loadMenus = () => {

    }
    return (
        <div className='mb-5 justify-center items-center'>
            <h1 className='font-semibold text-3xl'>We Serve</h1>

            {/* <div className='flex justify-center items-center'>

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
            </div> */}

            <Carousel
                responsive={responsive}
            >
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
            </Carousel>;

        </div>


    );
};

export default Menus;