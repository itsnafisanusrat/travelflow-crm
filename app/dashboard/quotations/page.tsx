// app/dashboard/quotations/page.tsx - Quotations Page

'use client';

import { Card, CardHeader, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input, Select } from '@/components/Input';
import { StatusBadge } from '@/components/Badge';
import Link from 'next/link';
import { formatDate, formatCurrency } from '@/lib/utils/format';

const quotations = [
  {
    id: 1,
    ref: 'QT-2024-001',
    title: 'Tokyo Explorer Package',
    customer: 'John Smith',
    amount: 8500,
    status: 'SENT',
    createdDate: '2024-06-10',
    expiryDate: '2024-06-24',
    daysLeft: 8,
  },
  {
    id: 2,
    ref: 'QT-2024-002',
    title: 'Bali Honeymoon Suite',
    customer: 'Emily & David',
    amount: 12000,
    status: 'VIEWED',
    createdDate: '2024-06-08',
    expiryDate: '2024-06-22',
    daysLeft: 6,
  },
  {
    id: 3,
    ref: 'QT-2024-003',
    title: 'European Discovery Tour',
    customer: 'Robert Wilson',
    amount: 15000,
    status: 'ACCEPTED',
    createdDate: '2024-06-05',
    expiryDate: '2024-06-19',
    daysLeft: 3,
  },
];

export default function QuotationsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Quotations & Proposals</h1>
          <p className="text-slate-600 mt-1">Create and manage travel quotations</p>
        </div>
        <Button variant="primary" size="md">
          + New Quotation
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Search quotations..." />
            <Select
              options={[
                { value: 'DRAFT', label: 'Draft' },
                { value: 'SENT', label: 'Sent' },
                { value: 'VIEWED', label: 'Viewed' },
                { value: 'ACCEPTED', label: 'Accepted' },
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Quotations List */}
      <Card>
        <CardHeader title={`Quotations (${quotations.length})`} />
        <CardContent>
          <div className="space-y-4">
            {quotations.map((quote) => (
              <div
                key={quote.id}
                className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-slate-900">{quote.title}</h3>
                    <span className="text-xs font-mono text-slate-500">{quote.ref}</span>
                  </div>
                  <p className="text-sm text-slate-600">{quote.customer}</p>
                </div>
                <div className="text-right mr-6">
                  <p className="font-semibold text-slate-900">{formatCurrency(quote.amount)}</p>
                  <p className="text-xs text-slate-500">Expires in {quote.daysLeft} days</p>
                </div>
                <div className="mr-6">
                  <StatusBadge status={quote.status} />
                </div>
                <Link
                  href={`/dashboard/quotations/${quote.id}`}
                  className="text-brand-600 hover:text-brand-700 font-medium text-sm"
                >
                  View →
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
