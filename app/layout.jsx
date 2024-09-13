import Header from "@/components/Header";
import { JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import "./globals.css";
import StairTransition from "@/components/StairTransition";
import { Analytics } from "@vercel/analytics/react"

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Zakariae Azarkan",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
      <Header />
      <StairTransition />
      <PageTransition>
      {children}
      <Analytics />
      </PageTransition>
      
      </body>
    </html>
  );
}