import { redirect } from 'next/navigation';

// This page redirects root / to /en
export default function RootPage() {
  redirect('/en');
}
