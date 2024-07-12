import React from 'react';
import { assets } from '../assets/assets';

function AppDownload() {
    return (
        <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg app-download">
            <p className="mb-4 text-xl font-semibold">
                For a Better Experience <br /> Download the Tomato App
            </p>
            <div className="flex justify-center space-x-4">
                <img
                    src={assets.play_store}
                    alt="Download on Google Play"
                    className="w-auto h-12 transition transform hover:scale-105"
                />
                <img
                    src={assets.app_store}
                    alt="Download on the App Store"
                    className="w-auto h-12 transition transform hover:scale-105"
                />
            </div>
        </div>
    );
}

export default AppDownload;
