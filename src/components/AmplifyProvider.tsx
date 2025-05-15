'use client';

import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { ReactNode } from 'react';

let configured = false;
if (!configured) {
  console.log('[AmplifyProvider] Initialisation…');
  Amplify.configure({
    ...awsconfig,
    Auth: {
      ...awsconfig.Auth,
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    },
  });
  configured = true;
  console.log('[AmplifyProvider] ✅ Amplify configuré avec succès.');
}

export default function AmplifyProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
