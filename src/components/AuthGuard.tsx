'use client';

import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Support du mode démo via sessionStorage
        const isFake = sessionStorage.getItem('fakeUser') === 'true';
        if (isFake) {
          console.log('[AuthGuard] Mode démo détecté');
          setLoading(false);
          return;
        }

        // Tentative de récupération de l'utilisateur connecté
        const user = await Auth.currentAuthenticatedUser();
        console.log('[AuthGuard] Utilisateur connecté :', user);
        setLoading(false);
      } catch (err) {
        console.warn('[AuthGuard] Aucune session active. Redirection vers /');
        router.replace('/');
      }
    };

    // Petite temporisation pour laisser le temps à Cognito de restaurer la session
    const timeout = setTimeout(checkAuth, 300);

    return () => clearTimeout(timeout);
  }, [router]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-sm text-gray-500">
        Chargement de votre session...
      </div>
    );
  }

  return <>{children}</>;
}
