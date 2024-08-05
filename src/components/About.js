import React from 'react';
import { useLanguage } from '../App';

function About() {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "About Me",
            description: "I am a passionate educator with over 10 years of experience in teaching. My expertise spans across various subjects including mathematics, science, and computer programming. I believe in making learning an engaging and interactive experience for all my students."
        },
        zh: {
            title: "關於我",
            description: "我是一名充滿熱情的教育工作者，擁有超過10年的教學經驗。我的專業領域涵蓋數學、科學和電腦程式設計等多個學科。我相信應該為所有學生創造一個引人入勝且互動的學習體驗。"
        }
    };

    return (
        <section id="about" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">{content[language].title}</h2>
                <p className="lead text-center">{content[language].description}</p>
            </div>
        </section>
    );
}

export default About;