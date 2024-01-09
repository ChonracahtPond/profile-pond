// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CarouselHome from '../container/Home/Carousel'
import Navbar from './navbar'
import React from "react"
import Footer from './footer'



const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      
      <main className={inter.className}>
        {children}
      </main>
      <Footer />
    </>
  )
}
