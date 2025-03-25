import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx as cn } from 'clsx';

// --- Button Component ---
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'small' | 'large';
  className?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  className,
  children,
  ...props
}) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    // Variant styles
    variant === 'default' &&
      'bg-blue-500 text-white hover:bg-blue-600',
    variant === 'outline' &&
      'border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800',
    variant === 'secondary' &&
      'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700',
    variant === 'ghost' &&
      'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800',
    // Size styles
    size === 'small' && 'px-2 py-1 text-sm',
    size === 'large' && 'px-6 py-3 text-lg',
    size === 'default' && 'px-4 py-2',
    className
  );

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export { Button }; // Ensure you are exporting the Button component
