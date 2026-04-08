import StyledComponentsRegistry from '../lib/registro'

export default function RootLayout({
  children,}:{
    children: React.ReactNode
  }){
    return (
      <html lang="pt-BR">
        <body>
          <StyledComponentsRegistry>
            <nav><h1>HEADER</h1></nav>
           {children}
           <footer><h1>FOOTER</h1></footer>
          </StyledComponentsRegistry>
        </body>
      </html>
    )
  }