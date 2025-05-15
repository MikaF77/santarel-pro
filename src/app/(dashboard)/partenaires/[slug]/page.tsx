// src/app/(dashboard)/partenaires/[slug]/page.tsx

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
  {
    slug: 'cc-cream',
    title: 'CC Cream',
    image: '/partenaires/cccream.jpg',
    prix: '19,80 € (au lieu de 22,00 €)',
    description: 'Crème teintée effet bonne mine immédiat, soin et correction en un geste.',
    details: [
      'Teinte universelle adaptée',
      'Texture légère et non grasse',
      'Action hydratante et anti-rougeurs',
    ],
    ingredients: `Aqua, Glycerin, Titanium Dioxide, Cera Alba*, Helianthus Annuus Seed Oil*, CI 77491, Parfum...`,
  },
];

// ✅ Génère les pages statiques au build
export async function generateStaticParams() {
  return produits.map((p) => ({ slug: p.slug }));
}

// ✅ Page dynamique, sans typage explicite
export default function Page({ params }: { params: { slug: string } }) {
  const produit = produits.find((p) => p.slug === params.slug);
  if (!produit) return notFound();

  return <PartenaireProductPage {...produit} />;
}
