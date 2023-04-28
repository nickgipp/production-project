import { useTheme } from 'app/providers/ThemeProvider';
import cl from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    isOpen?: boolean;
    setIsOpen?: (active: boolean) => void;
    children?: React.ReactNode;
    className?: string;
}

const ANIMATION_DELAY = 50;

export const Modal: React.FC<ModalProps> = (props) => {
    // TODO: Проверить сторибук

    const { isOpen, setIsOpen, children, className } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (setIsOpen) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                setIsOpen(false);
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [setIsOpen]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler]
    );

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    const modalElem = document.getElementById('modal');

    return (
        <Portal element={modalElem || undefined}>
            <div className={cl(styles.modal, mods, className)}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
