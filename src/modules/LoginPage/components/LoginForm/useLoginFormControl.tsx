'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export type TLoginFormField = {
    account: string;
    password: string;
};

export type LoginFormContextData = ReturnType<typeof useLoginFormControlProvider> & {
    isLoading: boolean;
    setIsLoadding: (value: boolean) => void;
};

export const LoginFormContext = React.createContext({} as LoginFormContextData);

const useLoginFormResolver = () => {
    const schema = yup.object<TLoginFormField>().shape({
        account: yup.string().required(
            'Account is required'
        ),
        password: yup.string().required(
            'Password is required'
        ).min(6, 'Password must be at least 6 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
            ),
    });
    return yupResolver(schema, { abortEarly: false });
};

export function useLoginFormControlProvider() {
    const resolver = useLoginFormResolver();
    return useForm<TLoginFormField>({ resolver, defaultValues: { account: '', password: '' } });
  }
  
  export function useLoginFormContext(): LoginFormContextData {
    return React.useContext(LoginFormContext);
  }
  
