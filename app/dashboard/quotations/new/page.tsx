'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input, Select, Textarea } from '@/components/Input';
import { formatCurrency } from '@/lib/utils/format';

interface QuoteItem { id: number; description: string; category: string; quantity: number; unitPrice: number; }

export default function NewQuotationPage() {
  const [customer, setCustomer] = useState('John Smith');
  const [destination, setDestination] = useState('Tokyo, Japan');
  const [taxRate, setTaxRate] = useState('8');
  const [items, setItems] = useState<QuoteItem[]>([
    { id: 1, description: 'Shinjuku Prince Hotel - 7 nights', category: 'Accommodation', quantity: 1, unitPrice: 2800 },
    { id: 2, description: 'Round-trip international flights', category: 'Flights', quantity: 1, unitPrice: 1600 },
    { id: 3, description: 'Private airport transfers and tours', category: 'Activities', quantity: 1, unitPrice: 1200 },
  ]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0), [items]);
  const tax = subtotal * (Number(taxRate) / 100);
  const total = subtotal + tax;

  const updateItem = (id: number, field: keyof QuoteItem, value: string) => {
    setItems((current) => current.map((item) => item.id === id ? { ...item, [field]: field === 'quantity' || field === 'unitPrice' ? Number(value) : value } : item));
  };

  const addItem = () => setItems((current) => [...current, { id: Date.now(), description: '', category: 'Other', quantity: 1, unitPrice: 0 }]);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between"><div><h1 className="text-3xl font-bold text-slate-900">Create quotation</h1><p className="text-slate-600 mt-1">Build a polished proposal with transparent pricing and margins.</p></div><Link href="/dashboard/quotations" className="text-brand-600 font-medium">Back to quotations</Link></div>
      <Card><CardHeader title="Trip details" description="These details appear on the client-facing proposal." /><CardContent><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><Input label="Customer" value={customer} onChange={(event) => setCustomer(event.target.value)} /><Input label="Destination" value={destination} onChange={(event) => setDestination(event.target.value)} /><Input label="Departure date" type="date" defaultValue="2026-10-15" /><Input label="Return date" type="date" defaultValue="2026-10-22" /><Select label="Package tier" options={[{ value: 'standard', label: 'Standard' }, { value: 'premium', label: 'Premium' }, { value: 'luxury', label: 'Luxury' }]} defaultValue="premium" /><Textarea label="Client notes" placeholder="Special requests, inclusions, and exclusions..." /></div></CardContent></Card>
      <Card><CardHeader title="Quotation items" action={<Button variant="secondary" size="sm" onClick={addItem}>+ Add item</Button>} /><CardContent><div className="space-y-3">{items.map((item) => <div key={item.id} className="grid grid-cols-1 md:grid-cols-[1fr_160px_100px_140px] gap-3 items-end"><Input label="Description" value={item.description} onChange={(event) => updateItem(item.id, 'description', event.target.value)} /><Select label="Category" options={[{ value: 'Accommodation', label: 'Accommodation' }, { value: 'Flights', label: 'Flights' }, { value: 'Activities', label: 'Activities' }, { value: 'Other', label: 'Other' }]} value={item.category} onChange={(event) => updateItem(item.id, 'category', event.target.value)} /><Input label="Qty" type="number" min="1" value={item.quantity} onChange={(event) => updateItem(item.id, 'quantity', event.target.value)} /><Input label="Unit price" type="number" min="0" value={item.unitPrice} onChange={(event) => updateItem(item.id, 'unitPrice', event.target.value)} /></div>)}</div></CardContent></Card>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"><Card className="lg:col-span-2"><CardHeader title="Pricing and payment terms" /><CardContent><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><Input label="Tax rate (%)" type="number" value={taxRate} onChange={(event) => setTaxRate(event.target.value)} /><Input label="Deposit required" type="number" defaultValue={Math.round(total * 0.5)} /><Textarea label="Terms and cancellation policy" defaultValue="50% deposit confirms the booking. Balance is due 30 days before departure." /></div></CardContent></Card><Card><CardHeader title="Proposal total" /><CardContent><div className="space-y-3 text-sm"><div className="flex justify-between"><span>Subtotal</span><strong>{formatCurrency(subtotal)}</strong></div><div className="flex justify-between"><span>Tax ({taxRate}%)</span><strong>{formatCurrency(tax)}</strong></div><div className="border-t border-slate-200 pt-3 flex justify-between text-lg"><span>Total</span><strong className="text-brand-700">{formatCurrency(total)}</strong></div><Button fullWidth variant="primary">Save draft & preview</Button><Button fullWidth variant="secondary">Send proposal</Button></div></CardContent></Card></div>
    </div>
  );
}
