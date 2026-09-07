// lib/utils/validation.ts - Validation helpers

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[0-9\-\+\(\)\s]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

export const validatePassport = (passport: string): boolean => {
  return passport.length >= 3 && passport.length <= 20;
};

export const validateURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateDateRange = (startDate: Date, endDate: Date): boolean => {
  return startDate < endDate;
};

export const validateBudget = (budget: number): boolean => {
  return budget > 0;
};

export const validateNumTravelers = (num: number): boolean => {
  return num > 0 && num <= 100;
};

export const errorMessages = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  INVALID_URL: 'Please enter a valid URL',
  INVALID_DATE_RANGE: 'End date must be after start date',
  INVALID_BUDGET: 'Budget must be greater than 0',
  INVALID_NUM_TRAVELERS: 'Number of travelers must be between 1 and 100',
  UNAUTHORIZED: 'You do not have permission to access this resource',
  NOT_FOUND: 'The requested resource was not found',
  INTERNAL_ERROR: 'An unexpected error occurred',
  DUPLICATE_EMAIL: 'This email is already in use',
};

export class ValidationError extends Error {
  constructor(public field: string, message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
