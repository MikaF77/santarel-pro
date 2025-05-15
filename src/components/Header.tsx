'use client';

import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const [dropdownUserOpen, setDropdownUserOpen] = useState(false);
  const [dropdownToolsOpen, setDropdownToolsOpen] = useState(false);
  const [dropdownConsultantsOpen, setDropdownConsultantsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const toolsMenuRef = useRef<HTMLDivElement>(null);
  const consultantsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setDropdownUserOpen(false);
      }
      if (toolsMenuRef.current && !toolsMenuRef.current.contains(event.target as Node)) {
        setDropdownToolsOpen(false);
      }
      if (consultantsMenuRef.current && !consultantsMenuRef.current.contains(event.target as Node)) {
        setDropdownConsultantsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await Auth.signOut({ global: true });
      router.push('/');
    } catch (err) {
      console.error('Erreur déconnexion', err);
    }
  };

  return (
    <header className="bg-white border-b shadow-sm relative z-50">
      {/* Barre supérieure avec horaires */}
      <div className="bg-[#794082] text-white text-sm py-2 px-6 text-center">
        Lundi – Vendredi : 9h00 – 17h30 · Support téléphone & email
      </div>

      {/* Ligne du haut */}
      <div className="flex items-center justify-between px-6 py-4 gap-6">
        {/* Logo + titre */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center gap-3">
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
          </Link>
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

        {/* Menu mobile hamburger */}
        <button
          className="md:hidden text-[#794082] font-bold text-xl"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* Menu utilisateur */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => setDropdownUserOpen((prev) => !prev)}
            className="text-sm text-[#794082] font-semibold hover:underline"
          >
            Mon compte ⌄
          </button>

          {dropdownUserOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow text-sm z-50">
              <Link
                href="/mon-compte"
                className="block px-4 py-2 hover:bg-gray-100 text-[#794082]"
                onClick={() => setDropdownUserOpen(false)}
              >
                Mon profil
              </Link>
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

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[120px] left-0 w-full bg-white border-t shadow z-40 px-6 py-4 space-y-2 text-sm text-[#794082]">
          <Link href="/produits" onClick={() => setMobileMenuOpen(false)} className="block font-semibold hover:underline">LES PRODUITS</Link>
          <Link href="/formation" onClick={() => setMobileMenuOpen(false)} className="block font-semibold hover:underline">LE LABO</Link>

          {/* Vos outils */}
          <div>
            <span className="block font-semibold">VOS OUTILS</span>
            <div className="pl-4 space-y-1">
              <Link href="/activite" onClick={() => setMobileMenuOpen(false)} className="block hover:underline">Tableau de bord</Link>
              <Link href="/outils/formations" onClick={() => setMobileMenuOpen(false)} className="block hover:underline">Webinaires / Formations</Link>
            </div>
          </div>

          {/* Suivi consultants */}
          <div>
            <span className="block font-semibold">SUIVI CONSULTANTS</span>
            <div className="pl-4 space-y-1">
              <Link href="/patients" onClick={() => setMobileMenuOpen(false)} className="block hover:underline">Mes consultants</Link>
              <Link href="/patients/activite" onClick={() => setMobileMenuOpen(false)} className="block hover:underline">Mon activité</Link>
            </div>
          </div>

          <Link href="/partenaires" onClick={() => setMobileMenuOpen(false)} className="block font-semibold hover:underline">AVANTAGES PARTENAIRES</Link>
        </div>
      )}

      {/* Menu desktop */}
      <nav className="bg-[#f9f9f9] border-t px-6 py-2 relative hidden md:block">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#794082]">
          <Link href="/produits" className="font-semibold hover:underline">LES PRODUITS</Link>
          <Link href="/formation" className="font-semibold hover:underline">LE LABO</Link>

          {/* Vos outils */}
          <div className="relative" ref={toolsMenuRef}>
            <button
              onClick={() => setDropdownToolsOpen((prev) => !prev)}
              className="font-semibold hover:underline"
            >
              VOS OUTILS ⌄
            </button>
            {dropdownToolsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border rounded shadow z-50 text-left">
                <Link href="/formation" onClick={() => setDropdownToolsOpen(false)} className="block px-4 py-2 text-sm text-[#794082] hover:bg-gray-100">Webinaires / Formations</Link>
              </div>
            )}
          </div>

          {/* Suivi consultants */}
          <div className="relative" ref={consultantsMenuRef}>
            <button
              onClick={() => setDropdownConsultantsOpen((prev) => !prev)}
              className="font-semibold hover:underline"
            >
              SUIVI CONSULTANTS ⌄
            </button>
            {dropdownConsultantsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white border rounded shadow z-50 text-left">
                <Link href="/patients" onClick={() => setDropdownConsultantsOpen(false)} className="block px-4 py-2 text-sm text-[#794082] hover:bg-gray-100">Mes consultants</Link>
                <Link href="/activite" onClick={() => setDropdownConsultantsOpen(false)} className="block px-4 py-2 text-sm text-[#794082] hover:bg-gray-100">Mon activité</Link>
              </div>
            )}
          </div>

          <Link href="/partenaires" className="font-semibold hover:underline">AVANTAGES PARTENAIRES</Link>
        </div>
      </nav>
    </header>
  );
}
