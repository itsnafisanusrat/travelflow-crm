# TravelFlow CRM

**From first enquiry to unforgettable journey**

A professional, modern, and production-ready Customer Relationship Management (CRM) platform built specifically for travel agencies, tour operators, destination management companies, travel consultants, and corporate travel teams.

## 🚀 Features

- **Executive Dashboard** - Real-time KPIs, sales charts, and business overview
- **Lead Management** - Capture, qualify, and nurture travel enquiries
- **Customer Profiles** - 360-degree view of traveler information and preferences
- **Sales Pipeline** - Kanban board for tracking opportunities through sales stages
- **Quotation Builder** - Professional proposal generation with pricing and packages
- **Itinerary Builder** - Day-by-day trip planning with visual interface
- **Booking Management** - Convert quotations to confirmed bookings
- **Supplier directory** - Manage hotels, airlines, guides, and service partners
- **Financial Tracking** - Invoices, payments, profitability, and revenue reporting
- **Communication Hub** - Unified timeline for emails, messages, and notes
- **Task Management** - Workflow automation and team task assignment
- **Multi-tenancy** - Support for multiple organizations with role-based access

## 🏗️ Tech Stack

- **Frontend:** Next.js 14+, React 18, TypeScript
- **Styling:** Tailwind CSS, Custom components
- **Backend:** Next.js API Routes, Node.js
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT-based sessions
- **Charts & Visualization:** Recharts
- **State Management:** Zustand

## 📋 Prerequisites

- **Node.js** (v18+)
- **PostgreSQL** (local or cloud instance)
- **npm** or **yarn**

## 🛠️ Installation & Setup

### 1. Clone and Install

```bash
cd "CRM For Travel Industry"
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local` and update with your settings:

```bash
cp .env.example .env.local
```

**Required Environment Variables:**

```
DATABASE_URL= "postgresql://user:password@localhost:5432/travelflow"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-min-32-chars-long"
```

### 3. Set Up Database

Create the database and run migrations:

```bash
# Generate Prisma client
npm run prisma:generate

# Create and migrate database
npm run prisma:migrate

# (Optional) Open Prisma Studio to view data
npm run prisma:studio
```

### 4. Seed Demo Data (Optional)

```bash
npm run seed
```

This populates the database with sample organizations, users, leads, quotations, bookings, and other realistic data.

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at **http://localhost:3000**

## 📝 Demo Credentials

**Email:** `demo@travelflow.com`  
**Password:** `demo123`

The demo user has the "Agency Owner" role with full access to all features.

## 📁 Project Structure

```
├── app/                           # Next.js App Router pages and layouts
│   ├── api/                      # API routes (auth, data endpoints)
│   ├── dashboard/                # Dashboard and module pages
│   ├── login/                    # Authentication pages
│   └── layout.tsx                # Root layout
├── components/                    # Reusable React components
│   ├── Button.tsx               # Button component
│   ├── Card.tsx                 # Card component
│   ├── Badge.tsx                # Status badge component
│   ├── Input.tsx                # Form inputs
│   └── Navigation.tsx           # Sidebar and TopNav
├── lib/
│   ├── db/
│   │   └── client.ts            # Prisma client singleton
│   └── utils/
│       ├── format.ts            # Formatting utilities
│       ├── validation.ts        # Validation helpers
│       └── common.ts            # Common utilities
├── types/
│   └── index.ts                 # TypeScript type definitions
├── hooks/                        # Custom React hooks
├── styles/
│   └── globals.css              # Global Tailwind styles
├── prisma/
│   └── schema.prisma            # Database schema
├── scripts/                      # Utility scripts (seeding)
└── package.json                 # Dependencies
```

## 🗂️ Core Modules

### 1. Dashboard (`/dashboard`)
Executive overview with KPIs, charts, and recent activity.
- Revenue and cost trends
- Lead source distribution
- Consultant performance
- This week's summary

### 2. Leads (`/dashboard/leads`)
Manage travel enquiries from initial contact to conversion.
- Lead capture from multiple channels
- Status tracking and qualification
- Lead scoring and prioritization
- Assignment to consultants

### 3. Customers (`/dashboard/customers`)
360-degree customer profiles for repeat business and loyalty.
- Contact and preference management
- Travel history and upcoming trips
- Family and group relationships
- Document and communication history

