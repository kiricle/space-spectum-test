import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
    className?: string;
    appearance: 'primary' | 'secondary' | 'danger'
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <button
            className={className}
            {...props}
        >
            Button
        </button>
    );
};

export default Button;
