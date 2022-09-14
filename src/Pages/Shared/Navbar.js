import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCartIcon, BeakerIcon } from '@heroicons/react/24/solid';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);

    };


    return (
        <div className="navbar bg-base-100 bg-slate-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-semibold'><Link to='/allproducts'>All Items</Link></li>
                        <li className='font-semibold'><Link to='/aboutus'>About us</Link></li>
                        {/* <li className='font-semibold'><Link to='/dashboard'>DashBoard</Link></li> */}
                        <li tabIndex={0}>
                            <Link to='/dashboard' className="justify-between">
                                DashBoard
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to='/dashboard'>Personal Info</Link></li>
                                <li><Link to='/dashboard/updatepersonalinfo'>Update Personal Info</Link></li>
                                <li><Link to='/dashboard/perivousorders'>Previous Order</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='h-full' src='https://i.ibb.co/Jk63Ptg/logo.png' alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='font-semibold'><Link to='/allproducts'>All Items</Link></li>
                    <li className='font-semibold'><Link to='/aboutus'>About us</Link></li>
                    <li className='font-semibold'><Link to='/dashboard'>DashBoard</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ShoppingCartIcon className="h-6 w-6 text-black"
                ></ShoppingCartIcon>

                {
                    user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to='/login'><p className='px-4 font-semibold'>Log In</p></Link>
                }



            </div>
        </div >
    );
};

export default Navbar;