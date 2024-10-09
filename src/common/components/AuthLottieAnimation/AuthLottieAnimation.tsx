import { LtWelcome } from "@/assets/lotties";
import Lottie from "lottie-react";
import { IAuthLottieAnimationProps } from "./AuthLottieAnimation.type";

const AuthLottieAnimation: React.FC<IAuthLottieAnimationProps> = (props) => {
    return (
        <div className='flex-1 flex flex-col gap-2 items-center justify-center'>
            <span className='text-5xl font-bold text-fgNeutralHighEmphasis'>
                {props.title}
            </span>
            <span className='text-fgNeutralNormal'>
                {props.description}
            </span>
            <div className='flex flex-1 w-full'>
                <div className="animate-zoomInLeft ">
                    <Lottie
                        animationData={LtWelcome}
                        className="flex justify-center items-center h-full cursor-pointer hover:scale-110 duration-300"
                        loop={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthLottieAnimation;