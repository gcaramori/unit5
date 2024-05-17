import Header from './components/header'
import Classes from './components/classes'
import Services from './components/services'
import Testimonials from './components/testimonials'
import Gallery from './components/gallery'
import Contact from './components/contact'
import Footer from './components/footer'

export default function Home() {
  return (
    <main id="home" className="block relative overflow-x-hidden">
      <Header />

      <Classes />

      <Services />

      <Testimonials />

      <Gallery />

      <Contact />

      <Footer />
    </main>
  )
}
