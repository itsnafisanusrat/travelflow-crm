// app/dashboard/customers/page.tsx

'use client';

import { Card, CardHeader, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Link from 'next/link';

const customers = [
  { id: 1, name: 'John Smith', email: 'john@example.com', city: 'New York', trips: 3 },
  { id: 2, name: 'Emily & David', email: 'emily@example.com', city: 'Los Angeles', trips: 2 },
  { id: 3, name: 'Robert Wilson', email: 'robert@example.com', city: 'Chicago', trips: 5 },
];

export default function CustomersPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Customers</h1>
          <p className="text-slate-600 mt-1">Manage customer profiles and relationships</p>
        </div>
        <Link href="/dashboard/leads/new" className="btn-primary">+ New Customer</Link>
      </div>

      <Card>
        <CardContent className="pt-4">
          <Input placeholder="Search customers..." />
        </CardContent>
      </Card>

      <Card>
        <CardHeader title={`Customers (${customers.length})`} />
        <CardContent>
          <div className="grid gap-4">
            {customers.map((customer) => (
              <div key={customer.id} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-slate-900">{customer.name}</h3>
                    <p className="text-sm text-slate-600">{customer.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{customer.trips} trips</p>
                    <p className="text-xs text-slate-500">{customer.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
