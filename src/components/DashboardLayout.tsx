'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublicPage = pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50">
      {!isPublicPage && <Header />}
      <main>{children}</main>
      {!isPublicPage && <Footer />}
    </div>
  );
}
