import Layout from "@/components/Layout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upright",
  description: "",
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
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
