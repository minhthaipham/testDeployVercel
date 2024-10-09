import { AlertSolid } from "@/assets/svgs";
import { AdnFormControlErrorMessageProps } from "./AdnFormControl.type";


const DefaultLeftIcon = () => {
    return (
        <div className="flex items-start">
            <AlertSolid className="w-[18px] h-[18px] text-bgDangerSolidDefault" />
        </div>
    );
};

const AdnFormControlErrorMessage = (
    props: AdnFormControlErrorMessageProps,
) => {
    const { children, leftIcon, rightIcon } = props;

    return children ? (
        <div className="flex items-center gap-1">
            {leftIcon ?? <DefaultLeftIcon/>}
            <span className="text-[14px] text-fgDanger flex-shrink font-semibold">{children}</span>
            {rightIcon && rightIcon}
        </div>
    ) : null;
};

export { AdnFormControlErrorMessage };
