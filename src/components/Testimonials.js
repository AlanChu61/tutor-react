import React from 'react';
import { useLanguage } from '../App';

function Testimonials() {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "Student Testimonials",
            testimonials: [
                {
                    text: "This teacher's methods are incredibly effective. I've learned so much in such a short time!",
                    author: "John Doe"
                },
                {
                    text: "The courses are well-structured and engaging. Highly recommended!",
                    author: "Jane Smith"
                }
            ]
        },
        zh: {
            title: "學生評價",
            testimonials: [
                {
                    text: "這位老師的教學方法非常有效。我在短時間內學到了很多東西！",
                    author: "張三"
                },
                {
                    text: "課程結構良好，內容引人入勝。強烈推薦！",
                    author: "李四"
                }
            ]
        }
    };

    return (
        <section id="testimonials" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">{content[language].title}</h2>
                <div className="row">
                    {content[language].testimonials.map((testimonial, index) => (
                        <div className="col-md-6 mb-3" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>"{testimonial.text}"</p>
                                        <footer className="blockquote-footer">{testimonial.author}</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;