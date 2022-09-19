import React from 'react';

const Banner = () => {
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
    );
};

export default Banner;