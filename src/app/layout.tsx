import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upright',
  description: '',
  icons: {
    icon: '/images/u_isotipo-removebg-preview.png',
    shortcut: '/images/u_isotipo-removebg-preview.png',
    apple: '/images/u_isotipo-removebg-preview.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
