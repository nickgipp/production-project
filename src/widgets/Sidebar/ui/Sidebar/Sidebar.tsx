import cl from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}
	return (
		<div className={cl(styles.sidebar, { [styles.collapsed]: collapsed }, className)}>
			<button onClick={onToggle}>{t('menu')}</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={styles.lang} />
			</div>
		</div>
	);
}