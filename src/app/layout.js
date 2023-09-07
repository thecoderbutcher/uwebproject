import './globals.css'
import { Inter } from 'next/font/google'
import { SearchContextProvider } from './context/search'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UPRO',
  description: 'Universidad Provincial de Oficios',
}

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  )
}
