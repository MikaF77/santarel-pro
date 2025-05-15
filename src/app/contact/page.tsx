'use client';

import PageLayout from '@/components/PageLayout';

export default function ContactPage() {
  return (
    <PageLayout title="Contact">
      <p className="text-sm text-gray-600 mb-4">
        Pour toute question, demande de support ou accompagnement, vous pouvez contacter votre interlocuteur dédié ou remplir le formulaire ci-dessous.
      </p>

      {/* Coordonnées */}
      <div className="bg-[#f9f9f9] border rounded p-4 text-sm text-gray-700 space-y-1">
        <p><strong>📧 Email :</strong> contact@santarel.fr</p>
        <p><strong>📞 Téléphone :</strong> 02 78 98 5000</p>
        <p><strong>🏢 Adresse :</strong> 12 rue des Phytoactifs, 27000 Évreux</p>
      </div>

      {/* Formulaire de contact */}
      <form className="space-y-4 mt-6">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Nom</label>
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-3 border rounded border-gray-300 focus:outline-[#794082]"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-3 border rounded border-gray-300 focus:outline-[#794082]"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Message</label>
          <textarea
            rows={4}
            placeholder="Votre message"
            className="w-full p-3 border rounded border-gray-300 focus:outline-[#794082]"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#794082] text-white px-6 py-3 rounded hover:bg-[#66336e] transition"
        >
          Envoyer le message
        </button>
      </form>
    </PageLayout>
  );
}
