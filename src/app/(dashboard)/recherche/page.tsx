import { Suspense } from 'react';
import SearchClient from './SearchClient';

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-gray-500">Chargement de la recherche…</div>}>
      <SearchClient />
    </Suspense>
  );
}
