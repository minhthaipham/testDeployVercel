import { IAdnButtonProps } from "./AdnButton.type";
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ESize } from "../Helpers/Adnsize.enum";

const AdnButton: React.FC<IAdnButtonProps> = (props) => {
    const {
        children,
        isDisabled,
        className,
        isLoading,
        size = ESize.M,
        ...rest
    } = props;

    const sizeButtonClass = {
        [ESize.S]: 'px-[8px] py-[4px]',
        [ESize.M]: 'px-[12px] py-[10px]',
        [ESize.L]: 'px-[6px] py-[8px]',
        [ESize.XL]: 'px-[16px] py-[12px]',
    }[size];

    const buttonClass = twMerge(
        clsx(
            `flex justify-center items-center rounded-[10px] border-1`,
            sizeButtonClass,
            'bg-bgPrimarySolidFocus !text-white focus:outline-none focus:ring-1  focus:ring-opacity-50',
            className,
            {
                'bg-bgPrimarySolidDefault': isDisabled,
                'bg-bgPrimarySolidFocus': !isDisabled,
            },
            {
                'hover:bg-bgPrimarySolidHover': !isDisabled,
                'focus:ring-primary': !isDisabled,
            }
        )
    );

    return (
        <button
            disabled={isDisabled || isLoading}
            {...rest}
            className={
                buttonClass
            }
        >
            {isLoading ? 'Loading...' : children}
        </button>
    );
}
export default AdnButton;