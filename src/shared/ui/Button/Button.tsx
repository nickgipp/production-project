import cl from 'classnames';
import React, { ButtonHTMLAttributes, memo } from 'react';
import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
    };

    return (
        <button className={cl(styles.button, className, mods)} {...otherProps}>
            {children}
        </button>
    );
});
