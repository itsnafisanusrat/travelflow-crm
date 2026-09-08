// app/dashboard/pipeline/page.tsx

'use client';

import { useState } from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { formatCurrency } from '@/lib/utils/format';
import Link from 'next/link';

const stages = [
  { id: 'NEW', label: 'New enquiry', color: 'border-slate-300' },
  { id: 'QUALIFIED', label: 'Qualified', color: 'border-blue-300' },
  { id: 'QUOTATION_SENT', label: 'Quotation sent', color: 'border-orange-300' },
  { id: 'NEGOTIATION', label: 'Negotiation', color: 'border-purple-300' },
  { id: 'WON', label: 'Won', color: 'border-green-300' },
];

const initialOpportunities = [
  { id: 1, name: 'Tokyo Explorer', customer: 'John Smith', destination: 'Japan', value: 8500, stage: 'QUOTATION_SENT', nextAction: 'Follow up today' },
  { id: 2, name: 'Bali Honeymoon', customer: 'Emily & David', destination: 'Indonesia', value: 12000, stage: 'NEGOTIATION', nextAction: 'Send revised option' },
  { id: 3, name: 'European Grand Tour', customer: 'Robert Wilson', destination: 'Europe', value: 15000, stage: 'QUALIFIED', nextAction: 'Schedule consultation' },
  { id: 4, name: 'Caribbean Cruise', customer: 'Margaret Davis', destination: 'Caribbean', value: 9500, stage: 'NEW', nextAction: 'Make first contact' },
  { id: 5, name: 'Swiss Adventure', customer: 'Peter Miller', destination: 'Switzerland', value: 9000, stage: 'WON', nextAction: 'Prepare operations handoff' },
];

export default function PipelinePage() {
  const [opportunities, setOpportunities] = useState(initialOpportunities);
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const moveOpportunity = (stage: string) => {
    if (draggedId === null) return;
    setOpportunities((current) => current.map((opportunity) => opportunity.id === draggedId ? { ...opportunity, stage } : opportunity));
    setDraggedId(null);
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div><h1 className="text-3xl font-bold text-slate-900">Sales Pipeline</h1><p className="text-slate-600 mt-1">Move every enquiry from first contact to confirmed journey.</p></div>
        <Link href="/dashboard/leads/new" className="btn-primary">+ New opportunity</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card><p className="text-sm text-slate-600">Pipeline value</p><p className="text-2xl font-bold mt-2">{formatCurrency(opportunities.reduce((sum, item) => sum + item.value, 0))}</p></Card>
        <Card><p className="text-sm text-slate-600">Open opportunities</p><p className="text-2xl font-bold mt-2">{opportunities.filter((item) => item.stage !== 'WON').length}</p></Card>
        <Card><p className="text-sm text-slate-600">Won value</p><p className="text-2xl font-bold text-green-600 mt-2">{formatCurrency(opportunities.filter((item) => item.stage === 'WON').reduce((sum, item) => sum + item.value, 0))}</p></Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 items-start">
        {stages.map((stage) => {
          const items = opportunities.filter((opportunity) => opportunity.stage === stage.id);
          return <div key={stage.id} onDragOver={(event) => event.preventDefault()} onDrop={() => moveOpportunity(stage.id)} className={`min-h-80 rounded-xl border-2 ${stage.color} bg-white p-3`}>
            <div className="flex items-center justify-between mb-3"><h2 className="font-semibold text-slate-900">{stage.label}</h2><Badge variant="muted" size="sm">{items.length}</Badge></div>
            <div className="space-y-3">{items.map((opportunity) => <div key={opportunity.id} draggable onDragStart={() => setDraggedId(opportunity.id)} className="rounded-lg border border-slate-200 bg-slate-50 p-3 cursor-grab active:cursor-grabbing hover:shadow-sm"><p className="font-semibold text-slate-900">{opportunity.name}</p><p className="text-sm text-slate-600 mt-1">{opportunity.customer}</p><p className="text-xs text-slate-500 mt-2">{opportunity.destination} · {opportunity.nextAction}</p><p className="font-bold text-brand-700 mt-3">{formatCurrency(opportunity.value)}</p></div>)}{items.length === 0 && <p className="text-xs text-slate-400 text-center py-8">Drop opportunity here</p>}</div>
          </div>;
        })}
      </div>
    </div>
  );
}
