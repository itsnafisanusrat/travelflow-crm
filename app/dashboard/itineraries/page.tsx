// app/dashboard/itineraries/page.tsx

'use client';

import { Card, CardHeader } from '@/components/Card';

export default function ItinerariesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Itineraries</h1>
        <p className="text-slate-600 mt-1">Create and manage travel itineraries</p>
      </div>
      <Card>
        <CardHeader title="Itinerary Builder (Coming Soon)" />
      </Card>
    </div>
  );
}
