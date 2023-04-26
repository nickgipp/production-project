import styles from './Navbar.module.scss';
import cl from 'classnames';
import { AppLink, AppLinkTheme, Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { modal } from 'shared/ui/Modal/ModalConnector';

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
                onClick={() =>
                    modal.open(
                        // eslint-disable-next-line max-len
                        'Feature-Sliced Design (FSD) — это архитектурная методология для проектирования frontend-приложений. Проще говоря, это свод правил и соглашений по организации кода. Главная цель методологии — сделать проект понятным и структурированным, особенно в условиях регулярного изменения требований бизнеса.'
                    )
                }
            >
                {t('Login')}
            </Button>
        </div>
    );
};
