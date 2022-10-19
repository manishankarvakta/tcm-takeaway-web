import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Category from "./Category";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Menus = ({ setId }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://pos-api-v1.herokuapp.com/api/category/master/91")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // const settings = {
  //     dots: true,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,

  // };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "20px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "20px" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <SamplePrevArrow />
    ,
    nextArrow: <SampleNextArrow />
    ,
    beforeChange: (current, next) => {
      console.log(next);
    },
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };


  return (
    <div className="mb-5 justify-center items-center lg:px-12">
      <h1 className="font-semibold text-3xl"><i>Categories</i></h1>

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

      <div className="my-5 mx-5">
        {categories?.length > 0 ? (
          <Slider {...settings}>
            {categories?.map((category) => (
              <Category
                category={category}
                key={category._id}
                setId={setId}
              ></Category>
            ))}
          </Slider>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Menus;
