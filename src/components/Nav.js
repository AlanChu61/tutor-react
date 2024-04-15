import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
function Nav() {
    const [isNavSticky, setIsNavSticky] = useState(false);

    const handleNavClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(target);
        if (targetElement) {
            const targetOffsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: targetOffsetTop,
                behavior: 'smooth'
            });
        }
    };

    const handleBrandClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            if (currentScrollPosition > 60) {
                setIsNavSticky(true);
            } else {
                setIsNavSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`nav bg-success-subtle ${isNavSticky ? 'sticky' : ''}`}>
            <a className="navbar-brand" href="/" onClick={handleBrandClick}>
                <img src="/img/logo.png" alt='logo' width="50px" height="50px" />
            </a>

            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="#about" onClick={handleNavClick}>About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects" onClick={handleNavClick}>Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#education" onClick={handleNavClick}>Education</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact" onClick={handleNavClick}>Contact Me</a>
                </li><SocialIcon url="https://www.linkedin.com/in/alan-hwader-chu/" />
                <SocialIcon url="https://github.com/AlanChu61" />
            </ul>
        </nav>
    );
}

export default Nav;
