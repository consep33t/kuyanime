import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Head from './components/Head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kuyanime',
  description: 'Anime asosole',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Head />      
        {children}
        <Footer />
        </body>
    </html>
  )
}
