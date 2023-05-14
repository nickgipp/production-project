import cl from 'classnames';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text: React.FC<TextProps> = memo((props) => {
    const { className, title, text, theme = TextTheme.PRIMARY } = props;

    return (
        <div className={cl(className, styles[theme])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
