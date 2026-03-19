import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-slate-950`}>
        <NextIntlClientProvider messages={messages}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <main className="py-10">
              {children}
            </main>
            
            <footer className="py-8 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Blog. Built with Next.js.
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
