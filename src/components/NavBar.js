import React from 'react';
import { useLanguage } from '../App';

function Navbar() {
    const { language, toggleLanguage } = useLanguage();

    const navData = {
        en: {
            items: ['Home', 'About', 'Courses', 'Achievements', 'Contact'],
            ids: ['home', 'about', 'courses', 'academic-highlights', 'contact']
        },
        zh: {
            items: ['主页', '关于我', '课程', '学生成就', '联系我们'],
            ids: ['home', 'about', 'courses', 'academic-highlights', 'contact']
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#home">Alan’s Learning Hub</a>
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navData[language].items.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a
                                    className="nav-link"
                                    href={`#${navData[language].ids[index]}`}
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