// 1 hook chuyên xử lý text, giúp bạn xử lý text một cách dễ dàng và linh hoạt hơn

import { useCallback, useState } from "react";

const useTextHandler = () => {
    const capitalizeText = useCallback((text: string) => {
        const textResult = text.toLowerCase();
        return textResult
            .split(" ")
            .map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(" ");
    }, []);

    return {
        capitalizeText,
    };
};

export default useTextHandler;