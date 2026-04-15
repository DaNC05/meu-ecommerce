import StyledComponentsRegistry from '../lib/registro'
import Header from '../components/Header'
import { CartProvider } from '@/contexts/CartContext'

export default function RootLayout({
  children,}:{
    children: React.ReactNode
  }){
    return (
      <html lang="pt-BR">
        
        <body style={{margin: 0, fontFamily: 'system-ui, sans-serif', backgroundColor:'#f5f5f5'}}>
         <CartProvider>
          <StyledComponentsRegistry>
            <Header/>
            <main style={{padding: '2rem', maxWidth:'120px', margin:'0 auto'}}>
              
              {children}
             
            </main>
           
           <footer><h1>FOOTER</h1></footer>
          
          </StyledComponentsRegistry>
          </CartProvider>
        </body>
        
      </html>
    )
  }