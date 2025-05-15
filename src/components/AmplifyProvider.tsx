// src/components/AmplifyProvider.tsx

'use client';

import { ReactNode } from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

// Configure Amplify AVANT tout appel à Auth
Amplify.configure(awsconfig);

export default function AmplifyProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
