'use client';

import { useState } from 'react';
import { Auth } from 'aws-amplify';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      await Auth.forgotPassword(email);
      setCodeSent(true);
      setMessage('Un code de vérification vous a été envoyé par e-mail.');
    } catch (err) {
      setError((err as any).message || 'Erreur lors de la demande de réinitialisation.');
    }
  };

  const handleConfirm = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');
  setMessage('');
  try {
    // Étape 1 : validation du code et changement de mot de passe
    await Auth.forgotPasswordSubmit(email, code, newPassword);

    // Étape 2 : connexion automatique
    await Auth.signIn(email, newPassword);

    // Étape 3 : redirection vers le dashboard
    router.push('/dashboard');
  } catch (err) {
    setError((err as any).message || 'Erreur lors de la réinitialisation du mot de passe.');
  }
};


  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-[#f8f8f8] border border-gray-200 rounded-xl shadow p-8">
        <h2 className="text-2xl font-bold text-[#794082] mb-6 text-center">Réinitialisation du mot de passe</h2>

        {message && <div className="text-green-700 bg-green-100 border border-green-300 p-3 text-sm mb-4 rounded">{message}</div>}
        {error && <div className="text-red-600 bg-red-100 border border-red-300 p-3 text-sm mb-4 rounded">{error}</div>}

        {!codeSent ? (
          <form onSubmit={handleSendCode} className="space-y-5">
            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-[#794082]"
            />
            <button
              type="submit"
              className="w-full bg-[#794082] text-white py-3 rounded hover:bg-[#66336e] transition"
            >
              Envoyer le code de réinitialisation
            </button>
          </form>
        ) : (
          <form onSubmit={handleConfirm} className="space-y-5">
            <input
              type="text"
              placeholder="Code de vérification"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-[#794082]"
            />
            <input
              type="password"
              placeholder="Nouveau mot de passe"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-[#794082]"
            />
            <button
              type="submit"
              className="w-full bg-[#794082] text-white py-3 rounded hover:bg-[#66336e] transition"
            >
              Réinitialiser mon mot de passe
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
