import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

type InputProps = {
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
    return (
        <input
            className={[styles.input, className].join(' ')}
            {...props}
        />
    );
};

export default Input;
