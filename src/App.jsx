import RoutesNav from './Routes/Routes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

AOS.init();

const App = () => {
  return (
    <>
      <RoutesNav />
    </>
  )
}

export default App