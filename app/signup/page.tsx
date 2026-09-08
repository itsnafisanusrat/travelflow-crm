'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4"><Card className="w-full max-w-md"><CardHeader title="Create your TravelFlow workspace" description="Start organizing enquiries, quotations, bookings, and payments." /><CardContent><div className="space-y-4"><Input label="Organization name" placeholder="Your travel company" required /><Input label="Your name" placeholder="Full name" required /><Input label="Work email" type="email" placeholder="you@company.com" required /><Input label="Password" type="password" placeholder="At least 8 characters" required /><Button fullWidth variant="primary">Create workspace</Button><p className="text-sm text-center text-slate-600">Already have an account? <Link href="/login" className="text-brand-600 font-medium">Sign in</Link></p></div></CardContent></Card></div>
  );
}
