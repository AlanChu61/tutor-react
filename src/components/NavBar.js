import React from 'react';
import { useLanguage } from '../App';

function Navbar() {
    const { language, toggleLanguage } = useLanguage();

    const navItems = {
        en: ['Home', 'About', 'Courses', 'Testimonials', 'Contact'],
        zh: ['主页', '关于我', '课程', '学生评价', '联系我们']  // Simplified Chinese
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#home">Teacher Website</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {navItems[language].map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a
                                    className="nav-link"
                                    href={`#${navItems.en[index].toLowerCase()}`} // Ensure IDs match sections
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="btn btn-outline-primary"
                        onClick={toggleLanguage}
                        aria-label="Toggle Language"
                    >
                        {language === 'en' ? '中文' : 'English'}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;