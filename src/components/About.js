import React from 'react';
import { useLanguage } from '../App';
import '../style/About.css'; // Import the CSS file

function About() {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "About Me",
            description: "I am a passionate educator with over 10 years of experience in teaching. My expertise spans across various subjects including mathematics, science, and computer programming. I believe in making learning an engaging and interactive experience for all my students.",
            education: [
                {
                    year: "2014",
                    degree: "B.S. in Chemical Engineering",
                    institution: "National Tsing Hua University"
                },
                {
                    year: "2016",
                    degree: "M.S. in Chemical Engineering",
                    institution: "National Tsing Hua University"
                },
                {
                    year: "2020",
                    degree: "PhD Candidacy and M.S. in Materials Science",
                    institution: "Purdue University"
                },
                {
                    year: "2024 Fall",
                    program: "Enrolling in M.S. in Artificial Intelligence",
                    institution: "University of Texas at Austin"
                }
            ],
            certification: "Currently pursuing the US Teaching Certification Program.",
            experience: "I began teaching in 2010. Previously a semiconductor engineer in Silicon Valley, I am now a software engineer at a Fortune 500 company.",
            skills: "Specialized in chemistry, materials science, and software engineering with extensive teaching and industry experience.",
            hobbies: "In my free time, I enjoy hiking, reading, and exploring new technologies."
        },
        zh: {
            title: "關於我",
            description: "我是一名充滿熱情的教育工作者，擁有超過10年的教學經驗。我的專業領域涵蓋數學、科學和電腦程式設計等多個學科。我相信應該為所有學生創造一個引人入勝且互動的學習體驗。",
            education: [
                {
                    year: "2014",
                    degree: "化學工程學士學位",
                    institution: "國立清華大學"
                },
                {
                    year: "2016",
                    degree: "化學工程碩士學位",
                    institution: "國立清華大學"
                },
                {
                    year: "2020",
                    degree: "材料科學博士候選人及碩士學位",
                    institution: "普渡大學"
                },
                {
                    year: "2024 秋季",
                    program: "即將開始學習人工智慧科學碩士項目",
                    institution: "德克薩斯大學奧斯汀分校"
                }
            ],
            certification: "目前正在接受美國教師資格證項目。",
            experience: "我自2010年開始教學。曾是矽谷的半導體工程師，現為世界五百強企業的軟體工程師。",
            skills: "擅長化學、材料科學和軟體工程，具有豐富的教學和行業經驗。",
            hobbies: "在空閒時間，我喜歡徒步旅行、閱讀和探索新技術。"
        }
    };

    return (
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">{content[language].title}</h2>
                <p className="lead text-center mb-5">{content[language].description}</p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-section">
                            <h3>Education</h3>
                            <ul className="list-unstyled">
                                {content[language].education.map((item, index) => (
                                    <li key={index} className="mb-2">
                                        <strong>{item.year}</strong>: {item.degree || item.program} - {item.institution}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-section">
                            <h3>Experience</h3>
                            <p>{content[language].experience}</p>
                            <h3>Certification</h3>
                            <p>{content[language].certification}</p>
                            <h3>Skills</h3>
                            <p>{content[language].skills}</p>
                            <h3>Hobbies</h3>
                            <p>{content[language].hobbies}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;