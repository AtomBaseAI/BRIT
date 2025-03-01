import { useState } from 'react';
import Link from 'next/link';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeParent, setActiveParent] = useState(false);
    const [active, setActive] = useState('home');
    const [activeSub, setActiveSub] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (itemName) => {
        
        setActive(itemName);
        setActiveSub(itemName);
        setActiveParent(itemName === 'web' || itemName === 'mob' || itemName === 'seo' || itemName === 'training');
        setIsMenuOpen(false);
    };

    return (
        <>
            <header id="topnav" className="defaultscroll nav-sticky">
                <div className="container">
                    <div>
                        <Link className="logo" href="/">
                            <img
                                src="https://ik.imagekit.io/nodehive/brit/logo-darkx2.png"
                                height={24}
                                alt="BRIT Resourcing"
                                className="text-primary"
                            />
                        </Link>
                    </div>
                    <div className="contact-buttonmx d-none d-md-block ">
                        <Link href="/contact" className="btn btn-primary">
                            Contact Us
                        </Link>
                    </div>
                    <div className="menu-extras">
                        <div className="menu-item">
                            <a className="navbar-toggle" onClick={toggleMenu}>
                                <div className="lines">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div id="navigation" className={`${isMenuOpen ? 'show' : ''}`}>
                        <ul className="navigation-menu">
                            <li className={active === 'home' ? 'active' : ''}>
                                <Link href="/" onClick={() =>handleLinkClick ('home')}>
                                    Home
                                </Link>
                            </li>
                            <li className={active === 'about' ? 'active' : ''}>
                                <Link href="/about" onClick={() =>handleLinkClick ('about')}>
                                    About Us
                                </Link>
                            </li>
                                                      
                            <li className={`d-block d-md-none ${active === 'contact' ? 'active' : ''}`} >
                                <Link href="/contact" onClick={() =>handleLinkClick('contact')}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
