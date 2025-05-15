// src/app/dashboard/layout.tsx
'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { ReactNode } from 'react';

export default function DashboardLayoutWrapper({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
