import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { memo, MouseEventHandler, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cl from 'classnames';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo((props) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();
    const loginState = useSelector(getLoginState);
    const dispatch = useAppDispatch();

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
    const onLoginClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
    };

    // const onLoginClick = useCallback(async () => {
    //     if (loginState?.username && loginState?.password) {
    //         const result = await dispatch(
    //             loginByUsername({ username: loginState?.username, password: loginState.password })
    //         );
    //         if (result.meta.requestStatus === 'fulfilled') {
    //             onSuccess();
    //         }
    //     }
    // }, [dispatch, loginState?.password, loginState?.username, onSuccess]);

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
