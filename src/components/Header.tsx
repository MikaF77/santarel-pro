'use client';

import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      sessionStorage.removeItem("fakeUser"); // Nettoyage si en mode démo
      await Auth.signOut({ global: true });
      router.push('/');
    } catch (err) {
      console.error('Erreur déconnexion', err);
    }
  };

  return (
    <header className="bg-white border-b shadow-sm">
      {/* Barre supérieure avec horaires */}
      <div className="bg-[#794082] text-white text-sm py-2 px-6 text-center">
        Lundi – Vendredi : 9h00 – 17h30 · Support téléphone & email
      </div>

      {/* Ligne du haut : logo + titre + utilisateur + recherche */}
      <div className="flex items-center justify-between px-6 py-4 gap-6">
        {/* Logo + titre */}
        <div className="flex items-center gap-4">
          <a href="/dashboard" className="flex items-center gap-3">
            <Image
              src="/logo-santarel.svg"
              alt="Logo Santarel"
              width={64}
              height={64}
              priority
            />
            <span className="text-[#794082] font-bold text-lg">
              Espace professionnel du laboratoire Santarel
            </span>
          </a>
        </div>

        {/* Barre de recherche */}
        <form
          action="/recherche"
          method="GET"
          className="hidden md:flex items-center gap-2 bg-[#f3f0f4] rounded px-3 py-2"
        >
          <input
            type="text"
            name="q"
            placeholder="Rechercher..."
            className="text-sm bg-transparent focus:outline-none text-[#575756] placeholder-gray-400"
          />
        </form>

        {/* Menu utilisateur */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="text-sm text-[#794082] font-semibold hover:underline"
          >
            Mon compte ⌄
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow text-sm z-50">
              <a
                href="/mon-compte"
                className="block px-4 py-2 hover:bg-gray-100 text-[#794082]"
              >
                Mon profil
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Se déconnecter
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Menu secondaire centré et en gras */}
      <nav className="bg-[#f9f9f9] border-t px-6 py-2">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#794082]">
          <a href="/produits" className="font-semibold hover:underline">LES PRODUITS</a>
          <a href="/formation" className="font-semibold hover:underline">LE LABO</a>
          <a href="/activite" className="font-semibold hover:underline">VOS OUTILS</a>
          <a href="/patients" className="font-semibold hover:underline">SUIVI CONSULTANTS</a>
          <a href="/partenaires" className="font-semibold hover:underline">AVANTAGES PARTENAIRES</a>
        </div>
      </nav>
    </header>
  );
}
