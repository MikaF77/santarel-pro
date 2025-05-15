'use client';

import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => router.replace("/dashboard"))
      .catch(() => {});
  }, [router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      await Auth.signOut({ global: true }).catch(() => {});
      await Auth.signIn(email, password);
      router.push("/dashboard");
    } catch (err) {
      if (typeof err === "object" && err !== null && "name" in err && err.name === "UserAlreadyAuthenticatedException") {
        router.push("/dashboard");
      } else {
        setError((err as { message?: string }).message || "Erreur de connexion");
      }
    }
  };

  const handleFakeLogin = () => {
    sessionStorage.setItem("fakeUser", "true");
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col justify-between font-sans">
      {/* Header avec Logo */}
      <header className="bg-white py-8 shadow-md">
        <div className="container mx-auto flex justify-center">
          <Image src="/logo-santarel.svg" alt="Logo Santarel" width={160} height={80} />
        </div>
      </header>

      {/* Bloc principal */}
      <section className="container mx-auto px-4 py-12 flex flex-col lg:flex-row justify-center items-start gap-10">
        {/* Connexion */}
        <div className="w-full lg:w-1/2 bg-[#f8f8f8] border border-gray-200 rounded-xl shadow p-8">
          <h2 className="text-2xl font-bold text-[#794082] mb-6 text-center">Connexion</h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="email"
              placeholder="Adresse email"
              className="w-full p-3 rounded border border-gray-300 focus:outline-[#794082]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full p-3 rounded border border-gray-300 focus:outline-[#794082]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#794082] text-white py-3 rounded hover:bg-[#66336e] transition"
            >
              Se connecter
            </button>
            <button
              type="button"
              className="w-full border border-[#794082] text-[#794082] py-3 rounded hover:bg-[#f3f0f4] transition"
              onClick={handleFakeLogin}
            >
              Mode Démo (bypass)
            </button>
          </form>
        </div>

        {/* Inscription */}
        <div className="w-full lg:w-1/2 bg-[#f8f8f8] border border-gray-200 rounded-xl shadow p-8">
          <h2 className="text-2xl font-bold text-[#794082] mb-6 text-center">Inscription</h2>
          <form action="/inscription" method="GET" className="space-y-5">
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full p-3 rounded border border-gray-300 focus:outline-[#794082]"
            />
            <input
              type="email"
              placeholder="Email professionnel"
              className="w-full p-3 rounded border border-gray-300 focus:outline-[#794082]"
            />
            <button className="w-full bg-[#575756] text-white py-3 rounded hover:bg-[#3f3f3f] transition">
              Créer mon compte
            </button>
          </form>
        </div>
      </section>

      {/* Présentation */}
      <section className="bg-[#f3f0f4] py-14 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-3xl font-semibold text-[#794082]">Bienvenue sur l’espace pro Santarel</h3>
          <p className="text-lg text-[#575756]">
            Le Laboratoire Santarel accompagne les professionnels de santé avec des solutions efficaces et naturelles.
            Accédez à vos produits, formations, patients et commandes via une interface dédiée et sécurisée.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#575756] text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Laboratoire Santarel – Tous droits réservés</p>
          <div className="flex gap-6">
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
            <a href="/politique-confidentialite" className="hover:underline">Confidentialité</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
