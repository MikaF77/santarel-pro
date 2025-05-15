'use client';

import PageLayout from '@/components/PageLayout';

export default function ProduitsPage() {
  return (
    <PageLayout title="Les produits Santarel">
      <p className="text-sm text-gray-600">
        Voici la liste des produits disponibles avec leurs conditions professionnelles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Glycérel */}
        <div className="border rounded shadow-sm p-4 bg-[#f9f9f9]">
          <h2 className="font-semibold text-[#794082] text-lg mb-2">Glycérel</h2>
          <p className="text-sm text-gray-700 mb-2">
            Formule exclusive à base de mûrier blanc, coenzyme Q10 et chrome.
          </p>
          <p className="text-sm text-gray-500">Conditionnement : 60 gélules</p>
          <p className="text-sm text-gray-500">Prix pro : 11,40 € HT</p>
        </div>

        {/* Collagène+ */}
        <div className="border rounded shadow-sm p-4 bg-[#f9f9f9]">
          <h2 className="font-semibold text-[#794082] text-lg mb-2">Collagène+</h2>
          <p className="text-sm text-gray-700 mb-2">
            Peptides marins Naticol®, acérola et bambou pour la peau, les articulations et les tissus conjonctifs.
          </p>
          <p className="text-sm text-gray-500">Conditionnement : Poudre 500 g</p>
          <p className="text-sm text-gray-500">Prix pro : 23,80 € HT</p>
        </div>

        {/* Bromelaine+ */}
        <div className="border rounded shadow-sm p-4 bg-[#f9f9f9]">
          <h2 className="font-semibold text-[#794082] text-lg mb-2">Bromelaine+</h2>
          <p className="text-sm text-gray-700 mb-2">
            Enzyme extraite de l’ananas (5000 GDU) – soutien digestif et articulaire.
          </p>
          <p className="text-sm text-gray-500">Conditionnement : 90 gélules</p>
          <p className="text-sm text-gray-500">Prix pro : 16,90 € HT</p>
        </div>
      </div>
    </PageLayout>
  );
}
