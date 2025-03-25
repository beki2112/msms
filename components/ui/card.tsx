import React, { ReactNode } from 'react';
import { clsx as cn } from 'clsx';

// --- Card Component ---
interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  const baseClasses = cn(
    'bg-white dark:bg-gray-800 rounded-lg shadow-md',
    className
  );
  return <div className={baseClasses} {...props}>{children}</div>;
};

interface CardHeaderProps {
  className?: string;
  children: ReactNode;
}
const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => {
  const baseClasses = cn('p-4', className);
  return <div className={baseClasses}>{children}</div>
};

interface CardTitleProps {
    className?: string;
    children: ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => {
    const baseClasses = cn('text-xl font-semibold text-gray-900 dark:text-white', className);
    return <h3 className={baseClasses}>{children}</h3>
};

interface CardDescriptionProps {
    className?: string;
    children: ReactNode;
}
const CardDescription: React.FC<CardDescriptionProps> = ({ className, children }) => {
    const baseClasses = cn('text-gray-500 dark:text-gray-400', className);
    return <p className={baseClasses}>{children}</p>
};

interface CardContentProps{
    className?: string;
    children: ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({className, children}) => {
    const baseClasses = cn('p-4', className);
    return <div className={baseClasses}>{children}</div>
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
