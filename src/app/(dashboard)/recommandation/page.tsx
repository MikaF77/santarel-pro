'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Produit = {
  id: string;
  nom: string;
  posologie: string | null;
};

type ProduitRecommande = {
  produit: Produit;
  posologie: string;
};

export default function RecommandationPage() {
  const [produits, setProduits] = useState<Produit[]>([]);
  const [recommandation, setRecommandation] = useState<ProduitRecommande[]>([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduits = async () => {
      const { data, error } = await supabase
        .from('produits')
        .select('id, nom, posologie')
        .order('nom', { ascending: true });

      if (error) console.error('Erreur chargement produits:', error);
      else setProduits(data || []);
    };

    fetchProduits();
  }, []);

  const ajouterProduit = (produit: Produit) => {
    if (recommandation.find((r) => r.produit.id === produit.id)) return;
    setRecommandation([
      ...recommandation,
      { produit, posologie: produit.posologie || '' },
    ]);
  };

  const modifierPosologie = (id: string, posologie: string) => {
    setRecommandation((r) =>
      r.map((item) =>
        item.produit.id === id ? { ...item, posologie } : item
      )
    );
  };

  const supprimerProduit = (id: string) => {
    setRecommandation((r) => r.filter((item) => item.produit.id !== id));
  };

  const envoyerRecommandation = async () => {
    if (!email || !recommandation.length) {
      setMessage("Merci d'ajouter au moins un produit et un email.");
      return;
    }

    // 🔧 À adapter avec envoi email réel
    const payload = {
      email,
      recommandation: recommandation.map((r) => ({
        nom: r.produit.nom,
        posologie: r.posologie,
      })),
    };

    console.log('Recommandation à envoyer :', payload);
    setMessage('Recommandation envoyée (simulation).');
    setRecommandation([]);
    setEmail('');
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-[#794082] mb-6">Créer une recommandation</h1>

      {/* Liste des produits */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Produits disponibles</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {produits.map((p) => (
            <li key={p.id} className="border rounded px-3 py-2 text-sm flex items-center justify-between bg-[#f9f9f9]">
              <span>{p.nom}</span>
              <button
                onClick={() => ajouterProduit(p)}
                className="text-xs bg-[#794082] text-white px-2 py-1 rounded hover:bg-[#5f3369]"
              >
                Ajouter
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Liste recommandée */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Recommandation</h2>
        {recommandation.length === 0 && <p className="text-sm text-gray-500">Aucun produit ajouté.</p>}
        <ul className="space-y-4">
          {recommandation.map((r) => (
            <li key={r.produit.id} className="bg-white border p-4 rounded shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-[#794082]">{r.produit.nom}</span>
                <button
                  onClick={() => supprimerProduit(r.produit.id)}
                  className="text-red-600 text-xs hover:underline"
                >
                  Supprimer
                </button>
              </div>
              <label className="block text-sm text-gray-600 mb-1">Posologie recommandée</label>
              <input
                type="text"
                value={r.posologie}
                onChange={(e) => modifierPosologie(r.produit.id, e.target.value)}
                className="w-full px-3 py-2 border rounded text-sm"
                placeholder="Ex: 2 gélules matin et soir"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Email client */}
      <section className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">Email du client</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-1/2 px-3 py-2 border rounded text-sm"
          placeholder="exemple@client.com"
        />
      </section>

      {/* Bouton envoyer */}
      <button
        onClick={envoyerRecommandation}
        className="bg-[#794082] text-white px-6 py-2 rounded hover:bg-[#5f3369] text-sm"
      >
        Envoyer la recommandation
      </button>

      {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
    </main>
  );
}
