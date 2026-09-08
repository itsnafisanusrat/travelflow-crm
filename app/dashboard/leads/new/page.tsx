'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input, Select, Textarea } from '@/components/Input';

export default function NewLeadPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between"><div><h1 className="text-3xl font-bold text-slate-900">Create lead</h1><p className="text-slate-600 mt-1">Capture a new travel enquiry and assign the next action.</p></div><Link href="/dashboard/leads" className="text-brand-600 font-medium">Back to leads</Link></div>
      <Card><CardHeader title="Traveler enquiry" /><CardContent><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><Input label="Traveler name" placeholder="Full name" required /><Input label="Email" type="email" placeholder="traveler@example.com" required /><Input label="Phone" placeholder="+1 555 000 0000" /><Input label="Destination" placeholder="Japan, Bali, Europe..." required /><Input label="Travel dates" placeholder="15 Oct - 22 Oct 2026" /><Input label="Travelers" type="number" min="1" defaultValue="2" /><Select label="Lead source" options={[{ value: 'WEBSITE', label: 'Website' }, { value: 'REFERRAL', label: 'Referral' }, { value: 'WHATSAPP', label: 'WhatsApp' }, { value: 'PHONE', label: 'Phone' }]} /><Select label="Priority" options={[{ value: 'high', label: 'High' }, { value: 'medium', label: 'Medium' }, { value: 'low', label: 'Low' }]} defaultValue="medium" /><Textarea label="Trip notes" placeholder="Preferences, budget, special requests..." /></div><div className="flex justify-end gap-2 mt-6"><Link href="/dashboard/leads" className="btn-secondary">Cancel</Link><Button variant="primary">Save lead</Button></div></CardContent></Card>
    </div>
  );
}
