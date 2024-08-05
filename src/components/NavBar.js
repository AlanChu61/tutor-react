import React from 'react';
import { useLanguage } from '../App';

function Navbar() {
    const { language, toggleLanguage } = useLanguage();

    const navItems = {
        en: ['Home', 'About', 'Courses', 'Testimonials', 'Contact'],
        zh: ['主頁', '關於我', '課程', '學生評價', '聯繫我']
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Teacher Website</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {navItems[language].map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a className="nav-link" href={`#${navItems.en[index].toLowerCase()}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-outline-primary" onClick={toggleLanguage}>
                        {language === 'en' ? '中文' : 'English'}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;