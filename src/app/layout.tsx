
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gradient-to-b from-black via-black to-red-800 text-white min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
