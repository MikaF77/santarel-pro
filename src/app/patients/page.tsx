'use client';

import PageLayout from '@/components/PageLayout';

export default function PatientsPage() {
  return (
    <PageLayout title="Mes patients">
      <p className="text-sm text-gray-600 mb-4">
        Vous retrouverez ici la liste des patients que vous suivez, avec leur historique de commande et d’accompagnement.
      </p>

      {/* tableau fictif */}
      <table className="w-full text-sm text-left border">
        <thead className="bg-[#f3f0f4] text-[#794082]">
          <tr>
            <th className="py-2 px-4">Nom</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Téléphone</th>
            <th className="py-2 px-4">Dernière commande</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-4">Claire Dupont</td>
            <td className="py-2 px-4">claire@email.com</td>
            <td className="py-2 px-4">06 12 34 56 78</td>
            <td className="py-2 px-4">18/04/2025</td>
          </tr>
        </tbody>
      </table>
    </PageLayout>
  );
}
