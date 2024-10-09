import { ESize } from "../Helpers/Adnsize.enum";
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { IAdnTextFieldProps } from "./AdnTextField.type";
import React from "react";
import { ButtonClearOutline, EyeOutline } from "@/assets/svgs";
import { mergeRefs } from "@/common/utils/ref";

const AdnTextField: React.FC<IAdnTextFieldProps> = (props) => {
    const {
        ref,
        type = 'text',
        textFieldSize = ESize.M,
        placeholder,
        leftIcon,
        rightIcon,
        clearable = true,
        isFocused: isFocusedProp,
        value,
        isInvalid = false,
        disabled: isDisabled,
        ...rest
    } = props;
    const _ref = React.useRef<HTMLInputElement>(null);
    const mergedRef = mergeRefs([_ref, ref as React.LegacyRef<HTMLInputElement>]);
    const [isFocused, setIsFocused] = React.useState(isFocusedProp);
    const [typeInput, setTypeInput] = React.useState(type);
    const textFieldSizeClass = {
        [ESize.XS]: 'px-[4px] py-[4px]',
        [ESize.S]: 'px-[6px] py-[8px]',
        [ESize.M]: 'px-[8px] py-[12px]',
        [ESize.L]: 'px-[10px] py-[12px]',
        [ESize.XL]: 'px-[12px] py-[12px]',
    }[textFieldSize];


    const resolveStateFactory = {
        default: 'bg-bgNeutralSolidDefault border-transparent',
        active: 'bg-bgBase border-borderPrimary',
        error: 'bg-bgBase border-borderDanger',
        disabled: 'bg-bgNeutralDisable border-transparent',
    }

    const inputStyleWrapper = twMerge(
        clsx(
            'w-full gap-2 flex item-center  justify-center border-[3px] focus:outline-none focus:ring-1 rounded-[10px] shadow-sm',
            textFieldSizeClass,
            resolveStateFactory.default,
            isFocused && resolveStateFactory.active,
            isInvalid && resolveStateFactory.error,
            isDisabled && resolveStateFactory.disabled
        )
    );

    const inputStyle = twMerge(
        clsx(
            'w-full bg-transparent focus:outline-none text-fgNeutralHighEmphasis text-[16px] font-medium',
            {
                'text-fgNeutralSubtle': isDisabled,
            }
        )
    );

    const handleClear = () => {
        _ref.current!.value = '';
        props.onChange?.({ target: { value: '' } } as any);
        setIsFocused(true);
        _ref.current!.focus();
    };

    const shouldDisplayClearButton = Boolean(
        ['text', 'email'].includes(type) &&
        value?.toString()?.length &&
        clearable &&
        !isDisabled
    );

    const isShowButtonHide = Boolean(
        ['password'].includes(type) &&
        value?.toString()?.length &&
        !isDisabled
    );

    const handleToggleHide = () => {
        setTypeInput(typeInput === 'password' ? 'text' : 'password');
    };

    const handleFocus = (
        isFocus: boolean,
        event: any,
        callBack?: (event: any) => void,
    ) => {
        setIsFocused(isFocus);
        typeof callBack === 'function' && callBack(event);
    };


    return (
        <div className={inputStyleWrapper}>
            <button>
                {leftIcon && <>{leftIcon}</>}
            </button>
            <input
                ref={mergedRef}
                type={typeInput}
                placeholder={placeholder}
                disabled={isDisabled}
                className={inputStyle}
                onFocus={(e) => handleFocus(true, e, rest.onFocus)}
                onBlur={(e) => {
                    handleFocus(false, e, rest.onBlur);
                    setIsFocused(false);
                }}
                value={value}
                onChange={props.onChange}
                {...rest}
            />
            {
                shouldDisplayClearButton ? (
                    <button onClick={handleClear}>
                        <ButtonClearOutline className="cursor-pointer" />
                    </button>
                ) : null
            }
            {
                isShowButtonHide ? (
                    <button onClick={handleToggleHide}>
                        <EyeOutline className="cursor-pointer" />
                    </button>
                ) : null
            }
            {rightIcon && <>{rightIcon}</>}
        </div>
    )
};

export default AdnTextField;