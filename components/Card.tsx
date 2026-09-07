// components/Card.tsx

import React from 'react';
import { classNames } from '@/lib/utils/common';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  border?: boolean;
  children: React.ReactNode;
}

const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      padding = 'md',
      hoverable = false,
      border = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          'card',
          paddingStyles[padding],
          hoverable && 'transition-shadow hover:shadow-md cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

interface CardHeaderProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  description,
  action,
  children,
}) => {
  return (
    <div className="flex items-start justify-between pb-4 border-b border-slate-200">
      <div className="flex-1">
        {title && <h3 className="text-lg font-semibold text-slate-900">{title}</h3>}
        {description && <p className="text-sm text-slate-600 mt-1">{description}</p>}
        {children}
      </div>
      {action && <div className="ml-4">{action}</div>}
    </div>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="pt-4">{children}</div>;
};
