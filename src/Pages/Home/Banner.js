import React from 'react';
import Slider from 'react-slick';


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    // const images = [
    //     {
    //         img: 'https://i.ibb.co/1v8zDXS/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden.jpg'
    //     }
    //     ,
    //     {
    //         img: 'https://i.ibb.co/pXhCdy2/greek-salad-with-fresh-vegetables-feta-cheese-kalamata-olives.jpg'
    //     },
    //     {
    //         img: 'https://i.ibb.co/kq2DZ1M/top-view-circular-food-frame.jpg'
    //     }
    // ]

    return (
        <div className="hero min-w-full mb-5" style={{ backgroundImage: `url("https://i.ibb.co/h7ChCwy/vegetables-set-left-black-slate.jpg")` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-left text-neutral-content">
                <div className="max-w-md p-10">
                    <h1 className="mb-5 text-5xl font-bold">Welocome to TCM</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {/* <button className="btn btn-primary rounded-full">Get Ordering</button> */}
                </div>
            </div>
        </div>

        // <div>

        //     {/* <Slider {...settings}>
        //         <div>
        //             <img  src='https://i.ibb.co/h7ChCwy/vegetables-set-left-black-slate.jpg' alt="" />
        //         </div>
        //         <div >
        //             <img src='https://i.ibb.co/1v8zDXS/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden.jpg' alt="" />
        //         </div>
        //         <div>
        //             <img src='https://i.ibb.co/pXhCdy2/greek-salad-with-fresh-vegetables-feta-cheese-kalamata-olives.jpg' alt="" />
        //         </div>
        //         <div>
        //             <img src='https://i.ibb.co/kq2DZ1M/top-view-circular-food-frame.jpg' alt="" />
        //         </div>

        //     </Slider> */}

        // </div>
    );
};

export default Banner;