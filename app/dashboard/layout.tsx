// app/dashboard/layout.tsx - Dashboard Layout

'use client';

import { useRouter } from 'next/navigation';
import { Sidebar, TopNav } from '@/components/Navigation';
import React, { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Overview', href: '/dashboard', icon: '📊', active: false },
  { label: 'Leads', href: '/dashboard/leads', icon: '🎯', badge: 3 },
  { label: 'Customers', href: '/dashboard/customers', icon: '👥' },
  { label: 'Pipeline', href: '/dashboard/pipeline', icon: '📈' },
  { label: 'Quotations', href: '/dashboard/quotations', icon: '📋' },
  { label: 'Itineraries', href: '/dashboard/itineraries', icon: '✈️' },
  { label: 'Bookings', href: '/dashboard/bookings', icon: '📅' },
  { label: 'Suppliers', href: '/dashboard/suppliers', icon: '🏢' },
  { label: 'Finance', href: '/dashboard/finance', icon: '💰' },
  { label: 'Attendance', href: '/dashboard/attendance', icon: '🕘' },
  { label: 'Calendar', href: '/dashboard/calendar', icon: '📆' },
  { label: 'Reports', href: '/dashboard/reports', icon: '📊' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        router.push('/login');
        return;
      }
      setUser(JSON.parse(storedUser));
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-center">
          <div className="inline-block animate-spin">
            <div className="w-8 h-8 border-4 border-slate-200 border-t-brand-500 rounded-full"></div>
          </div>
          <p className="text-slate-600 mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar items={NAV_ITEMS.map(item => ({
        ...item,
        active: typeof window !== 'undefined' ? 
          window.location.pathname === item.href : false
      }))} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <TopNav
          userName={`${user?.firstName} ${user?.lastName}`}
          userRole={user?.role || 'User'}
          onLogout={handleLogout}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
