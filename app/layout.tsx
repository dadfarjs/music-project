import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReduxWrapper from '@/lib/redux/ReduxWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxWrapper>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={`${inter.className} bg-slate-900 text-slate-100`}>{children}</body>
      </html>
    </ReduxWrapper>
  );
}
