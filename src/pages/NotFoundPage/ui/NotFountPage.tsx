import cl from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './NotFountPage.module.scss';

interface NotFountPageProps {
    className?: string;
}

export const NotFountPage: React.FC<NotFountPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return <div className={cl(styles.notFountPage, className)}>{t('Page not found')}</div>;
};
