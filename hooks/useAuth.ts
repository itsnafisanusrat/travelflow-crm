// hooks/useAuth.ts - Authentication Hook

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { SessionUser } from '@/types';

export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== 'undefined') {
        const userStr = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if (!userStr || !token) {
          router.push('/login');
          return;
        }

        try {
          const userData = JSON.parse(userStr);
          setUser(userData);
        } catch (error) {
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          router.push('/login');
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    router.push('/login');
  };

  return { user, loading, logout, isAuthenticated: !!user };
};
