import Header from "@/components/Header";
import { JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import "./globals.css";
import StairTransition from "@/components/StairTransition";
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Zakariae Azarkan",
  description: "A passionate Full Stack Developer based in Tangier, Morocco, specializing in creating dynamic web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://zakariaeazarkan.vercel.app/assets/image2.jpeg" />
        <meta property="og:url" content="https://zakariaeazarkan.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://zakariaeazarkan.vercel.app/assets/image2.jpeg" />
      </Head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
      </body>
    </html>
  );
}