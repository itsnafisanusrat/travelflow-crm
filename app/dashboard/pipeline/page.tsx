// app/dashboard/pipeline/page.tsx

'use client';

import { Card, CardHeader } from '@/components/Card';

export default function PipelinePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Sales Pipeline</h1>
        <p className="text-slate-600 mt-1">Kanban view of your sales opportunities</p>
      </div>
      <Card>
        <CardHeader title="Pipeline Board (Coming Soon)" />
      </Card>
    </div>
  );
}
