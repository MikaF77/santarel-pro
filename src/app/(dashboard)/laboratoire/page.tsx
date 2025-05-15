export const metadata = {
  title: "Le Labo – Laboratoire Santarel",
  description: "Présentation du laboratoire Santarel pour les praticiens de santé partenaires",
};

export default function LeLaboPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#794082] mb-6">Le laboratoire Santarel</h1>

      <section className="mb-10">
        <p className="text-lg mb-4">
          Bienvenue dans l&#39;espace professionnel dédié aux praticiens de santé partenaires du Laboratoire Santarel.
          Notre mission est de vous accompagner au quotidien dans la prise en charge naturelle et individualisée de vos consultants.
        </p>
        <p className="text-lg">
          Fondé par des professionnels de santé passionnés de phytothérapie, notre laboratoire conçoit des compléments alimentaires
          fondés sur des données scientifiques solides, une formulation exigeante et un circuit de distribution dédié aux praticiens.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#794082] mb-3">Notre approche</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Une sélection rigoureuse des ingrédients actifs, d&#39;origine naturelle.</li>
          <li>Des formules validées par des experts et adaptées aux besoins du terrain.</li>
          <li>Une traçabilité complète, du sourcing à la livraison au patient.</li>
          <li>Un service client dédié aux professionnels de santé.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#794082] mb-3">Ce que nous vous proposons</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Un espace professionnel sécurisé pour passer vos commandes, suivre vos patients, et consulter vos statistiques.</li>
          <li>Des webinaires et formations exclusives pour approfondir vos connaissances et renforcer votre expertise.</li>
          <li>Un accompagnement personnalisé pour développer votre activité en toute indépendance.</li>
          <li>Des supports pédagogiques et des outils adaptés à la consultation en cabinet.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#794082] mb-3">Une relation de confiance</h2>
        <p className="text-lg">
          Chez Santarel, nous croyons à la transparence, à la rigueur et à la co-construction. Nous travaillons main dans la main avec
          les praticiens de santé pour bâtir une offre pertinente, moderne et respectueuse de vos valeurs.
        </p>
      </section>
    </main>
  );
}
