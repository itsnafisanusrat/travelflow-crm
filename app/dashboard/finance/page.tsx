// app/dashboard/finance/page.tsx

'use client';

import { Card, CardHeader, CardContent } from '@/components/Card';
import { formatCurrency } from '@/lib/utils/format';

export default function FinancePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Finance & Payments</h1>
        <p className="text-slate-600 mt-1">Track invoices, payments, and profitability</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <div>
            <p className="text-sm text-slate-600">Total Revenue</p>
            <p className="text-2xl font-bold mt-2">{formatCurrency(125000)}</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600">Pending Payments</p>
            <p className="text-2xl font-bold text-orange-600 mt-2">{formatCurrency(8500)}</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600">Gross Margin</p>
            <p className="text-2xl font-bold text-green-600 mt-2">28.5%</p>
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader title="Invoices & Payments (Coming Soon)" />
      </Card>
    </div>
  );
}
