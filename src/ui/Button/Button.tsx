import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type Appearance = 'primary' | 'secondary' | 'danger';

type ButtonProps = {
    className?: string;
    appearance: Appearance;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ appearance, className, children, ...props }: ButtonProps) => {
    const styling: Record<Appearance, string> = {
        primary: styles.primary,
        danger: styles.danger,
        secondary: styles.secondary,
    };

    return (
        <button
            className={[className, styles.button, styling[appearance]].join(' ')}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
