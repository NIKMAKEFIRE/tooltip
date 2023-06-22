import React, { createContext, useState, useEffect } from 'react';

interface WindowWidthContextType {
    width: number;
}

const WindowWidthContext = createContext<WindowWidthContextType>({
    width: window.innerWidth,
});

interface WindowWidthProviderProps {
    children: React.ReactNode;
}

const WindowWidthProvider: React.FC<WindowWidthProviderProps> = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return <WindowWidthContext.Provider value={{ width }}>{children}</WindowWidthContext.Provider>;
};

export { WindowWidthContext, WindowWidthProvider };
