import cl from 'classnames';
import { loginActions } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    // TODO: Убрать any
    const dispatch = useDispatch<any>();

    const onChangeUsername = useCallback(
        (value) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value) => {
            dispatch(loginActions.setPasswors(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        return dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={cl(styles.loginForm, className)}>
            <Text title={t('Form authorizations')}/>
            <div>{error && <Text text={t('Invalid username or password')} theme={TextTheme.ERROR} />}</div>
            <Input
                value={username}
                onChange={onChangeUsername}
                placeholder={t('Username')}
                className={styles.input}
            />
            <Input
                value={password}
                onChange={onChangePassword}
                placeholder={t('Password')}
                className={styles.input}
            />
            <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={styles.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
});
