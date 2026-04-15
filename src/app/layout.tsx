import StyledComponentsRegistry from '../lib/registro'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '@/contexts/CartContext'
import { LoginProvider } from '@/contexts/AuthContext'

export default function RootLayout({
  children, }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="pt-BR">

      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <LoginProvider>
          <CartProvider>
            <StyledComponentsRegistry>
              <Header />
              <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', flex: 1, width: '100%' }}>

                {children}

              </main>

              <Footer />

            </StyledComponentsRegistry>
          </CartProvider>
        </LoginProvider>
      </body>

    </html>
  )
}