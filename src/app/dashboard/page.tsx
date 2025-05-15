'use client';

import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';

const slides = [
  "🔬 Lancement d’un nouveau complément innovant",
  "🎓 Webinaire à venir sur la détox hépatique",
  "🧾 Nouvelle version du bon de commande disponible"
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const isFake = sessionStorage.getItem("fakeUser") === "true";
    if (isFake) {
      setUser({
        username: "demo",
        attributes: { email: "demo@santarel.fr" }
      });
      setLoading(false);
      return;
    }

    Auth.currentAuthenticatedUser()
      .then((u) => setUser(u))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/');
    }
  }, [loading, user, router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Chargement…</p>
      </div>
    );
  }

  if (!user) {
    return null; // La redirection est gérée dans useEffect
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-lg shadow space-y-8">
      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <h1 className="text-3xl font-bold">Bienvenue, {user.username}</h1>
      <p className="text-gray-600">Connecté avec : {user.attributes?.email}</p>

      {/* Slides d'actualités */}
      <div>
        <h2 className="text-xl font-semibold text-[#794082] mb-4">Actualités du laboratoire</h2>
        <div className="transition-all duration-500 ease-in-out bg-[#f3f0f4] p-4 rounded shadow text-center">
          {slides[currentSlide]}
        </div>
      </div>

      {/* Interlocuteur dédié */}
      <div>
        <h2 className="text-xl font-semibold text-[#794082] mb-4">Votre interlocuteur dédié</h2>
        <div className="bg-[#f9f9f9] border p-4 rounded">
          <p><strong>Nom :</strong> Julie Morel</p>
          <p><strong>Email :</strong> julie.morel@santarel.fr</p>
          <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
        </div>
      </div>

      {/* Bon de commande */}
      <div>
        <h2 className="text-xl font-semibold text-[#794082] mb-4">Bon de commande</h2>
        <a
          href="/bons-de-commande/BDC-SANTAREL.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#794082] text-white px-6 py-3 rounded hover:bg-[#66336e] transition"
        >
          Télécharger le bon de commande
        </a>
      </div>
    </div>
  );
}
