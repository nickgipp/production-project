import cl from 'classnames';
import { InputHTMLAttributes, memo } from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = memo((props) => {
    const { className, value, onChange, type = 'text', ...otherProps } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cl(styles.input, className)}
                {...otherProps}
            />
        </div>
    );
});
