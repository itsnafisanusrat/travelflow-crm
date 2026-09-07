# TravelFlow CRM Development Guidelines

## Project Overview
TravelFlow CRM is a professional, modern CRM platform built for travel agencies, tour operators, and travel consultants. It's built with Next.js 14+, React 18, TypeScript, Tailwind CSS, and PostgreSQL with Prisma ORM.

## Tech Stack
- **Frontend:** Next.js 14+, React 18, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL with Prisma ORM
- **UI Components:** Custom Tailwind-based components
- **Charts:** Recharts
- **State:** Zustand (for complex state if needed)

## Code Style Guidelines

### TypeScript
- Use strict mode and proper typing
- Avoid `any` types when possible
- Define interfaces in `types/index.ts`
- Export types from component files

### React Components
- Use functional components with hooks
- Use `React.forwardRef` for components that need refs
- Separate UI components from page logic
- Place reusable components in `/components`

### File Organization
- `/app` - Next.js pages and routes
- `/app/api` - API endpoints
- `/components` - Reusable React components
- `/lib/utils` - Utility functions (formatting, validation, etc.)
- `/lib/db` - Database client and queries
- `/types` - TypeScript type definitions
- `/styles` - Global and component styles

### Naming Conventions
- Components: PascalCase (e.g., `UserCard.tsx`)
- Utilities: camelCase (e.g., `formatCurrency.ts`)
- Files: Use descriptive names matching exports
- Classes/Interfaces: PascalCase

### Styling
- Use Tailwind CSS utility classes
- Define custom components in `globals.css` with `@apply`
- Use theme colors from `tailwind.config.js`
- Maintain consistent spacing and sizing

### Database & Prisma
- Define all models in `prisma/schema.prisma`
- Use consistent naming: singular model names
- Always include `createdAt` and `updatedAt` timestamps
- Use enums for fixed value fields
- Add proper indexes for frequently queried fields

### API Routes
- Use TypeScript for route handlers
- Validate request data before processing
- Return consistent JSON responses
- Include proper error handling and status codes
- Document parameters and responses

### Error Handling
- Use meaningful error messages
- Return appropriate HTTP status codes
- Log errors for debugging
- Provide user-friendly error messages in UI

## Development Workflow

1. **Start dev server:** `npm run dev`
2. **View database:** `npm run prisma:studio`
3. **Create migrations:** Update schema, then `npm run prisma:migrate`
4. **Seed data:** `npm run seed` (for testing)
5. **Build for production:** `npm run build && npm run start`

## Key Features to Implement

### Completed
- ✅ Project structure and dependencies
- ✅ Database schema with Prisma
- ✅ Authentication basics (login page)
- ✅ Dashboard with KPIs and charts
- ✅ Leads management page
- ✅ Quotations page
- ✅ Bookings page
- ✅ Customers page
- ✅ UI component library (Button, Card, Badge, Input)

### In Progress
- Dashboard enhancements
- Lead details view
- Lead creation flow

### Coming Soon
- Quotation builder workflow
- Itinerary builder
- Booking management details
- Supplier management
- Financial tracking
- Communication integration
- Task and calendar features
- Reports and analytics
- Advanced filtering and search

## Common Patterns

### Creating a Page
```typescript
'use client'; // if using hooks

import { Card, CardHeader, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';

export default function PageName() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Page Title</h1>
      {/* Page content */}
    </div>
  );
}
```

### Creating a Component
```typescript
import React from 'react';
import { classNames } from '@/lib/utils/common';

interface ComponentProps {
  prop1: string;
  prop2?: number;
  children: React.ReactNode;
}

export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ prop1, prop2, children }, ref) => {
    return (
      <div ref={ref} className="">
        {children}
      </div>
    );
  }
);

Component.displayName = 'Component';
```

### API Route
```typescript
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Validate and process
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
```

## Demo Data

The application comes with demo credentials:
- **Email:** demo@travelflow.com
- **Password:** demo123

Demo data is seeded for rapid prototyping. Use `npm run seed` to regenerate.

## Performance Considerations

- Use React.memo for expensive components
- Implement pagination for large lists
- Cache API responses where appropriate 
- Lazy load heavy components
- Use Next.js Image optimization
- Monitor bundle size

## Testing

(To be implemented)
- Unit tests with Jest
- Integration tests with Playwright
- API endpoint testing

## Deployment

- Deploy to Vercel for easy Next.js hosting
- Set up environment variables in deployment platform
- Migrate database before deploying
- Test staging environment before production

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
