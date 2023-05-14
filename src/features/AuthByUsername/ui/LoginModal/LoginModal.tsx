import cl from 'classnames';
import { Suspense } from 'react';
import { Loader } from 'shared/ui';
import { modal } from 'shared/ui/Modal/ModalConnector';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
    const { className } = props;

    return (
        <div className={cl(styles.loginModal, className)}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={() => modal.close()} />
            </Suspense>
        </div>
    );
};

export const openLoginModal = () => modal.open(<LoginModal />);
