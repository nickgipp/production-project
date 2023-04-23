import styles from './Navbar.module.scss';
import cl from 'classnames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={cl(styles.navbar, className)}>
            <div className={cl(styles.links)}>
            </div>
        </div>
    );
};
