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
                <>
                        <nav className="navbar flex flex-wrap items-center justify-center sm:p-2">
                                <div className="flex items-center flex-shrink-0 text-white mr-6">
                                        <svg
                                                className="fill-current h-8 w-8 mr-2"
                                                width="54"
                                                height="54"
                                                viewBox="0 0 54 54"
                                                xmlns="http://www.w3.org/2000/svg"
                                        >
                                        </svg>
                                        <span onClick={() => navigate(`/`)} className="font-semibold text-xl tracking-tight hover:cursor-pointer">
                                                <h2 className='title-nav hover:underline'>Inicio</h2>
                                        </span>
                                </div>
                                <div className="block sm:hidden">
                                        <button
                                                className="flex items-center px-3 py-2 border rounded burger-menu"
                                                onClick={toggleMobileMenu}
                                        >
                                                {isMobileMenuOpen === false ? <svg className="fill-current size-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <title>Menu</title>
                                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                                </svg> :
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current size-3" viewBox="0 0 50 50"
                                                        >
                                                                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                                                        </svg>}

                                        </button>
                                </div>
                                <div
                                        className={`w-full ${isMobileMenuOpen ? 'block' : 'hidden'
                                                } sm:block flex-grow sm:items-center sm:w-auto`}
                                >
                                        <div className="text-sm sm:flex-grow">
                                                <ul className="navbar-nav flex flex-row mx-auto justify-center sm:justify-end">
                                                        {navbar_items.map(({ path, name }, index) => (
                                                                <li key={index} className="nav-item nav-cat mx-auto sm:mx-0 align-center" onClick={closeMobileMenu}>
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
                </>
        );
};

export default Navbar