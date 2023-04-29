import styles from './Navbar.module.scss';
import cl from 'classnames';
import { AppLink, AppLinkTheme, Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { modal } from 'shared/ui/Modal/ModalConnector';
import { openLoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={cl(styles.navbar, className)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cl(styles.links)}
                onClick={() => openLoginModal()}
            >
                {t('Login')}
            </Button>
        </div>
    );
};
