import RoutesNav from './Routes/Routes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import { Footer } from './Components/Footer/Footer';
import { GlowEffect } from './Components/Glow/GlowEffect';

AOS.init();

const App = () => {
  return (
    <>
      <RoutesNav />
      <Footer />
      <GlowEffect />
    </>
  )
}

export default App