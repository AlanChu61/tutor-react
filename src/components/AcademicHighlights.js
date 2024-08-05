import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';

function AcademicHighlights() {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "Student Testimonials",
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
            title: "学生评价",
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

    // State to store current visible testimonials and screen size
    const [visibleTestimonials, setVisibleTestimonials] = useState([]);
    const [numTestimonials, setNumTestimonials] = useState(4);

    // Function to generate a random selection of testimonials
    const generateRandomTestimonials = (num) => {
        const { testimonials } = content[language];
        const shuffled = testimonials.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    // Handle window resize to adjust the number of testimonials based on screen size
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setNumTestimonials(3);
        } else {
            setNumTestimonials(4);
        }
    };

    // Initialize and update testimonials based on screen size
    useEffect(() => {
        handleResize(); // Set initial number of testimonials
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [language]); // Update on language change

    useEffect(() => {
        setVisibleTestimonials(generateRandomTestimonials(numTestimonials));
    }, [numTestimonials]);

    // Function to handle button click
    const handleShowMore = () => {
        setVisibleTestimonials(generateRandomTestimonials(numTestimonials));
    };

    return (
        <section id="testimonials" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">{content[language].title}</h2>
                <div className="row">
                    {visibleTestimonials.map((testimonial, index) => (
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
                <div className="text-center mt-4">
                    <button className="btn btn-primary" onClick={handleShowMore}>
                        {language === 'en' ? 'See Other Students' : '看其他学生'}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AcademicHighlights;