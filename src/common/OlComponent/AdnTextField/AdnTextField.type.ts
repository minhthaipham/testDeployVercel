import { FormControlState } from "../AdnFormControl/AdnFormControl.type";
import { ESize } from "../Helpers/Adnsize.enum";

export type AdnTextFieldType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color' | 'file' | 'hidden' | 'image' | 'reset' | 'submit' | 'button' | 'checkbox' | 'radio' | 'range' | 'select' | 'textarea';

export type AdnTextFieldSize = ESize.S | ESize.M | ESize.L | ESize.XL | ESize.XS;

export type AdnTextFieldState = FormControlState & {
  isFocused?: boolean;
};

export interface IAdnTextFieldProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    AdnTextFieldState {
  type?: AdnTextFieldType;
  textFieldSize?: AdnTextFieldSize;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clearable?: boolean;
  isDisabled?: boolean;
  showCountCharacter?: boolean;
  isShowFocusBorder?: boolean;
  isBlurOnSubmit?: boolean;
}
