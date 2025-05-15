'use client';

import PageLayout from '@/components/PageLayout';

export default function PartenairesPage() {
  return (
    <PageLayout title="Offres partenaires">
      <p className="text-sm text-gray-600 mb-4">
        Découvrez ici les services privilégiés, remises et avantages négociés pour vous en tant que praticien partenaire Santarel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Partenaire 1 */}
        <div className="bg-[#f9f9f9] border rounded p-5 shadow-sm space-y-2">
          <h2 className="text-lg font-semibold text-[#794082]">Service de téléconsultation Doctovia</h2>
          <p className="text-sm text-gray-700">
            Bénéficiez d’un accès prioritaire à une plateforme sécurisée de téléconsultation, avec support patient intégré.
          </p>
          <p className="text-sm text-gray-500">Remise spéciale Santarel : -20% sur l’abonnement annuel</p>
          <a
            href="https://doctovia.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            En savoir plus
          </a>
        </div>

        {/* Partenaire 2 */}
        <div className="bg-[#f9f9f9] border rounded p-5 shadow-sm space-y-2">
          <h2 className="text-lg font-semibold text-[#794082]">Comptabilité Pro avec NUMEO</h2>
          <p className="text-sm text-gray-700">
            Gestion comptable pour professions libérales avec accompagnement fiscal personnalisé.
          </p>
          <p className="text-sm text-gray-500">Tarif préférentiel : 35 € / mois (au lieu de 49 €)</p>
          <a
            href="https://numeo.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            Découvrir NUMEO
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
