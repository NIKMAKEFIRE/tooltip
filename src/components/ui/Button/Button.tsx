import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export enum ButtonTheme {
    DARK = 'dark',
    LIGHT = 'light',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    theme: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, className, theme, onClick, style } = props;
    return (
        <button
            onClick={onClick}
            className={classNames(className, styles.btn, {
                [styles.dark]: theme === 'dark',
                [styles.light]: theme === 'light',
            })}
            style={style}
        >
            {children}
        </button>
    );
};
