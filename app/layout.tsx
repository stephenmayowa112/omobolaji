import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Bolaji - UX Designer Portfolio",
  description: "Industry Certified UX Designer Portfolio - Omobolaji Moses",
  icons: {
    icon: "/images/portrait.jpg",
    shortcut: "/images/portrait.jpg",
    apple: "/images/portrait.jpg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
