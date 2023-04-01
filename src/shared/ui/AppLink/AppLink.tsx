import cl from 'classnames';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: React.ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const { className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <Link {...otherProps} className={cl(styles.appLink, className, styles[theme])}>
            {children}
        </Link>
    );
};
