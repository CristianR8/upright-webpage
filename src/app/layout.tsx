import Layout from "@/components/Layout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://uprightic.com"),
  title: "Upright",
  applicationName: "Upright",
  description:
    "En Upright conectamos ideas con personas. Impulsamos tu marca con experiencias digitales completas y estratégicas.",
  openGraph: {
    title: "Upright",
    description:
      "En Upright conectamos ideas con personas. Impulsamos tu marca con experiencias digitales completas y estratégicas.",
    url: "https://uprightic.com",
    siteName: "Upright",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon_v2.ico", type: "image/x-icon" },
      { url: "/favicon_v2.png", type: "image/png" },
    ],
    apple: "/favicon_v2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
