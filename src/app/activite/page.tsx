'use client';

import PageLayout from '@/components/PageLayout';

export default function ActivitePage() {
  return (
    <PageLayout title="Mon activité">
      {/* Résumé rapide */}
      <section className="bg-[#f8f8f8] p-4 rounded border">
        <h2 className="text-lg font-medium text-[#794082] mb-2">Résumé rapide</h2>
        <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
          <li>🧾 5 commandes passées ce mois-ci</li>
          <li>👥 12 patients suivis</li>
          <li>📦 Dernière commande le 18 avril</li>
          <li>📈 Panier moyen : 86,40 €</li>
        </ul>
      </section>

      {/* Dernières commandes */}
      <section className="bg-[#f3f0f4] p-4 rounded border">
        <h2 className="text-lg font-medium text-[#794082] mb-2">Dernières commandes</h2>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b text-[#794082]">
              <th className="py-2">Date</th>
              <th className="py-2">Montant</th>
              <th className="py-2">Client</th>
              <th className="py-2">Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">18/04/2025</td>
              <td>96,50 €</td>
              <td>Claire Dupont</td>
              <td className="text-green-600">Validée</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">12/04/2025</td>
              <td>72,10 €</td>
              <td>Marc Laurent</td>
              <td className="text-green-600">Validée</td>
            </tr>
            <tr>
              <td className="py-2">06/04/2025</td>
              <td>43,30 €</td>
              <td>Alice Maurin</td>
              <td className="text-yellow-600">En attente</td>
            </tr>
          </tbody>
        </table>
      </section>
    </PageLayout>
  );
}
