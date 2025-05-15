'use client';

import PageLayout from '@/components/PageLayout';

export default function VideosPage() {
  return (
    <PageLayout title="Webinaires & Formations">
      <p className="text-sm text-gray-600">
        Retrouvez ici les replays des webinaires et les formations en ligne proposés par le laboratoire.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vidéo 1 */}
        <div className="rounded overflow-hidden border bg-[#f9f9f9] shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Replay 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4">
            <h2 className="text-[#794082] font-semibold mb-1">Détox hépatique & soutien naturel</h2>
            <p className="text-sm text-gray-600">Replay du 18 mars 2025</p>
          </div>
        </div>

        {/* Vidéo 2 */}
        <div className="rounded overflow-hidden border bg-[#f9f9f9] shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3GwjfUFyY6M"
              title="Replay 2"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4">
            <h2 className="text-[#794082] font-semibold mb-1">Accompagnement du stress oxydatif</h2>
            <p className="text-sm text-gray-600">Replay du 12 février 2025</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
