import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { toast } from 'react-toastify';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [otpField, setOtpField] = useState(false);
    const [otp, setOtp] = useState("")


    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);

    const onSubmit = data => {
        console.log(data)
        const isNumber = /^\d/.test(data?.address);

        if (isNumber) {
            callingSignInWithPhoneNumber(data)
        } else {
            callingSignInWithEmailAddress(data)
        }


    }
    const callingSignInWithEmailAddress = async data => {

        const isEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(data.address);
        const email = data.address

        if (isEmail) {
            await signInWithEmailAndPassword(email, data.password);
            navigate('/completeInfoPhone')

        }
        else {
            window.alert("Give valid Email Address")
        }    // console.log(isEmail)

    }

    const callingSignInWithPhoneNumber = async data => {
        signInWithPhone(data)
        setOtpField(true)
    }
    const generateRecapture = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('phone-sign-in', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.

            }
        }, auth);
    }

    const signInWithPhone = (data) => {
        console.log(data)
        generateRecapture();
        const phoneNumber = "+88" + data.address;
        console.log(phoneNumber)
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
                console.log(confirmationResult)
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });

    }
    const varifyOTP = (e) => {
        console.log(e)
        let otpValue = e?.target.value;
        console.log(otpValue)
        setOtp(otpValue)
        if (otpValue?.length === 6) {
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otpValue).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user)
                navigate('/completeInfo')
                toast('Log In Successful')
                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
            });
        }
    }


    // console.log(gUser)

    if (user || gUser || fuser) {

        navigate('/')
    }

    let signInError;
    if (error || gError || ferror) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    return (
        <div className='flex lg:h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email/Phone No</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Email/Phone Number"
                                className="input input-bordered w-full max-w-xs text-black"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Email/Phone number is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs text-black"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {
                            otpField && <>
                                <label className="label">
                                    <span className="label-text">OTP</span>
                                </label>
                                <input type="number" className="input input-bordered w-full max-w-xs text-black mb-4" onChange={varifyOTP} />
                            </>
                        }


                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>New to TCM ? <Link className='text-accent' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    {signInError}
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
                    <button
                        onClick={() => signInWithFacebook()}
                        className="btn btn-outline"
                    >Continue with Facebook</button>
                </div>
                <div id='phone-sign-in'></div>
            </div>
        </div >
    );
};

export default Login;