import React, { useState } from 'react';
import { useLanguage } from '../App';

function AcademicHighlights() {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "Student Achievements",
            testimonials: [
                {
                    author: "Michael Zhou",
                    courses: "A-Level Math (A), Physics (A), Academic Paper (High Distinction)",
                    university: "University of Melbourne"
                },
                {
                    author: "Carlos Wang",
                    courses: "A-Level Math (A*), ACT 35",
                    university: "University of Sydney"
                },
                {
                    author: "Natalia Du",
                    courses: "A-Level Math (A*)",
                    university: "Kyoto University"
                },
                {
                    author: "Rachel Zhang",
                    courses: "A-Level Math (A*), Further Math (A*)",
                    university: "University of Warwick"
                },
                {
                    author: "Cindy Chen",
                    courses: "A-Level Math (A)",
                    university: "Currently in high school"
                },
                {
                    author: "Marshall Ye",
                    courses: "Coding/Python/Algorithm",
                    university: "Currently in high school"
                }
            ]
        },
        zh: {
            title: "学生成就",
            testimonials: [
                {
                    author: "Michael Zhou",
                    courses: "A-Level 数学 (A), 物理 (A), 学术论文 (优秀)",
                    university: "墨尔本大学"
                },
                {
                    author: "Carlos Wang",
                    courses: "A-Level 数学 (A*), ACT 35",
                    university: "悉尼大学"
                },
                {
                    author: "Natalia Du",
                    courses: "A-Level 数学 (A*)",
                    university: "京都大学"
                },
                {
                    author: "Rachel Zhang",
                    courses: "A-Level 数学 (A*), 高数 (A*)",
                    university: "华威大学"
                },
                {
                    author: "Cindy Chen",
                    courses: "A-Level 数学 (A)",
                    university: "高中在读"
                },
                {
                    author: "Marshall Ye",
                    courses: "编程/Python/算法",
                    university: "高中在读"
                }
            ]
        }
    };

    const [displayedTestimonials, setDisplayedTestimonials] = useState(() => {
        const initialTestimonials = [];
        const allTestimonials = content[language].testimonials;
        const totalToShow = window.innerWidth < 768 ? 3 : 4; // Show 3 on mobile, 4 on desktop

        while (initialTestimonials.length < totalToShow) {
            const randomIndex = Math.floor(Math.random() * allTestimonials.length);
            const testimonial = allTestimonials[randomIndex];
            if (!initialTestimonials.includes(testimonial)) {
                initialTestimonials.push(testimonial);
            }
        }
        return initialTestimonials;
    });

    const generateRandomTestimonials = () => {
        const randomTestimonials = [];
        const allTestimonials = content[language].testimonials;
        const totalToShow = window.innerWidth < 768 ? 3 : 4; // Show 3 on mobile, 4 on desktop

        while (randomTestimonials.length < totalToShow) {
            const randomIndex = Math.floor(Math.random() * allTestimonials.length);
            const testimonial = allTestimonials[randomIndex];
            if (!randomTestimonials.includes(testimonial)) {
                randomTestimonials.push(testimonial);
            }
        }
        setDisplayedTestimonials(randomTestimonials);
    };

    return (
        <section id="academic-highlights" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">{content[language].title}</h2>
                <div className="row">
                    {displayedTestimonials.map((testimonial, index) => (
                        <div className="col-md-6 mb-3" key={index}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <footer className="blockquote-footer">
                                            <strong>{testimonial.author}</strong> <br />
                                            <span>Courses: {testimonial.courses}</span> <br />
                                            <cite title="University">University: {testimonial.university}</cite>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={generateRandomTestimonials}>
                        {language === 'en' ? 'See More Students' : '看其他学生'}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AcademicHighlights;