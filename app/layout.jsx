import '@styles/globals.scss';
import Header from '@components/header';
import Footer from '@components/footer';

export const metadata = {
  title: 'TBD',
  description: 'Fortalece tus inversiones en bienes raíces según tus preferencias de riesgo',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <main className = 'app'>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
