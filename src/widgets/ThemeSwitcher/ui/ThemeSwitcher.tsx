import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cl from 'classnames';
import styles from './ThemeSwitcher.module.scss';
import ThemeIcon from 'shared/assets/icons/Theme.svg';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo((props) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={cl(styles.themeSwitcher, className, {
                [styles.dark]: theme === Theme.DARK,
            })}
        >
            <ThemeIcon />
        </Button>
    );
});