### 4. Pipeline (`/dashboard/pipeline`)
Kanban-style sales pipeline visualization.
- Drag-and-drop opportunity management
- Customizable stages and statuses
- Value tracking and forecasting
- Individual and team views

### 5. Quotations (`/dashboard/quotations`)
Professional proposal generation with pricing.
- Template-based quotation builder
- Multiple package options (Economy, Standard, Premium, Luxury)
- Automatic cost and margin calculation
- Client-facing proposal delivery
- Expiry and status tracking

### 6. Itineraries (`/dashboard/itineraries`)
Day-by-day trip planning with visual interface.
- Destination-based itinerary templates
- Accommodation, transport, activities, meals planning
- Client-facing itinerary preview and PDF export
- Image and document attachments

### 7. Bookings (`/dashboard/bookings`)
Confirmed trip management and operations tracking.
- Convert quotations to bookings
- Supplier confirmations checklist
- Traveler documentation tracking
- Trip timeline and milestones
- Payment collection workflow

### 8. Finance (`/dashboard/finance`)
Revenue, payments, and profitability tracking.
- Invoice generation and payment tracking
- Deposit and balance due management
- Supplier payment recording
- Commission tracking
- Profit margin analysis

### 9. Additional Modules
- **Suppliers** - Hotel, airline, guide, and service provider directory
- **Calendar** - Events, tasks, departures, and deadlines
- **Reports** - Advanced analytics and KPI reporting
- **Settings** - Organization, users, permissions, and templates

##  🔐 Security & Multi-Tenancy

- **Organization-based isolation** - Each user belongs to one organization
- **Role-based access control (RBAC)** - 8 predefined roles with specific permissions
- **Row-level security** - Data filtered by organization at database layer
- **Audit logging** - Track all changes to sensitive records
- **Soft deletion** - Data retained for compliance and recovery

## 🎨 Design System

### Colors
- **Brand Primary:** Teal/Ocean Blue (#40bf94)
- **Background:** Off-white (#f9fafb)
- **Text:** Dark slate (#111827)
- **Neutral:** Slate gray (#6b7280)

### Components
- Cards with subtle borders and shadows
- Rounded corners (12px default border-radius)
- Generous whitespace and breathing room
- Responsive grid layouts
- Accessible form inputs

### Typography
- Sans-serif system font stack
- Clear hierarchy with weighted headings
- Readable line heights and spacing
- Travel-specific terminology

##📦 Building for Production

### Build
```bash
npm run build
```

### Run Production Build
```bash
npm run start
```

### Deployment Options
- **Vercel** (recommended for Next.js) - [Deploy with one click](https://vercel.com/new)
- **Railway.app** - PostgreSQL + Node.js hosting
- **AWS, GCP, Azure** - Full cloud deployment
- **Docker** - Containerized deployment

## 🔄 API Endpoints

### Authentication
- `POST /api/auth/login` - Login with email/password
- `POST /api/auth/logout` - Logout and clear session

### Data (To be implemented)
- `GET /api/leads` - Fetch all leads
- `POST /api/leads` - Create new lead
- `GET /api/quotations` - Fetch quotations
- `POST /api/bookings` - Create booking
- And more...

## 🚦 Roadmap

### Phase 1 (Current)
✅ Dashboard and overview
✅ Lead management
✅ Basic module structure
- [ ] Complete quotation builder workflow
- [ ] Itinerary builder with drag-drop

### Phase 2
- [ ] Full booking management
- [ ] Payment integration (Stripe, PayPal)
- [ ] Email and WhatsApp integration
- [ ] PDF generation for proposals and itineraries

### Phase 3
- [ ] Supplier API integrations (hotel, airline APIs)
- [ ] Advanced reporting and BI
- [ ] AI-assisted lead scoring and recommendations
- [ ] Mobile app (React Native)

### Phase 4
- [ ] Calendar synchronization (Google, Outlook)
- [ ] Chat and real-time notifications
- [ ] Accounting system integration
- [ ] Multi-language and currency support

## 📚 Documentation

- [Prisma Schema Documentation](./prisma/schema.prisma) - Complete data model
- [Type Definitions](./types/index.ts) - TypeScript types and interfaces
- [Component Library](./components) - Reusable UI components

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:
1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is provided as-is for demonstration and commercial use.

## 💬 Support

For questions or issues:
- Create an issue on GitHub
- Contact: support@travelflowcrm.com
- Documentation: [TravelFlow Docs](./README.md)

---

**Made with ❤️ for modern travel businesses**
