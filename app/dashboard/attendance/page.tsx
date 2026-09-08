'use client';

import { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/Card';
import { Button } from '@/components/Button';
import { Badge, StatusBadge } from '@/components/Badge';
import { Select } from '@/components/Input';

const employees = [
  { id: 1, name: 'Sarah Johnson', role: 'Sales Manager', status: 'PRESENT', checkIn: '08:52', checkOut: '-' },
  { id: 2, name: 'Mike Chen', role: 'Travel Consultant', status: 'LATE', checkIn: '09:24', checkOut: '-' },
  { id: 3, name: 'Lisa Rodriguez', role: 'Travel Consultant', status: 'WORK_FROM_HOME', checkIn: '08:45', checkOut: '-' },
  { id: 4, name: 'James Williams', role: 'Operations Manager', status: 'LEAVE', checkIn: '-', checkOut: '-' },
  { id: 5, name: 'Demo User', role: 'Agency Owner', status: 'PRESENT', checkIn: '08:38', checkOut: '-' },
];

const attendanceOptions = [
  { value: 'PRESENT', label: 'Present' },
  { value: 'LATE', label: 'Late' },
  { value: 'WORK_FROM_HOME', label: 'Work from home' },
  { value: 'LEAVE', label: 'Leave' },
  { value: 'ABSENT', label: 'Absent' },
];

export default function AttendancePage() {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('PRESENT');
  const [records, setRecords] = useState(employees);
  const presentCount = useMemo(
    () => records.filter((employee) => ['PRESENT', 'LATE', 'WORK_FROM_HOME'].includes(employee.status)).length,
    [records]
  );

  const markAttendance = () => {
    if (!selectedEmployee) return;
    setRecords((current) => current.map((employee) => (
      employee.id === Number(selectedEmployee)
        ? { ...employee, status: selectedStatus, checkIn: selectedStatus === 'LEAVE' ? '-' : '09:00' }
        : employee
    )));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Employee Attendance</h1>
          <p className="text-slate-600 mt-1">Track daily attendance, work hours, leave, and remote work.</p>
        </div>
        <Button variant="primary" onClick={markAttendance}>Save Attendance</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card><p className="text-sm text-slate-600">Present today</p><p className="text-2xl font-bold text-green-600 mt-2">{presentCount}</p></Card>
        <Card><p className="text-sm text-slate-600">Late arrivals</p><p className="text-2xl font-bold text-orange-600 mt-2">{records.filter((employee) => employee.status === 'LATE').length}</p></Card>
        <Card><p className="text-sm text-slate-600">On leave</p><p className="text-2xl font-bold text-slate-900 mt-2">{records.filter((employee) => employee.status === 'LEAVE').length}</p></Card>
      </div>

      <Card>
        <CardHeader title="Mark or update attendance" description="Choose an employee and record today's attendance status." />
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <Select
              label="Employee"
              options={records.map((employee) => ({ value: String(employee.id), label: employee.name }))}
              value={selectedEmployee}
              onChange={(event) => setSelectedEmployee(event.target.value)}
            />
            <Select
              label="Status"
              options={attendanceOptions}
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
            />
            <Button variant="secondary" onClick={markAttendance}>Apply status</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Today's attendance" action={<Badge variant="primary">September 8, 2026</Badge>} />
        <CardContent>
          <div className="overflow-x-auto">
            <table className="table-compact">
              <thead><tr><th>Employee</th><th>Role</th><th>Status</th><th>Check in</th><th>Check out</th></tr></thead>
              <tbody>
                {records.map((employee) => (
                  <tr key={employee.id}>
                    <td className="font-medium text-slate-900">{employee.name}</td>
                    <td className="text-slate-600">{employee.role}</td>
                    <td><StatusBadge status={employee.status} /></td>
                    <td>{employee.checkIn}</td>
                    <td>{employee.checkOut}</td>
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
