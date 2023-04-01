import { Theme } from 'app/providers/ThemeProvider';
import cl from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { className, children, theme = ThemeButton.CLEAR, ...otherProps } = props;

    return (
        <button className={cl(styles.button, className, styles[theme])} {...otherProps}>
            {children}
        </button>
    );
};
