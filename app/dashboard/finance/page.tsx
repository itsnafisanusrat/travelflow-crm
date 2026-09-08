// app/dashboard/finance/page.tsx

'use client';

import { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input, Select } from '@/components/Input';
import { StatusBadge } from '@/components/Badge';
import { formatCurrency, formatDate } from '@/lib/utils/format';
import Link from 'next/link';

const initialInvoices = [
  { number: 'INV-2026-0041', customer: 'John Smith', trip: 'Tokyo Explorer', total: 8100, paid: 4000, due: '2026-09-18', status: 'PARTIALLY_PAID' },
  { number: 'INV-2026-0040', customer: 'Emily & David', trip: 'Bali Honeymoon', total: 12000, paid: 12000, due: '2026-09-05', status: 'PAID' },
  { number: 'INV-2026-0039', customer: 'Robert Wilson', trip: 'European Grand Tour', total: 15000, paid: 0, due: '2026-09-12', status: 'OVERDUE' },
];

const initialReceipts = [
  { number: 'MR-2026-0018', customer: 'Emily & David', amount: 12000, method: 'Bank transfer', date: '2026-09-02', invoice: 'INV-2026-0040' },
  { number: 'MR-2026-0017', customer: 'John Smith', amount: 4000, method: 'Card', date: '2026-09-01', invoice: 'INV-2026-0041' },
];

export default function FinancePage() {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [receipts, setReceipts] = useState(initialReceipts);
  const [showReceiptForm, setShowReceiptForm] = useState(false);
  const [receiptCustomer, setReceiptCustomer] = useState('');
  const [receiptAmount, setReceiptAmount] = useState('');
  const [receiptMethod, setReceiptMethod] = useState('Bank transfer');

  const recordReceipt = () => {
    const amount = Number(receiptAmount);
    if (!receiptCustomer || !amount) return;
    const receiptNumber = `MR-2026-${String(receipts.length + 19).padStart(4, '0')}`;
    setReceipts((current) => [{ number: receiptNumber, customer: receiptCustomer, amount, method: receiptMethod, date: '2026-09-08', invoice: 'Unallocated' }, ...current]);
    setReceiptCustomer('');
    setReceiptAmount('');
    setShowReceiptForm(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Finance & Payments</h1>
          <p className="text-slate-600 mt-1">Manage invoices, collections, money receipts, and profitability.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => setShowReceiptForm((open) => !open)}>+ Money receipt</Button>
          <Link href="/dashboard/quotations/new" className="btn-primary">+ Create invoice</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <div>
            <p className="text-sm text-slate-600">Total Revenue</p>
            <p className="text-2xl font-bold mt-2">{formatCurrency(invoices.reduce((sum, invoice) => sum + invoice.paid, 0))}</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600">Pending Payments</p>
            <p className="text-2xl font-bold text-orange-600 mt-2">{formatCurrency(invoices.reduce((sum, invoice) => sum + invoice.total - invoice.paid, 0))}</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600">Gross Margin</p>
            <p className="text-2xl font-bold text-green-600 mt-2">28.5%</p>
          </div>
        </Card>
      </div>

      {showReceiptForm && (
        <Card>
          <CardHeader title="Record money receipt" description="Issue a receipt for cash, card, bank transfer, or another payment method." />
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <Input label="Customer" value={receiptCustomer} onChange={(event) => setReceiptCustomer(event.target.value)} placeholder="Customer name" />
              <Input label="Amount" type="number" value={receiptAmount} onChange={(event) => setReceiptAmount(event.target.value)} placeholder="0.00" />
              <Select label="Payment method" options={[{ value: 'Bank transfer', label: 'Bank transfer' }, { value: 'Card', label: 'Card' }, { value: 'Cash', label: 'Cash' }, { value: 'Cheque', label: 'Cheque' }]} value={receiptMethod} onChange={(event) => setReceiptMethod(event.target.value)} />
              <Button variant="primary" onClick={recordReceipt}>Issue receipt</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader title="Invoices" action={<Button variant="ghost" size="sm">Export CSV</Button>} />
        <CardContent>
          <div className="overflow-x-auto">
            <table className="table-compact">
              <thead><tr><th>Invoice</th><th>Customer</th><th>Trip</th><th>Total</th><th>Balance</th><th>Due date</th><th>Status</th></tr></thead>
              <tbody>{invoices.map((invoice) => <tr key={invoice.number}>
                <td className="font-mono font-medium">{invoice.number}</td><td>{invoice.customer}</td><td>{invoice.trip}</td><td className="font-semibold">{formatCurrency(invoice.total)}</td><td>{formatCurrency(invoice.total - invoice.paid)}</td><td>{formatDate(invoice.due, 'short')}</td><td><StatusBadge status={invoice.status} /></td>
              </tr>)}</tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Money receipts" action={<Button variant="ghost" size="sm">Print register</Button>} />
        <CardContent>
          <div className="overflow-x-auto">
            <table className="table-compact">
              <thead><tr><th>Receipt</th><th>Customer</th><th>Invoice</th><th>Method</th><th>Date</th><th className="text-right">Amount</th></tr></thead>
              <tbody>{receipts.map((receipt) => <tr key={receipt.number}>
                <td className="font-mono font-medium">{receipt.number}</td><td>{receipt.customer}</td><td>{receipt.invoice}</td><td>{receipt.method}</td><td>{formatDate(receipt.date, 'short')}</td><td className="text-right font-semibold text-green-700">{formatCurrency(receipt.amount)}</td>
              </tr>)}</tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
