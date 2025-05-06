/* src/app/layout.tsx */
import "./globals.css"
import { Inter, Poppins } from 'next/font/google'
import type { Metadata } from "next"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Aline NIYONIZERA | Software Developer",
  description: "Personal portfolio of Aline NIYONIZERA, a Software Developer based in Kigali, Rwanda",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}