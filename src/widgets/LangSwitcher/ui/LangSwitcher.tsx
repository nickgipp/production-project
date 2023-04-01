import cl from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button onClick={toggle} className={cl(styles.langSwitcher, className)}>
            {t('Язык')}
        </Button>
    );
};
