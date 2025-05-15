'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

type Produit = {
  id: string;
  nom: string;
  fonction: string | null;
  conditionnement: string | null;
  prix: number | null;
  url_image: string | null;
};

export default function ProduitsPage() {
  const [produits, setProduits] = useState<Produit[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'alpha'>('alpha');

  useEffect(() => {
    const fetchProduits = async () => {
      const { data, error } = await supabase
        .from('produits')
        .select('id, nom, fonction, conditionnement, prix, url_image, slug')
        .order('nom', { ascending: true });

      if (error) {
        console.error('Erreur chargement produits:', error.message);
      } else {
        setProduits(data || []);
      }
    };

    fetchProduits();
  }, []);

  const produitsFiltres = produits
    .filter((p) => p.nom.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      switch (sortOrder) {
        case 'asc':
          return (a.prix ?? 0) - (b.prix ?? 0);
        case 'desc':
          return (b.prix ?? 0) - (a.prix ?? 0);
        case 'alpha':
        default:
          return a.nom.localeCompare(b.nom);
      }
    });

  return (
    <PageLayout title="Les produits Santarel">
      <p className="text-sm text-gray-600 mb-4">
        Voici la liste des produits disponibles avec leurs conditions professionnelles.
      </p>

      {/* Recherche + tri */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="w-full sm:w-1/2 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#794082]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-gray-700">Trier :</label>
          <select
            id="sort"
            className="px-3 py-1 border rounded text-sm"
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as 'asc' | 'desc' | 'alpha')
            }
          >
            <option value="asc">Prix croissant</option>
            <option value="desc">Prix décroissant</option>
            <option value="alpha">Ordre alphabétique</option>
          </select>
        </div>
      </div>

      {/* Grille des produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produitsFiltres.length > 0 ? (
          produitsFiltres.map((p) => (
            <div key={p.id} className="border rounded shadow-sm p-4 bg-[#f9f9f9] flex flex-col">
              {p.url_image && (
                <Image
                  src={p.url_image || '/images/placeholder.jpg'}
                  alt={`Image du produit ${p.nom}`}
                  width={300}
                  height={200}
                  className="rounded mb-3 object-cover w-full h-[180px]"
                />
              )}

              <h2 className="font-semibold text-[#794082] text-lg mb-1">{p.nom}</h2>

              <p className="text-sm text-gray-600 italic mb-2">
                {p.fonction || 'Fonction non renseignée'}
              </p>

              <p className="text-sm text-gray-500 mb-1">
                Conditionnement : {p.conditionnement || '—'}
              </p>

              {p.prix !== null ? (
                <p className="text-xl font-bold text-[#794082] mb-4">
                  {p.prix.toFixed(2)} € TTC
                </p>
              ) : (
                <p className="text-sm text-gray-400 mb-4">Prix non renseigné</p>
              )}

              <a
                href={`/produits/${p.slug}`}
                className="mt-auto inline-block px-4 py-2 bg-[#794082] text-white rounded hover:bg-[#5c2e65] transition"
              >
                Voir la fiche
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">Aucun produit ne correspond à votre recherche.</p>
        )}
      </div>
    </PageLayout>
  );
}
