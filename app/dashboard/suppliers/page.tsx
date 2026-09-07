// app/dashboard/suppliers/page.tsx

'use client';

import { Card, CardHeader } from '@/components/Card';

export default function SuppliersPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Suppliers</h1>
        <p className="text-slate-600 mt-1">Manage hotels, airlines, and service providers</p>
      </div>
      <Card>
        <CardHeader title="Supplier Directory (Coming Soon)" />
      </Card>
    </div>
  );
}
