/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState, ReactNode } from 'react';

type TooltipContextType = {
    isActiveTooltip: boolean;
    setIsActiveTooltip: (isActive: boolean) => void;
};

const defaultTooltipContext: TooltipContextType = {
    isActiveTooltip: true,
    setIsActiveTooltip: () => {},
};

const TooltipContext = createContext<TooltipContextType>(defaultTooltipContext);

type TooltipProviderProps = {
    children: ReactNode;
};

const TooltipProvider = ({ children }: TooltipProviderProps) => {
    const [isActiveTooltip, setIsActiveTooltip] = useState<boolean>(
        JSON.parse(window.localStorage.getItem('showTooltip') || 'true'),
    );

    useEffect(() => {
        const data = window.localStorage.getItem('showTooltip');
        if (data !== null) setIsActiveTooltip(JSON.parse(data));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('showTooltip', JSON.stringify(isActiveTooltip));
    }, [isActiveTooltip]);

    return (
        <TooltipContext.Provider
            value={{
                isActiveTooltip,
                setIsActiveTooltip,
            }}
        >
            {children}
        </TooltipContext.Provider>
    );
};

export { TooltipContext, TooltipProvider };
