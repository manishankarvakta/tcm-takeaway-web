import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content mt-4">
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/aboutus' className="link link-hover">About us</Link>
                    <Link to='/career' className="link link-hover">Career</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/termsofuse' className="link link-hover">Terms of use</Link>
                    <Link to='/privacypolicy' className="link link-hover">Privacy policy</Link>
                    <Link to='/returnpolicy' className="link link-hover">Return policy</Link>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <a className="link link-hover">Phone No: +8801666-666666</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;