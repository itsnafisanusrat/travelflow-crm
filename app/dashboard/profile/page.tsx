'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function ProfilePage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6"><div className="flex items-center justify-between"><div><h1 className="text-3xl font-bold text-slate-900">My profile</h1><p className="text-slate-600 mt-1">Manage your account details and preferences.</p></div><Link href="/dashboard" className="text-brand-600 font-medium">Back to overview</Link></div><Card><CardHeader title="Personal details" /><CardContent><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><Input label="First name" defaultValue="Demo" /><Input label="Last name" defaultValue="User" /><Input label="Email" type="email" defaultValue="demo@travelflow.com" /><Input label="Phone" placeholder="Add phone number" /></div><div className="flex justify-end mt-6"><Button variant="primary">Save profile</Button></div></CardContent></Card></div>
  );
}
