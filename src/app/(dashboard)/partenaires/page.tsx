'use client';

import PageLayout from '@/components/PageLayout';
import PartenaireCard from '@/components/PartenaireCard';
import Image from 'next/image';

export default function PartenairesPage() {
  return (
    <PageLayout title="Offres Partenaires">
      <p className="text-sm text-gray-700 mb-6">
        En tant que praticien partenaire Santarel, vous bénéficiez d’un accès privilégié à des produits et services sélectionnés pour leur efficacité, leur qualité et leur éthique.
        Ces offres sont exclusivement accessibles par téléphone au <strong>02 78 98 50 00</strong> ou via votre interface pro.
      </p>

      {/* Navigation par logos partenaires */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        <a href="#pumpskin" className="flex items-center hover:opacity-80 transition">
          <Image src="/partenaires/pumpskin-logo.png" alt="Pump&#39;Skin" width={120} height={40} />
        </a>
        <a href="#lbe" className="flex items-center hover:opacity-80 transition">
          <Image src="/partenaires/lbe-logo.png" alt="LBE" width={120} height={40} />
        </a>
        <a href="#quintessence" className="flex items-center hover:opacity-80 transition">
          <Image src="/partenaires/quintessence-logo.png" alt="Quintessence" width={120} height={40} />
        </a>
      </div>

      {/* PUMP’SKIN */}
      <section id="pumpskin" className="mb-12">
        <h2 className="text-xl font-semibold text-[#794082] mb-4">Pump&#39;Skin – Cosmétiques naturels signés Dr. ERAUD</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <Image
              src="/partenaires/pumpskin.jpg"
              alt="Pump&#39;Skin"
              width={600}
              height={400}
              className="rounded shadow"
            />
          </div>
          <div className="text-sm text-gray-700 space-y-4">
            <p>
              Née de la collaboration entre <strong>Dr Dominique Eraud</strong> et <strong>Dr Philippe Desbrosses</strong>, la gamme Pump&#39;Skin repose sur les bienfaits du potimarron : riche en antioxydants, caroténoïdes, vitamines et oligo-éléments.
            </p>
            <p>
              Leurs produits offrent des effets régénérants, protecteurs et un pouvoir anti-âge remarquable. Toute la gamme est fabriquée en France et formulée selon une démarche bio, naturelle et sensorielle.
            </p>
            <p className="text-[#794082] font-medium">💜 Remise Santarel : -10 % sur tous les soins cosmétiques</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PartenaireCard
            image="/partenaires/elixir.jpg"
            title="Élixir Éclat Sublime"
            description="Hydratation, éclat, anti-stress – potimarron bio 40%"
            prix="26,10 € (au lieu de 29,00 €)"
            lien="/partenaires/elixir"
          />
          <PartenaireCard
            image="/partenaires/cccream.jpg"
            title="CC Cream"
            description="Effet bonne mine immédiat – texture légère"
            prix="19,80 € (au lieu de 22,00 €)"
            lien="/partenaires/cc-cream"
          />
        </div>
      </section>

      {/* LBE - Roll-on bien-être */}
      <section id="lbe" className="mb-12">
        <h2 className="text-xl font-semibold text-[#794082] mb-4">LBE – Roll-ons d’aromathérapie & pierres naturelles</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="text-sm text-gray-700 space-y-4">
            <p>
              Ces roll-ons uniques associent huiles essentielles biologiques et pierres semi-précieuses pour une action énergétique et olfactive ciblée. Fabriqués en France, sans parfum de synthèse, ni conservateur chimique.
            </p>
            <p>
              Chaque flacon cible un besoin : <em>Relaxation, Détox, Confiance, Méditation, Bonne humeur…</em> À appliquer sur les poignets, le plexus ou en inhalation.
            </p>
            <p className="text-[#794082] font-medium">💜 Prix partenaire : 22,50 € (au lieu de 25,00 €)</p>
          </div>
          <div>
            <Image
              src="/partenaires/lbe.jpg"
              alt="Roll-ons LBE"
              width={600}
              height={400}
              className="rounded shadow"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PartenaireCard
            image="/partenaires/amethyste.jpg"
            title="Roll-on Améthyste"
            description="Relaxant, anti-stress – pierres naturelles"
            prix="22,50 €"
            lien="/partenaires/rollon-amethyste"
          />
        </div>
      </section>

      {/* Quintessence – Gemmo’Pocket */}
      <section id="quintessence" className="mb-12">
        <h2 className="text-xl font-semibold text-[#794082] mb-4">Quintessence – Outils pédagogiques en gemmothérapie</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <Image
              src="/partenaires/gemmopocket.jpg"
              alt="Gemmo'Pocket"
              width={600}
              height={400}
              className="rounded shadow"
            />
          </div>
          <div className="text-sm text-gray-700 space-y-4">
            <p>
              Le <strong>Gemmo’Pocket</strong> est un outil pratique et visuel pour accompagner vos patients dans leur usage de la gemmothérapie. Regroupe les propriétés des bourgeons par thématique.
            </p>
            <p>
              Format dépliant « de poche », clair et synthétique. Existe aussi en version cartes : <strong>La voix des bourgeons (54 cartes)</strong>.
            </p>
            <p className="text-[#794082] font-medium">💜 Prix spécial Santarel : 18 € et 39 € selon format</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PartenaireCard
            image="/partenaires/gemmopocket.jpg"
            title="Gemmo’Pocket"
            description="Dépliant pédagogique en gemmothérapie"
            prix="18 €"
            lien="/partenaires/gemmopocket"
          />
          <PartenaireCard
            image="/partenaires/54cartes.jpg"
            title="La voix des bourgeons"
            description="54 cartes thématiques avec livret explicatif"
            prix="39 €"
            lien="/partenaires/54-cartes"
          />
        </div>
      </section>

      {/* Bloc contact commande */}
      <div className="bg-[#f3f0f4] text-center py-6 rounded mb-6">
        <h3 className="text-xl font-semibold text-[#794082] mb-2">Besoin d’aide ou envie de commander ?</h3>
        <p className="text-sm text-gray-700">Contactez-nous directement au <strong>02 78 98 50 00</strong> ou par email.</p>
      </div>
    </PageLayout>
  );
}
