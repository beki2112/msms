import React, { InputHTMLAttributes } from 'react';
import { clsx as cn } from 'clsx';

// --- Input Component ---
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
    const baseClasses = cn(
        'w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
        className
    );
    return <input className={baseClasses} {...props} />;
};

export { Input };
