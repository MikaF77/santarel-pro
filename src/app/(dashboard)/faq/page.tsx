'use client';

import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Qui peut accéder à l’espace professionnel ?",
    answer:
      "L’espace est réservé aux praticiens de santé partenaires du Laboratoire Santarel. Si vous êtes professionnel et souhaitez rejoindre le programme, contactez-nous via le formulaire.",
  },
  {
    question: "Comment créer un compte professionnel ?",
    answer:
      "Cliquez sur « Inscription » sur la page d’accueil et remplissez le formulaire. L’équipe Santarel validera votre accès sous 24 à 48h.",
  },
  {
    question: "J’ai oublié mon mot de passe, que faire ?",
    answer:
      "Sur la page de connexion, cliquez sur « Mot de passe oublié » pour recevoir un lien de réinitialisation par email.",
  },
  {
    question: "Puis-je recommander Santarel à un confrère ?",
    answer:
      "Oui ! Notre programme de parrainage vous permet de bénéficier d’avantages si vous recommandez un confrère. Consultez la page « Avantages Partenaires » pour en savoir plus.",
  },
  {
    question: "Comment suivre mes commandes et factures ?",
    answer:
      "Depuis l’onglet « Vos Outils », vous avez accès à l’historique de vos mouvements de compte, commandes et documents administratifs.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageLayout main>
      <div className="max-w-4xl mx-auto px-6 py-16 text-[#575756]">
        <h1 className="text-3xl font-bold text-[#794082] mb-10">FAQ – Foire Aux Questions</h1>

        {/* Champ de recherche */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Rechercher une question..."
            className="w-full border border-gray-300 rounded px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#794082]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
        </div>

        {/* Liste FAQ filtrée */}
        <div className="space-y-6">
          {filteredFaqs.length === 0 ? (
            <p className="text-center text-sm text-gray-500">Aucune question ne correspond à votre recherche.</p>
          ) : (
            filteredFaqs.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-md shadow-sm overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-4 py-4 bg-[#f3f0f4] text-left font-semibold text-[#794082] focus:outline-none"
                >
                  {item.question}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`transition-max-height duration-300 ease-in-out px-4 overflow-hidden ${
                    openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-[#575756]">{item.answer}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </PageLayout>
  );
}
