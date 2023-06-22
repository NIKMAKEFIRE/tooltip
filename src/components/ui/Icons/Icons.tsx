import React, { FC } from 'react';
interface IIconsProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export const CloseIcon: FC<IIconsProps> = ({ onClick, className, style }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            style={style}
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.67767 1.00025L14.6777 14M1.67767 13.9997L14.6777 1"
                stroke="#404040"
                strokeWidth="1.5"
                strokeMiterlimit="10"
            />
        </svg>
    );
};
