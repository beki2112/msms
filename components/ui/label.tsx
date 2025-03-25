import React, { LabelHTMLAttributes, ReactNode } from 'react';
import { clsx as cn } from 'clsx';

// --- Label Component ---
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    className?: string;
    children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ className, children, ...props }) => {
    const baseClasses = cn(
        'block text-sm font-medium text-gray-700 dark:text-gray-300',
        className
    );
    return (
        <label className={baseClasses} {...props}>
            {children}
        </label>
    );
};

export { Label };
