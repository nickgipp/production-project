import cl from 'classnames';
import { modal } from 'shared/ui/Modal/ModalConnector';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
    const { className } = props;

    return (
        <div className={cl(styles.loginModal, className)}>
            <LoginForm />
        </div>
    );
};

export const openLoginModal = () => modal.open(<LoginModal />);
