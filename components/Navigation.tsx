// components/Navigation.tsx - Main Navigation Components

import React from 'react';
import Link from 'next/link';
import { classNames } from '@/lib/utils/common';

interface NavItem {
  label: string;
  href: string;
  icon: string; // emoji or icon
  badge?: number;
  active?: boolean;
}

interface SidebarProps {
  items: NavItem[];
  logo?: string;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  logo = '✈',
  className = '',
}) => {
  return (
    <div className={classNames('w-64 bg-white border-r border-slate-200 h-screen flex flex-col', className)}>
      {/* Logo */}
      <div className="px-6 py-4 border-b border-slate-200">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-xl">
            {logo}
          </div>
          <div>
            <h1 className="font-bold text-slate-900">TravelFlow</h1>
            <p className="text-xs text-slate-500">CRM</p>
          </div>
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={classNames(
              'flex items-center justify-between px-3 py-2 rounded-lg transition-colors',
              item.active
                ? 'bg-brand-50 text-brand-600 font-medium'
                : 'text-slate-700 hover:bg-slate-50'
            )}
          >
            <span className="flex items-center gap-3 flex-1">
              <span className="text-lg">{item.icon}</span>
              <span className="truncate">{item.label}</span>
            </span>
            {item.badge !== undefined && item.badge > 0 && (
              <span className="ml-2 px-2 py-1 text-xs font-semibold bg-red-100 text-red-600 rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-slate-200">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50"
        >
          <span className="text-lg">⚙️</span>
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

interface TopNavProps {
  userName?: string;
  userRole?: string;
  onLogout?: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  userName = 'User',
  userRole = 'Role',
  onLogout,
}) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search leads, quotations, bookings..."
            className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 ml-6">
          {/* Notifications */}
          <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <span className="text-lg">🔔</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Help */}
          <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <span className="text-lg">❓</span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center font-semibold text-brand-600">
                {userName.charAt(0)}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-medium text-slate-900">{userName}</p>
                <p className="text-xs text-slate-500">{userRole}</p>
              </div>
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg border border-slate-200 shadow-lg py-1">
                <Link href="/dashboard/profile" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Profile
                </Link>
                <Link href="/dashboard/settings" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Settings
                </Link>
                <hr className="my-1" />
                <button
                  onClick={onLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
