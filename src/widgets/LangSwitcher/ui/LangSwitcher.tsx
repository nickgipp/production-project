import cl from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

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
        <Button onClick={toggle} className={cl(className)}>
            {t('Язык')}
        </Button>
    );
};