import React from 'react';
import { classNames } from '@/lib/utils/common';

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ compact = false, className }) => (
  <img
    src="/travelflow-logo.svg"
    alt="TravelFlow CRM for travel agencies"
    className={classNames(compact ? 'h-10 w-auto' : 'h-24 w-auto', className)}
  />
);
