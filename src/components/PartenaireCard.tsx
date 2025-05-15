'use client';

import Image from 'next/image';
import Link from 'next/link';

type Props = {
  image: string;
  title: string;
  description: string;
  prix: string;
  lien?: string;
};

export default function PartenaireCard({ image, title, description, prix, lien }: Props) {
  const content = (
    <div className="border rounded-lg shadow hover:shadow-md bg-white p-4 transition-all duration-300 cursor-pointer hover:scale-[1.01]">
      <div className="relative h-40 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded"
        />
      </div>
      <h3 className="font-semibold text-[#794082] text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-3">{description}</p>
      <p className="text-sm text-green-700 font-medium">{prix}</p>
    </div>
  );

  return lien ? <Link href={lien}>{content}</Link> : content;
}
