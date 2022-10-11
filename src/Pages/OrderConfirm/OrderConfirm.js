import axios from 'axios';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteFoodCart, getStoredCart } from '../../hooks/localStorageCart3';

const OrderConfirm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();


    const onSubmit = data => {
        const order = getStoredCart();
        const orderDeatils = {
            source: 'web',
            warehouse: '',
            products: order,
            paidAmount: '',
            delivery: {
                address: data.address,
                phone: data.pNumber,
            },
            changeAmount: '',
            totalReceived: '',
            grossTotal: '',
            grossTotalRound: '',
            totalItem: '',
            total: '',
            vat: '',
            discount: '',
            billerId: '',
            customerId: '62e301c1ee6c8940f6ac1515',
            status: 'complete'

        }
        const url = `https://pos-api-v1.herokuapp.com/api/sale`;

        axios
            .post(url, JSON.stringify(orderDeatils))
            .then((data) => {
                if (data.status) {
                    toast.success('Order Confirmed Successfully', {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })
                    reset();
                    deleteFoodCart();
                    navigate('/')
                }
                else {
                    toast.error('Failed to Order. Please Give Correct Information', {
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                }
            });

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(orderDeatils)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.status) {
        //             toast.success('Order Confirm successfully')
        //             reset();
        //         }
        //         else {
        //             toast.error('Failed to Order');
        //         }
        //     });
        // console.log(orderDeatils)
    }



    return (
        <div>
            <Helmet>
                <title>Confirm Order</title>
            </Helmet>
            <div className='flex lg:h-screen justify-center items-center'>
                <div className="card sm:w-96  lg:w-1/2  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Delivery Information</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Address</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Your Address"
                                    className="input input-bordered w-full h-32"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is Required'
                                        },
                                        pattern: {
                                            // message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Phone</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Phone Number"
                                    className="input input-bordered w-full"
                                    {...register("pNumber", {
                                        required: {
                                            value: true,
                                            message: 'Phone Number is Required'
                                        },
                                        pattern: {
                                            // message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.pNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.pNumber.message}</span>}
                                </label>
                            </div>
                            <input className='btn w-full max-w-xs text-white' type="submit" value="Confirm Order" />
                        </form>
                    </div>
                </div>
            </div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control lg:w-1/2 sm:w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Address</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Your Address"
                        className="input input-bordered w-full"
                        {...register("address", {
                            required: {
                                value: true,
                                message: 'Address is Required'
                            },
                            pattern: {
                                // message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                    </label>
                </div>
                <div className="form-control lg:w-1/2 sm:w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Phone</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Phone Number"
                        className="input input-bordered w-full"
                        {...register("pNumber", {
                            required: {
                                value: true,
                                message: 'Phone Number is Required'
                            },
                            pattern: {
                                // message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.pNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.pNumber.message}</span>}
                    </label>
                </div>
                <input className='btn w-full max-w-xs text-white' type="submit" value="Confirm Order" />
            </form> */}
        </div>
    );
};

export default OrderConfirm;