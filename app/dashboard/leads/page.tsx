// app/dashboard/leads/page.tsx - Leads Management Page

'use client';

import { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input, Select } from '@/components/Input';
import { Badge, StatusBadge } from '@/components/Badge';
import Link from 'next/link';
import { formatDate, formatCurrency } from '@/lib/utils/format';

// Demo data
const leads = [
  {
    id: 1,
    ref: 'LD-2024-001',
    name: 'Tokyo Explorer',
    customer: 'John Smith',
    destination: 'Tokyo, Japan',
    travelDates: 'Jul 15 - Jul 22, 2024',
    budget: 8500,
    status: 'QUOTATION_SENT',
    priority: 'high',
    consultant: 'Sarah Johnson',
    created: '2024-06-10',
  },
  {
    id: 2,
    ref: 'LD-2024-002',
    name: 'Bali Honeymoon',
    customer: 'Emily & David',
    destination: 'Bali, Indonesia',
    travelDates: 'Aug 1 - Aug 8, 2024',
    budget: 12000,
    status: 'CONSULTATION_SCHEDULED',
    priority: 'high',
    consultant: 'Mike Chen',
    created: '2024-06-09',
  },
  {
    id: 3,
    ref: 'LD-2024-003',
    name: 'European Grand Tour',
    customer: 'Robert Wilson',
    destination: 'Europe',
    travelDates: 'Sep 10 - Sep 25, 2024',
    budget: 15000,
    status: 'NEGOTIATION',
    priority: 'medium',
    consultant: 'Lisa Rodriguez',
    created: '2024-06-08',
  },
  {
    id: 4,
    ref: 'LD-2024-004',
    name: 'Caribbean Cruise',
    customer: 'Margaret Davis',
    destination: 'Caribbean',
    travelDates: 'Oct 5 - Oct 12, 2024',
    budget: 9500,
    status: 'NEW',
    priority: 'medium',
    consultant: 'James Williams',
    created: '2024-06-07',
  },
  {
    id: 5,
    ref: 'LD-2024-005',
    name: 'Swiss Adventure',
    customer: 'Peter Miller',
    destination: 'Switzerland',
    travelDates: 'Nov 1 - Nov 8, 2024',
    budget: 9000,
    status: 'CONTACTED',
    priority: 'low',
    consultant: 'Sarah Johnson',
    created: '2024-06-06',
  },
];

const statusOptions = [
  { value: 'NEW', label: 'New' },
  { value: 'CONTACTED', label: 'Contacted' },
  { value: 'QUALIFIED', label: 'Qualified' },
  { value: 'CONSULTATION_SCHEDULED', label: 'Consultation Scheduled' },
  { value: 'QUOTATION_SENT', label: 'Quotation Sent' },
  { value: 'NEGOTIATION', label: 'Negotiation' },
  { value: 'WON', label: 'Won' },
  { value: 'LOST', label: 'Lost' },
];

const priorityOptions = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || lead.status === statusFilter;
    const matchesPriority = !priorityFilter || lead.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Leads & Enquiries</h1>
          <p className="text-slate-600 mt-1">Manage and track your travel enquiries</p>
        </div>
        <Link href="/dashboard/leads/new" className="btn-primary">
          + New Lead
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              placeholder="Search leads, customer, destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select
              options={statusOptions}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              placeholder="Filter by status"
            />
            <Select
              options={priorityOptions}
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              placeholder="Filter by priority"
            />
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card>
        <CardHeader title={`Leads (${filteredLeads.length})`} />
        <CardContent>
          <div className="overflow-x-auto">
            <table className="table-compact">
              <thead>
                <tr>
                  <th className="text-left">Ref #</th>
                  <th className="text-left">Lead Name</th>
                  <th className="text-left">Customer</th>
                  <th className="text-left">Destination</th>
                  <th className="text-right">Budget</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Priority</th>
                  <th className="text-left">Consultant</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                    <td className="font-mono text-sm font-medium text-slate-900">{lead.ref}</td>
                    <td>
                      <Link href={`/dashboard/leads/${lead.id}`} className="text-brand-600 hover:text-brand-700 font-medium">
                        {lead.name}
                      </Link>
                    </td>
                    <td className="text-slate-700">{lead.customer}</td>
                    <td className="text-slate-700">{lead.destination}</td>
                    <td className="text-right font-medium text-slate-900">{formatCurrency(lead.budget, 'USD')}</td>
                    <td className="text-center">
                      <StatusBadge status={lead.status} />
                    </td>
                    <td className="text-center">
                      <Badge
                        variant={
                          lead.priority === 'high'
                            ? 'danger'
                            : lead.priority === 'medium'
                            ? 'warning'
                            : 'muted'
                        }
                        size="sm"
                      >
                        {lead.priority.charAt(0).toUpperCase() + lead.priority.slice(1)}
                      </Badge>
                    </td>
                    <td className="text-slate-700">{lead.consultant}</td>
                    <td className="text-center">
                      <Link
                        href={`/dashboard/leads/${lead.id}`}
                        className="text-brand-600 hover:text-brand-700 text-sm font-medium"
                      >
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredLeads.length === 0 && (
            <div className="text-center py-8">
              <p className="text-slate-500">No leads found matching your filters</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div>
            <p className="text-sm text-slate-600">Total Leads</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">{leads.length}</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600">Won</p>
            <p className="text-2xl font-bold text-green-600 mt-2">
              {leads.filter(l => l.status === 'WON').length}
            </p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600">In Progress</p>
            <p className="text-2xl font-bold text-blue-600 mt-2">
              {leads.filter(l => ['CONSULTATION_SCHEDULED', 'QUOTATION_SENT', 'NEGOTIATION'].includes(l.status)).length}
            </p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600">Total Value</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">
              {formatCurrency(leads.reduce((sum, l) => sum + l.budget, 0), 'USD')}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
