import { RoutePath } from 'app/config/routeConfig/routeConfig';
import cl from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { SidebarItemType } from 'widgets/Sidebar/modal/items';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo((props) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cl(styles.link, { [styles.collapsed]: collapsed })}
        >
            <div className={styles.item}>
                <item.Icon className={styles.icon} />
                <span className={styles.linkText}>{t(item.text)}</span>
            </div>
        </AppLink>
    );
});
