import { ESize } from "../Helpers/Adnsize.enum";

export type TAdnButtonSize = ESize.S | ESize.M | ESize.L | ESize.XL;

export interface IAdnButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | string;
    size?: TAdnButtonSize;
    isDisabled?: boolean;
    isLoading?: boolean;
}