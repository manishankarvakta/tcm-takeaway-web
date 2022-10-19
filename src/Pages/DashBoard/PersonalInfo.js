import React from 'react';
import { Link, useNavigate } from "react-router-dom";


const PersonalInfo = () => {
    const navigate = useNavigate();

    const navigateToUpdate = () => {
        navigate('/dashboard/updatepersonalinfo')
    }


    return (
        <div className='flex justify-center items-center mt-5'>
            <div className='flex justify-center items-center'>
                <div className=" bg-neutral card card-compact lg:w-1/2 shadow-xl px-5 sm:w-96">
                    <figure><img className='rounded-full' src='https://i.ibb.co/Wx8MJWC/cheerful-curly-business-girl-wearing-glasses.jpg' alt="menu" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Prottasa Karim</h2>
                        <p className='text-left'><b>Address:</b> Faydabad Madrasa Road, Faydabad, Uttara, Dhaka-1230</p>
                        <p className='text-left'><b>Email Address:</b> prottasakarim99@gmail.com</p>
                        <p className='text-left'><b>Phone No:</b> +8801687142825</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => navigateToUpdate()} className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PersonalInfo;