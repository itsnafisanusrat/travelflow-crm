// scripts/seed.js - Seed database with demo data

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database with demo data...\n');

  // Clean up existing data
  await prisma.auditLog.deleteMany();
  await prisma.activity.deleteMany();
  await prisma.communication.deleteMany();
  await prisma.document.deleteMany();
  await prisma.task.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.bookingService.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.itineraryDay.deleteMany();
  await prisma.itinerary.deleteMany();
  await prisma.quotationItem.deleteMany();
  await prisma.quotation.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.supplier.deleteMany();
  await prisma.traveler.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.user.deleteMany();
  await prisma.organization.deleteMany();

  console.log('✓ Cleaned existing data');

  // Create Demo Organization
  const org = await prisma.organization.create({
    data: {
      id: 'org_demo_1',
      name: 'Global Travel Explorers',
      slug: 'global-travel-explorers',
      website: 'https://globaltravelexplorers.com',
      email: 'info@globaltravelexplorers.com',
      phone: '+1 (555) 123-4567',
      address: '123 Travel Street',
      city: 'New York',
      country: 'United States',
      timezone: 'America/New_York',
      currency: 'USD',
    },
  });

  console.log('✓ Created organization:', org.name);

  // Create Demo Users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'demo@travelflow.com',
        password: bcrypt.hashSync('demo123', 10),
        firstName: 'Demo',
        lastName: 'User',
        role: 'AGENCY_OWNER',
        organizationId: org.id,
        isActive: true,
      },
    }),
    prisma.user.create({
      data: {
        email: 'sarah@globaltravelexplorers.com',
        password: bcrypt.hashSync('password123', 10),
        firstName: 'Sarah',
        lastName: 'Johnson',
        role: 'SALES_MANAGER',
        organizationId: org.id,
        isActive: true,
      },
    }),
    prisma.user.create({
      data: {
        email: 'mike@globaltravelexplorers.com',
        password: bcrypt.hashSync('password123', 10),
        firstName: 'Mike',
        lastName: 'Chen',
        role: 'TRAVEL_CONSULTANT',
        organizationId: org.id,
        isActive: true,
      },
    }),
    prisma.user.create({
      data: {
        email: 'lisa@globaltravelexplorers.com',
        password: bcrypt.hashSync('password123', 10),
        firstName: 'Lisa',
        lastName: 'Rodriguez',
        role: 'TRAVEL_CONSULTANT',
        organizationId: org.id,
        isActive: true,
      },
    }),
  ]);

  console.log('✓ Created', users.length, 'demo users');

  // Create Demo Customers
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        organizationId: org.id,
        name: 'John Smith',
        email: 'john.smith@email.com',
        phone: '+1 (555) 111-2222',
        city: 'Boston',
        country: 'United States',
        type: 'individual',
      },
    }),
    prisma.customer.create({
      data: {
        organizationId: org.id,
        name: 'Emily & David',
        email: 'emily.david@email.com',
        phone: '+1 (555) 222-3333',
        city: 'Los Angeles',
        country: 'United States',
        type: 'couple',
      },
    }),
    prisma.customer.create({
      data: {
        organizationId: org.id,
        name: 'Robert Wilson',
        email: 'robert.wilson@email.com',
        phone: '+1 (555) 333-4444',
        city: 'Chicago',
        country: 'United States',
        type: 'individual',
      },
    }),
  ]);

  console.log('✓ Created', customers.length, 'demo customers');

  // Create Demo Travelers
  const travelers = await Promise.all([
    prisma.traveler.create({
      data: {
        organizationId: org.id,
        customerId: customers[0].id,
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@email.com',
        phone: '+1 (555) 111-2222',
        nationality: 'American',
        passport: 'PS1234567',
        passportExpiry: new Date('2026-12-31'),
      },
    }),
    prisma.traveler.create({
      data: {
        organizationId: org.id,
        customerId: customers[1].id,
        firstName: 'Emily',
        lastName: 'Davis',
        email: 'emily@email.com',
        nationality: 'American',
      },
    }),
    prisma.traveler.create({
      data: {
        organizationId: org.id,
        customerId: customers[1].id,
        firstName: 'David',
        lastName: 'Davis',
        email: 'david@email.com',
        nationality: 'American',
      },
    }),
  ]);

  console.log('✓ Created', travelers.length, 'demo travelers');

  // Create Demo Leads
  const leads = await Promise.all([
    prisma.lead.create({
      data: {
        organizationId: org.id,
        customerId: customers[0].id,
        travelerId: travelers[0].id,
        createdById: users[0].id,
        assignedConsultantId: users[1].id,
        referenceNumber: 'LD-2024-001',
        destination: 'Tokyo, Japan',
        travelDates: 'Jul 15 - Jul 22, 2024',
        duration: 7,
        numTravelers: 1,
        travelerType: 'INDIVIDUAL',
        budget: 8500,
        tripPurpose: 'Leisure',
        leadSource: 'WEBSITE',
        status: 'QUOTATION_SENT',
        priority: 'high',
        score: 85,
        tags: ['Asia', 'Summer', 'Cultural'],
        consentEmail: true,
        consentPhone: true,
      },
    }),
    prisma.lead.create({
      data: {
        organizationId: org.id,
        customerId: customers[1].id,
        createdById: users[0].id,
        assignedConsultantId: users[1].id,
        referenceNumber: 'LD-2024-002',
        destination: 'Bali, Indonesia',
        travelDates: 'Aug 1 - Aug 8, 2024',
        duration: 7,
        numTravelers: 2,
        travelerType: 'COUPLE',
        budget: 12000,
        tripPurpose: 'Honeymoon',
        leadSource: 'REFERRAL',
        status: 'NEGOTIATION',
        priority: 'high',
        score: 92,
        tags: ['Beach', 'Honeymoon'],
        consentEmail: true,
        consentPhone: true,
      },
    }),
  ]);

  console.log('✓ Created', leads.length, 'demo leads');

  // Create Demo Quotations
  const quotations = await Promise.all([
    prisma.quotation.create({
      data: {
        organizationId: org.id,
        leadId: leads[0].id,
        customerId: customers[0].id,
        createdById: users[1].id,
        referenceNumber: 'QT-2024-001',
        title: 'Tokyo Explorer Package',
        status: 'SENT',
        destinationName: 'Tokyo, Japan',
        startDate: new Date('2024-07-15'),
        endDate: new Date('2024-07-22'),
        duration: 7,
        numTravelers: 1,
        currency: 'USD',
        subtotal: 7500,
        taxAmount: 600,
        discountAmount: 0,
        totalPrice: 8100,
        perPersonPrice: 8100,
        depositAmount: 4000,
        balanceDue: 4100,
        costPrice: 5500,
        margin: 1600,
        marginPercent: 25.4,
        expiresAt: new Date('2024-06-24'),
        viewedAt: new Date('2024-06-12'),
      },
    }),
  ]);

  console.log('✓ Created', quotations.length, 'demo quotations');

  // Create Demo Suppliers
  const suppliers = await Promise.all([
    prisma.supplier.create({
      data: {
        organizationId: org.id,
        name: 'Shinjuku Prince Hotel',
        type: 'Hotel',
        email: 'reservations@shinjukuprince.jp',
        website: 'https://www.princehotels.com',
        rating: 5,
        commission: 12,
      },
    }),
    prisma.supplier.create({
      data: {
        organizationId: org.id,
        name: 'Japan Airlines (JAL)',
        type: 'Airline',
        email: 'sales@jal.co.jp',
        website: 'https://www.jal.com',
        rating: 5,
        commission: 8,
      },
    }),
  ]);

  console.log('✓ Created', suppliers.length, 'demo suppliers');

  console.log('\n✨ Database seeding completed successfully!');
  console.log('\n📝 Demo Credentials:');
  console.log('   Email: demo@travelflow.com');
  console.log('   Password: demo123');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
