export type AdnFromControlProps = {
    children?: any;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
  };
  
  export type AdnFormControlLabelProps = AdnFromControlProps & {};
  export type AdnFormControlErrorMessageProps = AdnFromControlProps & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };
  
  export type AdnFormControlComponent = ((
    props: AdnFromControlProps,
  ) => JSX.Element) & {
    Label: (props: AdnFormControlLabelProps) => JSX.Element;
    ErrorMessage: (
      props: AdnFormControlErrorMessageProps,
    ) => JSX.Element | null;
  };
  
  export type FormControlState = {
    /**
     * If true, this prop is passed to its children.
     */
    isInvalid?: boolean;
    /**
     * If true, this prop is passed to its children.
     */
    isRequired?: boolean;
    /**
     * If true, this prop is passed to its children.
     */
    isDisabled?: boolean;
    /**
     * If true, this prop is passed to its children.
     */
    isReadOnly?: boolean;
  };
  