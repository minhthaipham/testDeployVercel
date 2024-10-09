'use client';
import { LtWelcome } from "@/assets/lotties";
import AdnButton from "@/common/OlComponent/AdnButton/AdnButton";
import Lottie from "lottie-react";
import Link from "next/link";

export default function Custom404() {
    return <div className="h-screen w-screen flex flex-1 flex-col items-center justify-center p-36">
        <h1 className="font-extrabold text-bgPrimarySolidFocus text-4xl">404 - Page Not Found</h1>
        <p className="font-semibold text-fgNeutralSubtle text-xl">Sorry, the page you are looking for does not exist.</p>
        <div className="flex flex-1 ">
            <Lottie
                animationData={LtWelcome}
                className="flex justify-center items-center h-full cursor-pointer hover:scale-110 duration-300"
                loop={true}
            />
        </div>
        <Link href="/dashboard">
            <AdnButton
                children="Go back to home"
                className="mt-4"
            />
        </Link>
    </div>
}