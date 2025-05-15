'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

const produits = [
  { id: 'omega3', name: 'Omega 3 Santarel', description: 'Acides gras essentiels haute pureté.' },
  { id: 'collagene', name: 'Collagène+ Marine', description: 'Beauté de la peau et souplesse articulaire.' },
  { id: 'detoxirel', name: 'Detoxirel', description: 'Formule détox foie à base de plantes et vitamine B8.' },
];

const faqs = [
  { question: 'Comment créer un compte professionnel ?', href: '/faq#1' },
  { question: 'J’ai oublié mon mot de passe, que faire ?', href: '/faq#2' },
  { question: 'Puis-je recommander Santarel à un confrère ?', href: '/faq#3' },
  { question: 'Comment suivre mes commandes et factures ?', href: '/faq#4' },
];

export default function SearchPage() {
  const params = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState('');

  const fuseProduits = useMemo(() => new Fuse(produits, { keys: ['name', 'description'], threshold: 0.4 }), []);
  const fuseFaqs = useMemo(() => new Fuse(faqs, { keys: ['question'], threshold: 0.4 }), []);

  const [resultatsProduits, setProduits] = useState<any[]>([]);
  const [resultatsFaqs, setFaqs] = useState<any[]>([]);

  useEffect(() => {
    const q = params.get('q') || '';
    setQuery(q);
  }, [params]);

  useEffect(() => {
    if (!query.trim()) {
      setProduits([]);
      setFaqs([]);
      return;
    }
    setProduits(fuseProduits.search(query).map((r) => r.item));
    setFaqs(fuseFaqs.search(query).map((r) => r.item));
  }, [query, fuseProduits, fuseFaqs]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/recherche?q=${encodeURIComponent(query)}`);
  };

  return (
    <PageLayout main className="max-w-4xl mx-auto px-6 py-16 text-[#575756]">
      <h1 className="text-2xl font-bold text-[#794082] mb-6">Recherche</h1>

      <form onSubmit={handleSubmit} className="mb-10">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un produit ou une question..."
          className="w-full p-3 border border-gray-300 rounded focus:outline-[#794082]"
        />
      </form>

      {/* Produits */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#794082] mb-3">Produits</h2>
        {resultatsProduits.length > 0 ? (
          <ul className="space-y-2">
            {resultatsProduits.map((p) => (
              <li key={p.id}>
                <Link href={`/produits/${p.id}`} className="text-[#575756] hover:underline">
                  <strong>{p.name}</strong> – {p.description}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">Aucun produit ne correspond.</p>
        )}
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-xl font-semibold text-[#794082] mb-3">FAQ</h2>
        {resultatsFaqs.length > 0 ? (
          <ul className="space-y-2">
            {resultatsFaqs.map((f, i) => (
              <li key={i}>
                <Link href={f.href} className="text-[#575756] hover:underline">
                  {f.question}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">Aucune question ne correspond.</p>
        )}
      </section>
    </PageLayout>
  );
}
