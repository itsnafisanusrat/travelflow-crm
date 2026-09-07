# TravelFlow CRM - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- npm or yarn package manager

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Database

**Option A: Local PostgreSQL**
```bash
# Make sure PostgreSQL is running
# Default connection string in .env.local:
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/travelflow_dev"
```

**Option B: Cloud Database (Railway.app recommended)**
1. Create free account at [railway.app](https://railway.app)
2. Create PostgreSQL database
3. Copy connection string to `.env.local`

### Step 3: Set Up Database
```bash
# Generate Prisma client
npm run prisma:generate

# Create database and run migrations
npm run prisma:migrate

# (Optional) Seed demo data
npm run seed
```

### Step 4: Start Development Server
```bash
npm run dev
```

Visit: **http://localhost:3000**

### Step 5: Login
- **Email:** `demo@travelflow.com`
- **Password:** `demo123`

## 📦 Available Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run linter

# Database
npm run prisma:generate  # Generate Prisma client
npm run prisma:migrate   # Run migrations
npm run prisma:studio    # Open Prisma Studio (GUI)
npm run seed             # Seed demo data

# Formatting
npm run format           # Format code with Prettier
```

## 🗂️ Project Structure Quick Reference

```
├── app/              - Next.js pages and routes
│   ├── api/         - API endpoints
│   ├── dashboard/   - Dashboard pages
│   └── login/       - Authentication
├── components/       - React components
├── lib/             - Utilities and helpers
├── types/           - TypeScript definitions
├── hooks/           - Custom React hooks
├── styles/          - Global CSS
├── prisma/          - Database schema
└── scripts/         - Utility scripts
```

## 🎯 Common Development Tasks

### Add a New Lead Page Feature
1. Create file: `app/dashboard/leads/new/page.tsx`
2. Import components from `@/components`
3. Use types from `@/types`
4. Format using utilities from `@/lib/utils`

### Create an API Endpoint
1. Create file: `app/api/[resource]/route.ts`
2. Implement POST/GET/PUT/DELETE handlers
3. Use Prisma client: `import prisma from '@/lib/db/client'`
4. Return JSON responses

### Add a Database Model
1. Update `prisma/schema.prisma`
2. Run: `npm run prisma:migrate`
3. Generate types if needed

## 🔍 Troubleshooting

### Database connection errors?
```bash
# Check PostgreSQL is running
# Verify DATABASE_URL in .env.local
# Run: psql postgres://... (test connection)
```

### Port 3000 already in use?
```bash
# Run on different port
npm run dev -- -p 3001
```

### Prisma sync issues?
```bash
# Regenerate client
rm -rf node_modules/.prisma
npm run prisma:generate
```

### Application not updating?
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 📚 Learning Path

1. **Start:** Explore dashboard and existing pages
2. **Read:** Review component files in `/components`
3. **Try:** Edit a page and see changes
4. **Create:** Add a new simple page
5. **Connect:** Create an API endpoint
6. **Database:** Query data with Prisma

## 🚢 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Railway.app
1. Connect GitHub repo
2. Add PostgreSQL resource
3. Set environment variables
4. Deploy

### Deploy to Heroku
```bash
# Create app
heroku create your-app-name

# Set env vars
heroku config:set DATABASE_URL="..."

# Deploy
git push heroku main
```

## 🆘 Getting Help

- **Docs:** Check [README.md](./README.md)
- **Issues:** Review existing GitHub issues
- **Questions:** Create new issue with details
- **API:** Check route examples in `app/api/`

## 🎓 Next Learning Steps

- [ ] Explore Prisma Studio (`npm run prisma:studio`)
- [ ] Review database schema (`prisma/schema.prisma`)
- [ ] Check demo data function (`scripts/seed.js`)
- [ ] Study component patterns (`components/*.tsx`)
- [ ] Read utility functions (`lib/utils/*.ts`)

---

**Happy building! 🚀**
