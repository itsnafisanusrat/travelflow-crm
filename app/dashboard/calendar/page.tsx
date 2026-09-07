// app/dashboard/calendar/page.tsx

'use client';

import { Card, CardHeader } from '@/components/Card';

export default function CalendarPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Calendar & Tasks</h1>
        <p className="text-slate-600 mt-1">View upcoming events and manage tasks</p>
      </div>
      <Card>
        <CardHeader title="Calendar View (Coming Soon)" />
      </Card>
    </div>
  );
}
