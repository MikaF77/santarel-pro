// src/app/partenaires/[slug]/page.tsx
import { notFound } from 'next/navigation';
import PartenaireProductPage from '@/components/PartenaireProductPage';

const produits = [
  {
    slug: 'elixir',
    title: 'Élixir Éclat Sublime',
    image: '/partenaires/elixir.jpg',
    prix: '26,10 € au lieu de 29,00 €',
    description: `Cet élixir permet de lutter contre les marques de fatigue et de stress.`,
    details: [
      '40 % d’extrait de potimarron bio',
      'Effet régénérant & repulpant',
      'Teint sublimé et éclatant',
    ],
    ingredients: `Helianthus Annuus Seed Oil*, Coco-Caprylate, Prunus Amygdalus Dulcis Oil*, Cucurbita Maxima Extract*, Tocopherol, Citrus Reticulata Peel Oil*...`
  },
  // Ajoute d'autres produits ici
];

export default function PartenaireProductPageWrapper({ params }: { params: { slug: string } }) {
  const produit = produits.find((p) => p.slug === params.slug);
  if (!produit) return notFound();

  return <PartenaireProductPage {...produit} />;
}
