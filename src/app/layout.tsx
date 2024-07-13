import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'
import { cn } from "@/lib/utils"
import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import Head from 'next/head';
import {IMAGES} from "@/app/constants/images";
// import { AuthProvider } from '@/app/authContext';
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/ModeToggle'
import PageIllustration from '@/components/page-illustration'
import { Toaster } from '@/components/ui/toaster'
import Provider from '@/components/ui/Provider'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'DS Security',
  description: 'DS Security',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark:bg-gradient-to-l  to-black",
          fontSans.variable
        )}
      >
        <Provider>
        <main className='h-screen'>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >  
      <PageIllustration  />
      <Header/> 
          {children}

          
    </ThemeProvider>
      {/* </AuthProvider> */}

      </main>
      </Provider>
      <Toaster/>
      </body>
    </html>
  )
}
 