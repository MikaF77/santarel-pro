'use client';

import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';

export default function ForcePasswordPage() {
  const router = useRouter();

  const [step, setStep] = useState<'login' | 'new-password'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [cognitoUser, setCognitoUser] = useState<any>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const user = await Auth.signIn(email, password);

      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        setCognitoUser(user);
        setStep('new-password');
      } else {
        router.push('/dashboard');
      }
    } catch (err: any) {
      console.error('[ForcePassword] ❌', err);
      setError(err.message || 'Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  const handleSetNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await Auth.completeNewPassword(cognitoUser, newPassword);
      router.push('/dashboard');
    } catch (err: any) {
      console.error('[ForcePassword] ❌', err);
      setError(err.message || 'Erreur lors du changement de mot de passe');
    } finally {
      setLoading(false);
    }
  };

   return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md bg-[#f8f8f8] border border-gray-200 rounded-xl shadow p-6 space-y-6">
        <h1 className="text-2xl font-bold text-[#794082] text-center">🔐 Réinitialisation obligatoire</h1>

        {step === 'login' && (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded border-gray-300 focus:outline-[#794082]"
              required
            />
            <input
              type="password"
              placeholder="Mot de passe actuel"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded border-gray-300 focus:outline-[#794082]"
              required
            />
            {error && <p className="text-sm text-red-600 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#794082] text-white py-3 rounded hover:bg-[#66336e] transition"
              disabled={loading}
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>
        )}

        {step === 'new-password' && (
          <form onSubmit={handleSetNewPassword} className="space-y-4">
            <p className="text-sm text-gray-700 text-center">
              Veuillez choisir un <strong>nouveau mot de passe</strong> pour activer votre compte.
            </p>
            <input
              type="password"
              placeholder="Nouveau mot de passe"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border rounded border-gray-300 focus:outline-[#794082]"
              required
            />
            {error && <p className="text-sm text-red-600 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#0288d1] text-white py-3 rounded hover:bg-[#0277bd] transition"
              disabled={loading}
            >
              {loading ? 'Mise à jour...' : 'Valider le nouveau mot de passe'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
