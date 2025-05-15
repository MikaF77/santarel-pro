// src/components/DashboardLayout.tsx
'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoginPage && <Header />}
      {children}
    </div>
  );
}
