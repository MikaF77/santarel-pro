'use client';

import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  image: string;
  prix: string;
  description: string;
  details: string[];
  ingredients: string;
};

export default function PartenaireProductPage({ title, image, prix, description, details, ingredients }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
      <Link href="/partenaires" className="text-sm text-blue-600 hover:underline">← Retour aux offres</Link>
      <div className="grid md:grid-cols-2 gap-8">
        <Image src={image} alt={title} width={500} height={500} className="rounded shadow" />
        <div>
          <h1 className="text-2xl font-bold text-[#794082] mb-4">{title}</h1>
          <p className="text-gray-700 text-sm mb-4">{description}</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            {details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
          <p className="text-lg text-green-700 mt-6 font-semibold">{prix}</p>
        </div>
      </div>

      <div className="bg-[#f9f9f9] p-6 rounded border text-sm text-gray-700">
        <h2 className="font-semibold text-[#794082] mb-2">Ingrédients :</h2>
        <p>{ingredients}</p>
      </div>
    </div>
  );
}
