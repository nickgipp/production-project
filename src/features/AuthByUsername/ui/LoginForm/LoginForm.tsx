import cl from 'classnames';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
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
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation();
    const loginState = useSelector(getLoginState);
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
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        return dispatch(loginByUsername({ username: loginState?.username, password: loginState?.password }));
    }, [dispatch, loginState?.password, loginState?.username]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={cl(styles.loginForm, className)}>
                <Text title={t('Form authorizations')} />
                <div>
                    {loginState?.error && <Text text={t('Invalid username or password')} theme={TextTheme.ERROR} />}
                </div>
                <Input
                    value={loginState?.username}
                    onChange={onChangeUsername}
                    placeholder={t('Username')}
                    className={styles.input}
                />
                <Input
                    value={loginState?.password}
                    onChange={onChangePassword}
                    placeholder={t('Password')}
                    className={styles.input}
                />
                <Button
                    disabled={loginState?.isLoading}
                    onClick={onLoginClick}
                    theme={ButtonTheme.OUTLINE}
                    className={styles.loginBtn}
                >
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
