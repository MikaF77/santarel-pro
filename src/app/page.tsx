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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => router.replace("/dashboard"))
      .catch(() => {});
  }, [router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  try {
    const user = await Auth.signIn(email, password);

    // ✅ Cas particulier Cognito : le mot de passe doit être changé
    if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
      // Redirection vers la page de changement forcé
      router.push('/force-password');
      return;
    }

    // ✅ Connexion classique
    router.push('/dashboard');
  } catch (err: any) {
    console.error('[Login] ❌', err);

    if (err.name === 'PasswordResetRequiredException') {
      // 🔁 Cas où Cognito exige un reset
      router.push('/force-password');
      return;
    }

    // Autres erreurs classiques
    switch (err.name) {
      case 'UserNotFoundException':
        setError("Aucun compte trouvé avec cette adresse email.");
        break;
      case 'NotAuthorizedException':
        setError("Mot de passe incorrect.");
        break;
      case 'UserNotConfirmedException':
        setError("Votre compte n'est pas encore confirmé.");
        break;
      default:
        setError("Erreur – " + (err.message || 'Connexion impossible'));
    }
  } finally {
    setLoading(false);
  }
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
            {error && (
              <div className="text-red-600 bg-red-100 border border-red-300 p-3 text-sm rounded text-center">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#794082] text-white py-3 rounded hover:bg-[#66336e] transition"
            >
              {loading ? 'Connexion…' : 'Se connecter'}
            </button>

            <a href="/reset-password" className="text-sm text-blue-600 hover:underline text-center block">
              Mot de passe oublié ?
            </a>
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
