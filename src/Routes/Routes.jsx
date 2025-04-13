import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Nav/Navbar'
import Home from '../Components/Home/Home'
import Error from '../Components/Error/Error'
import { ScrollToTop } from '../Components/ButtonTop/ScrollToTop'

const RoutesNav = () => {

    const navbar_items = [
        {
            path: "#infoSection",
            name: "about"
        },
        {
            path: "#projectsSection",
            name: "projects"
        },
        {
            path: "#contactSection",
            name: "contact"
        }

    ]

    return (
        <BrowserRouter>
            <Navbar navbar_items={navbar_items} />
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesNav