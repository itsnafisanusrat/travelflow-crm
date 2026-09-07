// app/dashboard/page.tsx - Executive Dashboard

'use client';

import { Card, CardHeader, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { Badge, StatusBadge } from '@/components/Badge';
import Link from 'next/link';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Demo data
const kpis = [
  { label: 'Total Leads', value: '48', trend: '+12%', icon: '🎯', color: 'brand' },
  { label: 'Qualified Leads', value: '23', trend: '+8%', icon: '✓', color: 'success' },
  { label: 'Open Opportunities', value: '16', trend: '+3%', icon: '📈', color: 'primary' },
  { label: 'Pending Payments', value: '$4,250', trend: '-5%', icon: '💰', color: 'warning' },
];

const monthlySalesData = [
  { month: 'Jan', revenue: 24000, cost: 12000 },
  { month: 'Feb', revenue: 32000, cost: 15000 },
  { month: 'Mar', revenue: 28000, cost: 13000 },
  { month: 'Apr', revenue: 41000, cost: 18000 },
  { month: 'May', revenue: 35000, cost: 17000 },
  { month: 'Jun', revenue: 48000, cost: 21000 },
];

const leadSourceData = [
  { name: 'Website', value: 35, fill: '#40bf94' },
  { name: 'Email', value: 28, fill: '#90d9d2' },
  { name: 'Referral', value: 22, fill: '#68ccb3' },
  { name: 'Other', value: 15, fill: '#b8e6e1' },
];

const consultantPerformance = [
  { consultant: 'Sarah Johnson', leads: 12, closed: 5, value: '$45,000' },
  { consultant: 'Mike Chen', leads: 10, closed: 4, value: '$38,500' },
  { consultant: 'Lisa Rodriguez', leads: 14, closed: 6, value: '$52,000' },
  { consultant: 'James Williams', leads: 8, closed: 3, value: '$28,000' },
];

const recentActivity = [
  { type: 'lead', action: 'New lead created', details: 'Tokyo Explorer - 6 days', time: '2 hours ago' },
  { type: 'quotation', action: 'Quotation sent', details: 'Bali Honeymoon Trip', time: '4 hours ago' },
  { type: 'booking', action: 'Booking confirmed', details: 'European Grand Tour', time: '1 day ago' },
  { type: 'payment', action: 'Payment received', details: 'Invoice #INV-2024-001', time: '1 day ago' },
];

export default function DashboardPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Overview</h1>
          <p className="text-slate-600 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="md">
            📊 Export
          </Button>
          <Button variant="primary" size="md">
            + New Lead
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <Card key={idx} className="hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">{kpi.label}</p>
                <p className="text-2xl font-bold text-slate-900 mt-2">{kpi.value}</p>
              </div>
              <div className="text-2xl">{kpi.icon}</div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Badge variant={kpi.trend.includes('+') ? 'success' : 'warning'} size="sm">
                {kpi.trend}
              </Badge>
              <span className="text-xs text-slate-500">vs last month</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Sales */}
        <Card>
          <CardHeader title="Monthly Revenue & Costs" />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  formatter={(value) => `$${value.toLocaleString()}`}
                />
                <Legend />
                <Bar dataKey="revenue" fill="#40bf94" name="Revenue" radius={[8, 8, 0, 0]} />
                <Bar dataKey="cost" fill="#b8e6e1" name="Cost" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Lead Sources */}
        <Card>
          <CardHeader title="Lead Sources Distribution" />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {leadSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Consultant Performance */}
        <Card className="lg:col-span-2">
          <CardHeader title="Top Consultant Performance" />
          <CardContent>
            <div className="space-y-4">
              {consultantPerformance.map((consultant, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{consultant.consultant}</p>
                    <p className="text-xs text-slate-600 mt-1">
                      {consultant.leads} leads • {consultant.closed} closed
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{consultant.value}</p>
                    <p className="text-xs text-slate-600 mt-1">Total value</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader title="This Week" />
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-2xl font-bold text-blue-600">8</p>
                <p className="text-xs font-medium text-blue-700 mt-1">New Leads</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-2xl font-bold text-green-600">3</p>
                <p className="text-xs font-medium text-green-700 mt-1">Bookings Confirmed</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-2xl font-bold text-orange-600">$12.5K</p>
                <p className="text-xs font-medium text-orange-700 mt-1">Revenue Generated</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader
          title="Recent Activity"
          action={
            <Link href="/dashboard/leads" className="text-brand-600 hover:text-brand-700 font-medium text-sm">
              View All
            </Link>
          }
        />
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="flex items-start gap-3 flex-1">
                  <div className="text-lg">{
                    activity.type === 'lead' ? '🎯' :
                    activity.type === 'quotation' ? '📋' :
                    activity.type === 'booking' ? '📅' :
                    '💰'
                  }</div>
                  <div>
                    <p className="font-medium text-slate-900">{activity.action}</p>
                    <p className="text-sm text-slate-600">{activity.details}</p>
                  </div>
                </div>
                <div className="text-xs text-slate-500 whitespace-nowrap ml-4">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
