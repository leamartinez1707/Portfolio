/* eslint-disable react/prop-types */
import './navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';


const Navbar = (props) => {

        const { navbar_items } = props
        const navigate = useNavigate()
        const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

        const toggleMobileMenu = () => {
                setMobileMenuOpen(!isMobileMenuOpen);
        };

        const closeMobileMenu = () => {
                setMobileMenuOpen(false);
        };

        return (
                <div className="navbar">
                        <nav className="flex items-center justify-between flex-wrap p-6">
                                <div className="flex items-center flex-shrink-0 text-white mr-6">
                                        <svg
                                                className="fill-current h-8 w-8 mr-2"
                                                width="54"
                                                height="54"
                                                viewBox="0 0 54 54"
                                                xmlns="http://www.w3.org/2000/svg"
                                        >
                                                {/* Tu icono SVG */}
                                        </svg>
                                        <span onClick={() => navigate(`/`)} className="font-semibold text-xl tracking-tight hover:cursor-pointer">
                                                <h2 className='hover:underline'>Inicio</h2>
                                        </span>
                                </div>
                                <div className="block sm:hidden">
                                        <button
                                                className="flex items-center px-3 py-2 border rounded burger-menu"
                                                onClick={toggleMobileMenu}
                                        >
                                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <title>Menu</title>
                                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                                </svg>
                                        </button>
                                </div>
                                <div
                                        className={`w-full ${isMobileMenuOpen ? 'block' : 'hidden'
                                                } sm:block flex-grow sm:flex sm:items-center sm:w-auto`}
                                >
                                        <div className="text-sm sm:flex-grow">
                                                <ul className="navbar-nav flex flex-row justify-center sm:justify-end">
                                                        {navbar_items.map(({ path, name }, index) => (
                                                                <li key={index} className="nav-item nav-cat mx-auto sm:mx-8 align-center" onClick={closeMobileMenu}>
                                                                        <NavLink
                                                                                className="nav-link block sm:hover:underline sm:hover:decoration-4 sm:inline-block lg:mt-0  mr-4"
                                                                                to={path}
                                                                        >
                                                                                {name}
                                                                        </NavLink>
                                                                </li>
                                                        ))}
                                                </ul>
                                        </div>
                                </div>
                        </nav>
                </div>
        );
};

export default Navbar