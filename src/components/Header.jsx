import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import '../css/header.css';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Header */}
            <div className="hidden md:block bg-gray-900 text-white py-2">
                <div className="container mx-auto flex justify-center items-center">
                    <h1 className="text-3xl font-bold">Propulsion and Energy Lab</h1>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden bg-gray-900 text-white py-2">
                <div className="container mx-auto flex flex-row justify-between items-center">
                    <h1 className="text-3xl font-bold">Propulsion and Energy Lab</h1>
                    {/* Conditionally render hamburger or close icon based on menu state */}
                    {isMobileMenuOpen ? (
                        <button onClick={closeMobileMenu} className="focus:outline-none">
                            <CloseIcon /> {/* Close icon */}
                        </button>
                    ) : (
                        <button onClick={toggleMobileMenu} className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 4.5A.5.5 0 013.5 4h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM3.5 9A.5.5 0 013 8.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM3 13.5A.5.5 0 013.5 13h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" />
                            </svg> {/* Hamburger icon */}
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-900 text-xl text-white py-2 w-1/3 absolute right-0">
                    <div className="container mx-auto pl-8 py-4">
                        <div className="flex flex-col justify-center">
                            <Link to="/" className="nav-link mb-4 w-fit" onClick={closeMobileMenu}>
                                Home
                            </Link>
                            <Link to="/Investors" className="nav-link mb-4 w-fit" onClick={closeMobileMenu}>
                                Principal Investigator
                            </Link>
                            <Link to="/Facilities" className="nav-link mb-4 w-fit" onClick={closeMobileMenu}>
                                Facilities
                            </Link>
                            <Link to="/Publications" className="nav-link mb-4 w-fit" onClick={closeMobileMenu}>
                                Publications
                            </Link>
                            <Link to="/Team" className="nav-link mb-4 w-fit" onClick={closeMobileMenu}>
                                Team
                            </Link>
                            <Link to="/Research" className="nav-link mb-4 w-fit" onClick={closeMobileMenu}>
                                Research Positions
                            </Link>
                            <Link to="/Contact" className="nav-link mb-4 w-fit" onClick={closeMobileMenu}>
                                Contact us
                            </Link>
                            <Link to="/Updates" className="nav-link mb-4 w-fit" onClick={closeMobileMenu}>
                                Updates
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <div className="hidden md:block dekstop text-2xl" style={{ backgroundColor: '#111827', color: '#fff' }}>

                {/* Desktop Navigation */}
                <div className="hidden md:block container mx-auto py-4">
                    <div className="flex justify-center">
                        <Link to="/" className="nav-link mx-4 w-fit" >
                            Home
                        </Link>
                        <Link to="/Investors" className="nav-link mx-4 w-fit">
                            Principal Investigator
                        </Link>
                        <Link to="/Facilities" className="nav-link mx-4 w-fit" >
                            Facilities
                        </Link>
                        <Link to="/Publications" className="nav-link mx-4 w-fit">
                            Publications
                        </Link>
                        <Link to="/Team" className="nav-link mx-4 w-fit">
                            Team
                        </Link>
                        <Link to="/Research" className="nav-link mx-4 w-fit">
                            Research Positions
                        </Link>
                        <Link to="/Contact" className="nav-link mx-4 w-fit">
                            Contact us
                        </Link>
                        <Link to="/Updates" className="nav-link mx-4 w-fit" >
                            Updates
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
