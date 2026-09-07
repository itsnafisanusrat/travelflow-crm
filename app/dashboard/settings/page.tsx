// app/dashboard/settings/page.tsx

'use client';

import { Card, CardHeader, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-600 mt-1">Manage organization and user preferences</p>
      </div>

      <Card>
        <CardHeader title="Organization Settings" />
        <CardContent>
          <div className="space-y-4">
            <Input label="Organization Name" defaultValue="Your Travel Agency" />
            <Input label="Email" defaultValue="info@travelagency.com" />
            <Input label="Phone" defaultValue="+1 (555) 000-0000" />
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Save Changes</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Team & Permissions" />
        <CardContent>
          <p className="text-slate-600">Manage team members and roles</p>
        </CardContent>
      </Card>
    </div>
  );
}
