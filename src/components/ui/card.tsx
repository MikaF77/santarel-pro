"use client";

import { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="border rounded-xl shadow p-4 bg-white">
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="mt-2">{children}</div>;
}
