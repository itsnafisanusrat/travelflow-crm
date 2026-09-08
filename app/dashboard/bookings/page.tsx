// app/dashboard/bookings/page.tsx - Bookings Page

'use client';

import { Card, CardHeader, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input, Select } from '@/components/Input';
import { StatusBadge } from '@/components/Badge';
import { formatDate, formatCurrency } from '@/lib/utils/format';
import Link from 'next/link';

const bookings = [
  {
    id: 1,
    ref: 'BK-2024-001',
    tripName: 'Tokyo Explorer',
    customer: 'John Smith',
    startDate: '2024-07-15',
    endDate: '2024-07-22',
    travelers: 2,
    totalPrice: 8500,
    status: 'CONFIRMED',
  },
  {
    id: 2,
    ref: 'BK-2024-002',
    tripName: 'Bali Honeymoon',
    customer: 'Emily & David',
    startDate: '2024-08-01',
    endDate: '2024-08-08',
    travelers: 2,
    totalPrice: 12000,
    status: 'ON_HOLD',
  },
  {
    id: 3,
    ref: 'BK-2024-003',
    tripName: 'European Grand Tour',
    customer: 'Robert Wilson',
    startDate: '2024-09-10',
    endDate: '2024-09-25',
    travelers: 1,
    totalPrice: 15000,
    status: 'PARTIALLY_CONFIRMED',
  },
];

export default function BookingsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Bookings</h1>
          <p className="text-slate-600 mt-1">Manage confirmed trips and operations</p>
        </div>
        <Link href="/dashboard/quotations/new" className="btn-primary">
          + New Booking
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Search bookings..." />
            <Select
              options={[
                { value: 'PENDING', label: 'Pending' },
                { value: 'ON_HOLD', label: 'On Hold' },
                { value: 'CONFIRMED', label: 'Confirmed' },
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <div>
            <p className="text-sm text-slate-600">Total Bookings</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">{bookings.length}</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600">Confirmed</p>
            <p className="text-2xl font-bold text-green-600 mt-2">
              {bookings.filter(b => b.status === 'CONFIRMED').length}
            </p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600">Total Revenue</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">
              {formatCurrency(bookings.reduce((sum, b) => sum + b.totalPrice, 0))}
            </p>
          </div>
        </Card>
      </div>

      {/* Bookings Table */}
      <Card>
        <CardHeader title="Upcoming Trips" />
        <CardContent>
          <div className="overflow-x-auto">
            <table className="table-compact">
              <thead>
                <tr>
                  <th>Trip Name</th>
                  <th>Customer</th>
                  <th>Dates</th>
                  <th>Travelers</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="font-medium text-slate-900">{booking.tripName}</td>
                    <td className="text-slate-700">{booking.customer}</td>
                    <td className="text-slate-700">
                      {formatDate(booking.startDate, 'short')} - {formatDate(booking.endDate, 'short')}
                    </td>
                    <td className="text-slate-700">{booking.travelers}</td>
                    <td className="font-semibold text-slate-900">{formatCurrency(booking.totalPrice)}</td>
                    <td>
                      <StatusBadge status={booking.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
