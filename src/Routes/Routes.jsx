import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Nav/Navbar'
import Home from '../Components/Home/Home'
import Error from '../Components/Error/Error'
import About from '../Components/About/About'

const RoutesNav = () => {

    const navbar_items = [
        {
            path: "/About",
            name: "/Info"
        },
        {
            path: "/Proyects",
            name: "/Proyectos"
        },
        {
            path: "/Contact",
            name: "/Contacto"
        }

    ]

    return (
        <BrowserRouter>
            <Navbar navbar_items={navbar_items} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={< About />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesNav