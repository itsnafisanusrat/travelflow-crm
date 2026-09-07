// types/index.ts - Comprehensive type definitions

export type UserRole =
  | 'SUPER_ADMIN'
  | 'AGENCY_OWNER'
  | 'SALES_MANAGER'
  | 'TRAVEL_CONSULTANT'
  | 'OPERATIONS_MANAGER'
  | 'FINANCE_USER'
  | 'SUPPLIER_USER'
  | 'READ_ONLY';

export type LeadStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'QUALIFIED'
  | 'CONSULTATION_SCHEDULED'
  | 'QUOTATION_SENT'
  | 'NEGOTIATION'
  | 'WON'
  | 'LOST'
  | 'NURTURE';

export type LeadSource =
  | 'WEBSITE'
  | 'EMAIL'
  | 'PHONE'
  | 'WHATSAPP'
  | 'SOCIAL_MEDIA'
  | 'REFERRAL'
  | 'WALK_IN'
  | 'PARTNER'
  | 'OTHER';

export type QuotationStatus =
  | 'DRAFT'
  | 'SENT'
  | 'VIEWED'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'EXPIRED'
  | 'REVISED';

export type BookingStatus =
  | 'PENDING'
  | 'ON_HOLD'
  | 'PARTIALLY_CONFIRMED'
  | 'CONFIRMED'
  | 'CANCELLED'
  | 'COMPLETED'
  | 'REFUNDED';

export type PaymentStatus =
  | 'DRAFT'
  | 'SENT'
  | 'PARTIALLY_PAID'
  | 'PAID'
  | 'OVERDUE'
  | 'CANCELLED'
  | 'REFUNDED';

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';

export type TravelerType =
  | 'INDIVIDUAL'
  | 'COUPLE'
  | 'FAMILY'
  | 'GROUP'
  | 'CORPORATE';

export type CurrencyCode =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'INR'
  | 'AUD'
  | 'CAD'
  | 'SGD'
  | 'AED';

// Domain Models
export interface Organization {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  timezone: string;
  currency: CurrencyCode;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phone?: string;
  role: UserRole;
  organizationId: string;
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Customer {
  id: string;
  organizationId: string;
  name: string;
  email?: string;
  phone?: string;
  website?: string;
  type: string; // individual or company
  address?: string;
  city?: string;
  country?: string;
  taxId?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Traveler {
  id: string;
  organizationId: string;
  customerId?: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  dateOfBirth?: Date;
  passport?: string;
  passportExpiry?: Date;
  visa?: string;
  visaExpiry?: Date;
  nationality?: string;
  dietaryNeeds?: string;
  accessibilityNeeds?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
  preferences?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lead {
  id: string;
  organizationId: string;
  customerId?: string;
  travelerId?: string;
  createdById: string;
  assignedConsultantId?: string;
  referenceNumber: string;
  destination?: string;
  travelDates?: string;
  duration?: number;
  numTravelers?: number;
  travelerType?: TravelerType;
  budget?: number;
  tripPurpose?: string;
  leadSource?: LeadSource;
  status: LeadStatus;
  priority: string;
  score: number;
  tags: string[];
  notes?: string;
  consentEmail: boolean;
  consentPhone: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Quotation {
  id: string;
  organizationId: string;
  leadId?: string;
  customerId?: string;
  createdById: string;
  referenceNumber: string;
  title: string;
  status: QuotationStatus;
  destinationName?: string;
  startDate?: Date;
  endDate?: Date;
  duration?: number;
  numTravelers?: number;
  currency: CurrencyCode;
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  totalPrice: number;
  perPersonPrice: number;
  depositAmount: number;
  balanceDue: number;
  costPrice: number;
  margin: number;
  marginPercent: number;
  commissionAmount: number;
  viewedAt?: Date;
  acceptedAt?: Date;
  rejectedAt?: Date;
  expiresAt?: Date;
  notes?: string;
  terms?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Itinerary {
  id: string;
  organizationId: string;
  quotationId?: string;
  customerId?: string;
  title: string;
  description?: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  numTravelers: number;
  status: string;
  visibility: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Booking {
  id: string;
  organizationId: string;
  quotationId?: string;
  customerId?: string;
  operationsManagerId?: string;
  referenceNumber: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  numTravelers: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  currency: CurrencyCode;
  totalPrice: number;
  costPrice: number;
  margin: number;
  depositAmount: number;
  balanceDue: number;
  paidAmount: number;
  dueDate?: Date;
  notes?: string;
  confirmationSent: boolean;
  confirmationSentAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Invoice {
  id: string;
  organizationId: string;
  bookingId?: string;
  customerId?: string;
  invoiceNumber: string;
  issueDate: Date;
  dueDate: Date;
  currency: CurrencyCode;
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  status: PaymentStatus;
  paidAmount: number;
  balanceDue: number;
  notes?: string;
  terms?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  organizationId: string;
  bookingId?: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: string;
  dueDate?: Date;
  assignedUserId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Session / Auth
export interface SessionUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  organizationId: string;
  avatar?: string;
}
