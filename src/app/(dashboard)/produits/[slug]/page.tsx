// app/produits/[slug]/page.tsx
import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

export default async function ProduitPage({ params }: { params: { slug: string } }) {
  const { data, error } = await supabase
    .from('produits')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (error || !data) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-[#794082] mb-4">{data.nom}</h1>
      <p className="text-gray-600 italic mb-2">{data.fonction}</p>
      <p className="text-gray-700 mb-2">Conditionnement : {data.conditionnement}</p>
      <p className="text-xl font-semibold text-[#794082]">{data.prix.toFixed(2)} € TTC</p>
      {data.url_image && (
        <img
          src={data.url_image}
          alt={data.nom}
          className="mt-6 rounded shadow max-h-[400px]"
        />
      )}
    </div>
  );
}
