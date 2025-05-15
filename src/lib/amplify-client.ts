// src/lib/amplify-client.ts
'use client';  // IMPORTANT pour l’exécution côté client

import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure({
  ...awsconfig,
  // si vous faites du SSR, vous pouvez ajouter ssr: true
  // ssr: true,
});
