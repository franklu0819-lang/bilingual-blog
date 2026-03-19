import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bilingual Blog',
  description: 'A sleek bilingual technical blog built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout is used for the root page which redirects
  return children;
}
