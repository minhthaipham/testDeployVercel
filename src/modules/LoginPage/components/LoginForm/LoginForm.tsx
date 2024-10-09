'use client'
import AdnButton from "@/common/OlComponent/AdnButton/AdnButton";
import { ILoginFormProps } from "./LoginForm.type";
import { LoginFormControl } from "./LoginFormControl";
import { LoginFormContext, TLoginFormField, useLoginFormControlProvider } from "./useLoginFormControl";
import { useState } from "react";
import TokenService from "@/common/utils/tokenService";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/lib/services/modules/authService";

const LoginForm: React.FC<ILoginFormProps> = () => {
    const router = useRouter();
    const [login] = useLoginMutation();
    const [isLoading, setIsLoading] = useState(false);
    const form = useLoginFormControlProvider();
    const onSubmit = async ({ account, password }: TLoginFormField) => {
        {
            try {
                setIsLoading(true);
                await login({
                    password: password,
                    userName: account,
                }).unwrap();
                router.push('/dashboard');
            } catch (error: any) {
                const errorResponse = error?.data?.field;
                if (errorResponse) {
                    form.setError(errorResponse, {
                        type: 'wrong',
                        message: error?.data?.message || 'Have some error, please try again!'
                    });
                    return;
                }
                form.setError('password', {
                    type: 'wrong',
                    message: 'Have some error, please try again!',
                });
            } finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <LoginFormContext.Provider value={{
            ...form, isLoading: isLoading, setIsLoadding(value) {
                setIsLoading(value);
            },
        }}>
            <div className="flex flex-1 flex-col gap-4">
                <LoginFormControl.Account />
                <LoginFormControl.Password />
                <AdnButton
                    children="Login"
                    isLoading={isLoading}
                    isDisabled={isLoading}
                    onClick={form.handleSubmit(onSubmit)}
                    className="mt-2"
                />
                <div>
                    <a href="#" className="text-fgNeutralSubtle font-medium hover:text-bgPrimarySolidFocus">Forgot password?</a>
                </div>
            </div>
        </LoginFormContext.Provider>
    );
};

export default LoginForm;