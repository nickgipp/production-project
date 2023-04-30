import styles from './Navbar.module.scss';
import cl from 'classnames';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { openLoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useCallback } from 'react';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={cl(styles.navbar, className)}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cl(styles.links)}
                    onClick={onLogout}
                >
                    {t('Logout')}
                </Button>
            </div>
        );
    }
    return (
        <div className={cl(styles.navbar, className)}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cl(styles.links)} onClick={() => openLoginModal()}>
                {t('Login')}
            </Button>
        </div>
    );
};
