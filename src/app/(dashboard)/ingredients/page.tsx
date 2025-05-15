'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

export default function IndexIngredientsPage() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const { data, error } = await supabase
        .from('formules')
        .select('ingredient')
        .neq('type', 'enveloppe') // optionnel : exclure certains types
        .order('ingredient', { ascending: true });

      if (error) {
        console.error('Erreur chargement ingrédients:', error);
        return;
      }

      const nomsUniques = Array.from(new Set(data.map((f) => f.ingredient))).sort();
      setIngredients(nomsUniques);
    };

    fetchIngredients();
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-[#794082] mb-6">Index des ingrédients</h1>

      <ul className="space-y-2">
        {ingredients.map((nom) => (
          <li key={nom}>
            <Link
              href={`/outils/ingredients/${encodeURIComponent(nom.toLowerCase().replace(/\s+/g, '-'))}`}
              className="text-[#794082] hover:underline"
            >
              {nom}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
