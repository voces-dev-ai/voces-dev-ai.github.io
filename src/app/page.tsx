import Header from '../components/Header';
import Hero from '../components/Hero';
import Spotlight from '../components/Spotlight';
import Footer from '../components/Footer';
import Herramientas from '../components/Herramientas';
import Spotlight_rapanui from '../components/Spotlight_rapanui';
import Spotlight_mapuzungun from '../components/Spotlight_mapuzungun';

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Spotlight_rapanui />
      <Spotlight_mapuzungun />
      <Spotlight />
      <Herramientas />
      <Footer />
    </>
  );
}