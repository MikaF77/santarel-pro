'use client';

export default function Footer() {
  return (
    <footer className="bg-[#f3f0f4] border-t border-gray-200 text-sm text-[#575756] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Bloc 1 : Présentation */}
        <div>
          <h4 className="text-[#794082] font-semibold mb-3">Laboratoire Santarel</h4>
          <p>
            Depuis plus de 15 ans, nous accompagnons les professionnels de santé avec des solutions naturelles, efficaces et fabriquées en France.
          </p>
        </div>

        {/* Bloc 2 : Liens utiles */}
        <div>
          <h4 className="text-[#794082] font-semibold mb-3">Liens utiles</h4>
          <ul className="space-y-2">
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
            <li><a href="/politique-confidentialite" className="hover:underline">Politique de confidentialité</a></li>
            <li><a href="/conditions-generales" className="hover:underline">CGU</a></li>
            </ul>
        </div>

        {/* Bloc 3 : Coordonnées */}
        <div>
          <h4 className="text-[#794082] font-semibold mb-3">Nous contacter</h4>
          <p>support@santarel.fr</p>
          <p>01 23 45 67 89</p>
          <p>Guichainville, France</p>
        </div>
      </div>

      <div className="bg-[#575756] text-white text-center py-4">
        © 2025 Laboratoire Santarel – Tous droits réservés
      </div>
    </footer>
  );
}
