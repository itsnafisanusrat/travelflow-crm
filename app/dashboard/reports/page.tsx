// app/dashboard/reports/page.tsx

'use client';

import { Card, CardHeader } from '@/components/Card';

export default function ReportsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Reports & Analytics</h1>
        <p className="text-slate-600 mt-1">View business intelligence and export reports</p>
      </div>
      <Card>
        <CardHeader title="Advanced Reports (Coming Soon)" />
      </Card>
    </div>
  );
}
