'use client'

import FooterComponent from '../components/footerComponent';
import NavBarComponent from '../components/NavBarComponent';
import './../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-indigo-50 flex flex-col w-screen h-screen">
        <NavBarComponent/>
        {children}
        <FooterComponent/>
      </body>
    </html>
  )
}
