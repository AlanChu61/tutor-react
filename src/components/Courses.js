import React from 'react';
import { useLanguage } from '../App';

function Courses() {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "My Courses",
            courses: [
                "Introduction to Programming",
                "Advanced Mathematics",
                "Web Development Fundamentals"
            ]
        },
        zh: {
            title: "我的課程",
            courses: [
                "程式設計入門",
                "高等數學",
                "網頁開發基礎"
            ]
        }
    };

    return (
        <section id="courses" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">{content[language].title}</h2>
                <div className="row">
                    {content[language].courses.map((course, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{course}</h5>
                                    <p className="card-text">Course description goes here.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Courses;