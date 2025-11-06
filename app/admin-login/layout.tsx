import React from 'react';

// Este layout é um pass-through que garante que o Next.js resolva a hierarquia,
// mas não adiciona nenhum elemento visual complexo.
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}