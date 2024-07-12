import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
    return (
        <div className="py-8 text-white bg-gray-800 md:justify-center">
            <div className="container flex flex-wrap items-start justify-between px-4 mx-auto md:px-8 lg:px-16">
                <div className="w-full mb-8 md:w-1/3 md:mb-0">
                    <img src={assets.logo} alt="Company Logo" className="mb-4" />
                    <p className="mb-4 text-gray-400">Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className="flex space-x-6">
                        <img src={assets.facebook_icon} alt="Facebook" className="w-8 h-8 cursor-pointer" />
                        <img src={assets.twitter_icon} alt="Twitter" className="w-8 h-8 cursor-pointer" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" className="w-8 h-8 cursor-pointer" />
                    </div>
                    <p className="mt-6 mb-4 text-xl font-semibold">
                        For a Better Experience <br /> Download the Tomato App
                    </p>
                </div>
                <div className="w-full mb-8 md:w-1/3 md:mb-0">
                    <h2 className="mb-4 text-lg font-semibold">Company</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <div className='mt-6'>
                        <img
                            src={assets.play_store}
                            alt="Download on Google Play"
                            className="w-auto h-12 transition transform hover:scale-105"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <h2 className="mb-4 text-lg font-semibold">Get in Touch</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li>+91 8319277593</li>
                        <li>vikassinghlodhi831@gmail.com</li>
                    </ul>
                    <button className="px-4 py-2 mt-4 font-semibold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600">
                        Contact Us
                    </button>
                    <div className="mt-8">
                        <div className="flex justify-start space-x-4">
                            <img
                                src={assets.app_store}
                                alt="Download on the App Store"
                                className="w-auto h-12 transition transform hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
