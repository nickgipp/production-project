import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cl from 'classnames';
import styles from './ThemeSwitcher.module.scss';
import ThemeIcon from 'shared/assets/icons/Theme.svg'
import { Button } from 'shared/ui';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
	const { className } = props;
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			onClick={toggleTheme}
			className={cl(styles.themeSwitcher, className, { [styles.dark]: theme === Theme.DARK })}
		>
			<ThemeIcon />
		</Button>
	);
}