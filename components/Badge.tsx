// components/Badge.tsx

import React from 'react';
import { classNames } from '@/lib/utils/common';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'muted';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'badge-primary',
  success: 'badge-success',
  warning: 'badge-warning',
  danger: 'badge-danger',
  muted: 'badge-muted',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'muted',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={classNames(
        'badge',
        variantStyles[variant],
        size === 'sm' && 'px-2 py-0.5 text-xs',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

// Status Badge component
interface StatusBadgeProps {
  status: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const statusConfig: Record<string, { variant: BadgeVariant; label: string }> = {
    // Lead statuses
    NEW: { variant: 'muted', label: 'New' },
    CONTACTED: { variant: 'primary', label: 'Contacted' },
    QUALIFIED: { variant: 'primary', label: 'Qualified' },
    CONSULTATION_SCHEDULED: { variant: 'primary', label: 'Consultation Scheduled' },
    QUOTATION_SENT: { variant: 'primary', label: 'Quotation Sent' },
    NEGOTIATION: { variant: 'warning', label: 'Negotiation' },
    WON: { variant: 'success', label: 'Won' },
    LOST: { variant: 'danger', label: 'Lost' },
    NURTURE: { variant: 'muted', label: 'Nurture' },

    // Quotation statuses
    DRAFT: { variant: 'muted', label: 'Draft' },
    SENT: { variant: 'primary', label: 'Sent' },
    VIEWED: { variant: 'primary', label: 'Viewed' },
    ACCEPTED: { variant: 'success', label: 'Accepted' },
    REJECTED: { variant: 'danger', label: 'Rejected' },
    EXPIRED: { variant: 'danger', label: 'Expired' },
    REVISED: { variant: 'warning', label: 'Revised' },

    // Booking statuses
    PENDING: { variant: 'warning', label: 'Pending' },
    ON_HOLD: { variant: 'warning', label: 'On Hold' },
    PARTIALLY_CONFIRMED: { variant: 'primary', label: 'Partially Confirmed' },
    CONFIRMED: { variant: 'success', label: 'Confirmed' },
    CANCELLED: { variant: 'danger', label: 'Cancelled' },
    COMPLETED: { variant: 'success', label: 'Completed' },
    REFUNDED: { variant: 'muted', label: 'Refunded' },

    // Payment statuses
    PAID: { variant: 'success', label: 'Paid' },
    PARTIALLY_PAID: { variant: 'warning', label: 'Partially Paid' },
    OVERDUE: { variant: 'danger', label: 'Overdue' },

    // Task statuses
    TODO: { variant: 'muted', label: 'To Do' },
    IN_PROGRESS: { variant: 'primary', label: 'In Progress' },
    COMPLETED: { variant: 'success', label: 'Completed' },
    CANCELLED: { variant: 'muted', label: 'Cancelled' },
  };

  const config = statusConfig[status] || { variant: 'muted' as const, label: status };

  return (
    <Badge variant={config.variant} className={className}>
      {config.label}
    </Badge>
  );
};
