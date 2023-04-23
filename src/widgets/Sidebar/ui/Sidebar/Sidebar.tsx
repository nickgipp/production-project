import { RoutePath } from 'app/config/routeConfig/routeConfig';
import cl from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme, Button } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import MainPageIcon from 'shared/assets/icons/MainPageIcon.svg';
import AboutPageIcon from 'shared/assets/icons/AboutPageIcon.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div data-testid="sidebar" className={cl(styles.sidebar, { [styles.collapsed]: collapsed }, className)}>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={styles.link}>
                    <div className={styles.item}>
                        <MainPageIcon className={styles.icon} />
                        <span className={styles.linkText}>{t('Main page')}</span>
                    </div>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={styles.link}>
                    <div className={styles.item}>
                        <AboutPageIcon className={styles.icon} />
                        <span className={styles.linkText}>{t('About us')}</span>
                    </div>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang} />
            </div>
        </div>
    );
};
