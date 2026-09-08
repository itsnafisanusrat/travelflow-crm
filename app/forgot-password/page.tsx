'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4"><Card className="w-full max-w-md"><CardHeader title="Reset your password" description="Enter your work email and we will send reset instructions." /><CardContent><div className="space-y-4"><Input label="Work email" type="email" placeholder="you@company.com" required /><Button fullWidth variant="primary">Send reset link</Button><p className="text-sm text-center"><Link href="/login" className="text-brand-600 font-medium">Back to sign in</Link></p></div></CardContent></Card></div>
  );
}
