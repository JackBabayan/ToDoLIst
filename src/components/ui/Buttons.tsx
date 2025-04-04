import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  children: ReactNode;
}

export default function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  const baseStyles = 'btn';
  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    icon: 'btn-icon',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className || ''}`} {...props}>
      {children}
    </button>
  );
}