'use client';
import { LtWelcome } from '@/assets/lotties';
import AuthLottieAnimation from '@/common/components/AuthLottieAnimation/AuthLottieAnimation';
import Lottie from 'lottie-react';
import React, { useEffect } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { logout } from '@/lib/features/authSlice';

const LoginPage = () => {
    return (
        <div className='bg-white h-full w-full rounded-md p-3 xl:flex items-center justify-center '>
            <div className='hidden xl:flex flex-1'>
                <AuthLottieAnimation
                    title='Login to your account'
                    description='Enter your credentials to access your account'
                />
            </div>
            <div className="flex-1 flex items-center justify-center xl:p-20 h-full">
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
