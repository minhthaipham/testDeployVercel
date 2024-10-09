'use client';
import { AdnFormControl } from "@/common/OlComponent/AdnFormControl";
import { useLoginFormContext } from "./useLoginFormControl";
import { Controller } from "react-hook-form";
import AdnTextField from "@/common/OlComponent/AdnTextField/AdnTextField";
import { ESize } from "@/common/OlComponent/Helpers/Adnsize.enum";

const Account = () => {
    const {
        control,
        formState: { errors },
        isLoading,
      } = useLoginFormContext();

    return (
        <AdnFormControl>
            <AdnFormControl.Label>Account</AdnFormControl.Label>
            <Controller
                control={control}
                name="account"
                render={({ field: { onChange, value }, fieldState: { invalid } }) => (
                    <AdnTextField
                        placeholder={'Enter your account'}
                        type="text"
                        onChange={(e) => onChange(e.target.value)}
                        onSubmit={
                            (e) => {
                                e.preventDefault();
                            }
                        }
                        disabled={isLoading}
                        autoCapitalize="none"
                        value={value}
                        isInvalid={invalid}
                    />
                )}
            />
            <AdnFormControl.ErrorMessage>{errors.account?.message}</AdnFormControl.ErrorMessage>
        </AdnFormControl>
    )
};

const Password = () => {
    const {
        control,
        formState: { errors },
        isLoading,
    } = useLoginFormContext();

    return (
        <AdnFormControl>
            <AdnFormControl.Label>Password</AdnFormControl.Label>
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value }, fieldState: { invalid } }) => (
                    <AdnTextField
                        placeholder={'Enter your password'}
                        type="password"
                        onChange={onChange}
                        disabled={isLoading}
                        value={value}
                        isInvalid={invalid}
                    />
                )}
            />
            <AdnFormControl.ErrorMessage>{errors.password?.message}</AdnFormControl.ErrorMessage>
        </AdnFormControl>
    )
}

const LoginFormControl = { Account, Password };

export { LoginFormControl };