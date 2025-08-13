import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Toaster } from "@/components/ui/toaster"



import Navbarr from "@/components/Navbar"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "StayEase | Vacation rentals, cabins, beach houses, & more",
  description: "StayEase | Vacation rentals, cabins, beach houses, & more",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={poppins.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <main>
              <Navbarr />
              {/* <Container> */}
              {/* <Header /> */}
              {children}
              <Footer />
              {/* </Container> */}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
