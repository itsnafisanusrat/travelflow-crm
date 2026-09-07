// app/api/auth/login/route.ts - Login API endpoint

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db/client';
import bcrypt from 'bcryptjs';

const DEMO_USER = {
  email: 'demo@travelflow.com',
  password: 'demo123', // Will be hashed
  firstName: 'Demo',
  lastName: 'User',
  role: 'AGENCY_OWNER' as const,
  organizationId: 'org_demo_1',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // For demo purposes, use demo credentials
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      const token = Buffer.from(`${email}:${Date.now()}`).toString('base64');

      return NextResponse.json({
        success: true,
        token,
        user: {
          id: 'demo_user_1',
          email: DEMO_USER.email,
          firstName: DEMO_USER.firstName,
          lastName: DEMO_USER.lastName,
          role: DEMO_USER.role,
          organizationId: DEMO_USER.organizationId,
        },
      });
    }

    // Try to find user in database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    // Generate token (in production, use JWT)
    const token = Buffer.from(`${user.email}:${Date.now()}`).toString('base64');

    return NextResponse.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        organizationId: user.organizationId,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
