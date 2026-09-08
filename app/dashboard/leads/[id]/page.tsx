'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/Card';
import { Button } from '@/components/Button';
import { Badge, StatusBadge } from '@/components/Badge';

export default function LeadDetailsPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6"><div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><p className="text-sm text-slate-500">LD-2024-001</p><h1 className="text-3xl font-bold text-slate-900">Tokyo Explorer</h1><p className="text-slate-600 mt-1">John Smith · Tokyo, Japan · Jul 15 - Jul 22</p></div><div className="flex gap-2"><Button variant="secondary">Add task</Button><Link href="/dashboard/quotations/new" className="btn-primary">Create quotation</Link></div></div><div className="grid grid-cols-1 lg:grid-cols-3 gap-6"><Card className="lg:col-span-2"><CardHeader title="Enquiry overview" /><CardContent><div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"><div><p className="text-slate-500">Status</p><div className="mt-2"><StatusBadge status="QUOTATION_SENT" /></div></div><div><p className="text-slate-500">Priority</p><div className="mt-2"><Badge variant="danger">High</Badge></div></div><div><p className="text-slate-500">Budget</p><p className="font-semibold mt-2">$8,500</p></div><div><p className="text-slate-500">Consultant</p><p className="font-semibold mt-2">Sarah Johnson</p></div></div></CardContent></Card><Card><CardHeader title="Next action" /><CardContent><p className="font-medium text-slate-900">Follow up with quotation</p><p className="text-sm text-slate-600 mt-2">Due today · Email and WhatsApp enabled</p><Link href="/dashboard/quotations/new" className="btn-secondary mt-4">Open quotation builder</Link></CardContent></Card></div><Card><CardHeader title="Activity timeline" /><CardContent><div className="space-y-4 text-sm"><p><strong>Quotation sent</strong><span className="text-slate-500"> · Today at 09:20</span></p><p><strong>Lead qualified</strong><span className="text-slate-500"> · Yesterday</span></p><p><strong>Enquiry received from website</strong><span className="text-slate-500"> · Jun 10, 2024</span></p></div></CardContent></Card></div>
  );
}
