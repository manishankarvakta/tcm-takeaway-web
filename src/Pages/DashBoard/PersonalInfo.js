import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";


const PersonalInfo = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {

    }


    return (
        <div className='flex justify-center items-center mt-5'>
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl px-5">
                    <figure><img className='rounded-full' src='https://i.ibb.co/Wx8MJWC/cheerful-curly-business-girl-wearing-glasses.jpg' alt="menu" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Prottasa Karim</h2>
                        <p className='text-left'><b>Address:</b> Faydabad Madrasa Road, Faydabad, Uttara, Dhaka-1230</p>
                        <p className='text-left'><b>Email Address:</b> prottasakarim99@gmail.com</p>
                        <p className='text-left'><b>Phone No:</b> +8801687142825</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PersonalInfo;