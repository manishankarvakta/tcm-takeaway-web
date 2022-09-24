import React from 'react';
import { useForm } from 'react-hook-form';

const OrderConfirm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className='px-12'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
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
    );
};

export default OrderConfirm;