// app/page.tsx - Home / Landing page (redirects to login for now)

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard if already logged in
    // For now, redirect to login
    router.push('/login');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-brand-50 to-slate-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">TravelFlow CRM</h1>
        <p className="text-xl text-slate-600 mb-8">Loading...</p>
      </div>
    </div>
  );
}
