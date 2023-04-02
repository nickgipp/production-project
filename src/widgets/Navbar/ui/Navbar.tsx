/* eslint-disable i18next/no-literal-string */
import styles from './Navbar.module.scss';
import cl from 'classnames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { BugButton } from 'app/providers/ErrorBoundary';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={cl(styles.navbar, className)}>
            <BugButton />
            <div className={cl(styles.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
