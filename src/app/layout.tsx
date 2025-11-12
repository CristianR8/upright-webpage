import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upright',
  description: '',
  icons: {
    icon: '/images/u_web.png',
    shortcut: '/images/u_web.png',
    apple: '/images/u_web.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/u_web.png?v=2" sizes="any" />
        <link rel="apple-touch-icon" href="/images/u_web.png?v=2" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
