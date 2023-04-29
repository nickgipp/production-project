import cl from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={cl(styles.loginForm, className)}>
            <Input placeholder={t('Username')} type="text" className={styles.input} />
            <Input placeholder={t('Password')} type="text" className={styles.input} />
            <Button theme={ButtonTheme.OUTLINE} className={styles.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
};
