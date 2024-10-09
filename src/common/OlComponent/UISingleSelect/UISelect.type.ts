import { ESize } from "../Helpers/UISize.enum";

export type EUISelectSize = ESize.S | ESize.M | ESize.L | ESize.XL | ESize.XXL;
export enum ESelectMode {
    SINGLE = 'single',
    MULTIPLE = 'multiple',
}
export type TUISelectMode = ESelectMode.SINGLE | ESelectMode.MULTIPLE;
export interface IUISelectProps {
    size?: EUISelectSize;
    title?: string | React.ReactNode;
    isInvalid?: boolean;
    placeholder?: string;
    options: any[];
    bindLabel: string;
    bindValue: string;
    value?: any;
    onChange?: (value: any) => void;
    mode?: TUISelectMode;
}