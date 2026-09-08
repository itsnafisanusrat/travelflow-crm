'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/Card';
import { Button } from '@/components/Button';
import { StatusBadge } from '@/components/Badge';
import { formatCurrency } from '@/lib/utils/format';

export default function QuotationDetailsPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6"><div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><p className="text-sm text-slate-500">QT-2024-001</p><h1 className="text-3xl font-bold text-slate-900">Tokyo Explorer Package</h1><p className="text-slate-600 mt-1">Prepared for John Smith · Tokyo, Japan</p></div><div className="flex gap-2"><Link href="/dashboard/quotations/new" className="btn-secondary">Revise</Link><Button variant="primary">Send proposal</Button></div></div><Card><CardHeader title="Proposal status" action={<StatusBadge status="SENT" />} /><CardContent><div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"><div><p className="text-slate-500">Travel dates</p><p className="font-semibold mt-1">Jul 15 - Jul 22</p></div><div><p className="text-slate-500">Travelers</p><p className="font-semibold mt-1">1 traveler</p></div><div><p className="text-slate-500">Viewed</p><p className="font-semibold mt-1">Jun 12, 2024</p></div><div><p className="text-slate-500">Expires</p><p className="font-semibold mt-1">Jun 24, 2024</p></div></div></CardContent></Card><Card><CardHeader title="Included services" /><CardContent><div className="space-y-3"><div className="flex justify-between border-b border-slate-100 pb-3"><span>Accommodation · Shinjuku Prince Hotel</span><strong>{formatCurrency(2800)}</strong></div><div className="flex justify-between border-b border-slate-100 pb-3"><span>Round-trip international flights</span><strong>{formatCurrency(1600)}</strong></div><div className="flex justify-between border-b border-slate-100 pb-3"><span>Private transfers and tours</span><strong>{formatCurrency(1200)}</strong></div><div className="flex justify-between text-lg pt-2"><strong>Total</strong><strong className="text-brand-700">{formatCurrency(6048)}</strong></div></div></CardContent></Card></div>
  );
}
