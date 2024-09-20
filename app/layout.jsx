import Header from "@/components/Header"
import { JetBrains_Mono } from "next/font/google"
import PageTransition from "@/components/PageTransition"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
})

export const metadata = {
  title: "Zakariae Azarkan",
  description: "A passionate Full Stack Developer based in Tangier, Morocco, specializing in creating dynamic web applications.",
  openGraph: {
    title: "Zakariae Azarkan",
    description: "A passionate Full Stack Developer based in Tangier, Morocco, specializing in creating dynamic web applications.",
    url: "https://zakariaeazarkan.vercel.app/",
    siteName: "Zakariae Azarkan",
    images: [
      {
        url: "https://zakariaeazarkan.vercel.app/assets/image2.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zakariae Azarkan",
    description: "A passionate Full Stack Developer based in Tangier, Morocco, specializing in creating dynamic web applications.",
    images: ["https://zakariaeazarkan.vercel.app/assets/image2.jpeg"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
      </body>
    </html>
  )
}