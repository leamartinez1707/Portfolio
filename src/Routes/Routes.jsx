import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Nav/Navbar'
import Home from '../Components/Home/Home'
import Error from '../Components/Error/Error'
import About from '../Components/About/About'
import Proyects from '../Components/Proyects/Proyects'

const RoutesNav = () => {

    const navbar_items = [
        {
            path: "/Info",
            name: "/Info"
        },
        {
            path: "/Proyectos",
            name: "/Proyectos"
        },
        {
            path: "/Contacto",
            name: "/Contactarme"
        }

    ]

    return (
        <BrowserRouter>
            <Navbar navbar_items={navbar_items} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Info' element={< About />} />
                <Route path='/Proyectos' element={<Proyects />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesNav