// src/app/layout.tsx
import './globals.css';
import Header from '@/components/Header';
import AmplifyProvider from '@/components/AmplifyProvider';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900">
        <AmplifyProvider>
          {children}
        </AmplifyProvider>
        <Footer />
      </body>
    </html>
  );
}