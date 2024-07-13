import React, { useState } from 'react';
import { assets } from '../assets/assets';

function LoginPopUp({ setShowLogin }) {
    const [currentState, setCurrentState] = useState('Login');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle login or sign up logic here
    };

    const toggleLoginSignUp = () => {
        setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login');
    };

    return (
        <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'>
            <form
                className='self-center p-6 bg-white rounded-lg shadow-lg w-full max-w-[23vw] min-w-[330px]'
                onSubmit={handleFormSubmit}
            >
                <div className='flex items-center justify-between mb-4'>
                    <h2 className='text-xl font-semibold'>{currentState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt="Close"
                        className='cursor-pointer'
                    />
                </div>
                <div className="space-y-4">
                    {currentState === 'Sign Up' && (
                        <input
                            type='text'
                            placeholder='Your Name'
                            className='w-full px-3 py-2 border rounded shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-tomato'
                            style={{ hover: { backgroundColor: 'tomato' } }}
                            required
                        />
                    )}
                    <input
                        type='email'
                        placeholder='Your Email'
                        className='w-full px-3 py-2 border rounded shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-tomato'
                        style={{ hover: { backgroundColor: 'tomato' } }}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Your password'
                        className='w-full px-3 py-2 border rounded shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-tomato'
                        style={{ hover: { backgroundColor: 'tomato' } }}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className='w-full py-2 mt-4 text-white rounded bg-tomato'
                >
                    {currentState === 'Sign Up' ? 'Create Account' : 'Login'}
                </button>
                {currentState === 'Sign Up' && (
                    <div className="flex items-center mt-4">
                        <input type='checkbox' className='mr-2 bg-tomato text-tomato' required />
                        <p className='text-sm'>
                            By continuing, I agree to the Terms of Use and Privacy Policy
                        </p>
                    </div>
                )}
                <p className='mt-4 text-center'>
                    {currentState === 'Login' ? 'Create an Account' : 'Already have an account?'}{' '}
                    <span
                        onClick={toggleLoginSignUp}
                        className='cursor-pointer text-tomato'
                    >
                        ? Click Here
                    </span>
                </p>
            </form>
        </div>
    );
}

export default LoginPopUp;
