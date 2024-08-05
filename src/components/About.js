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
            title: "关于我",
            description: "我是一名充满热情的教育工作者，拥有超过10年的教学经验。我的专业领域涵盖数学、科学和电脑程式设计等多个学科。我相信应该为所有学生创造一个引人入胜且互动的学习体验。",
            education: [
                {
                    year: "2014",
                    degree: "化学工程学士学位",
                    institution: "国立清华大学"
                },
                {
                    year: "2016",
                    degree: "化学工程硕士学位",
                    institution: "国立清华大学"
                },
                {
                    year: "2020",
                    degree: "材料科学博士候选人及硕士学位",
                    institution: "普渡大学"
                },
                {
                    year: "2024 秋季",
                    program: "即将开始学习人工智慧科学硕士项目",
                    institution: "德克萨斯大学奥斯汀分校"
                }
            ],
            certification: "目前正在接受美国教师资格证项目。",
            experience: "我自2010年开始教学。曾是硅谷的半导体工程师，现为世界五百强企业的软件工程师。",
            skills: "擅长化学、材料科学和软件工程，具有丰富的教学和行业经验。",
            hobbies: "在空闲时间，我喜欢徒步旅行、阅读和探索新技术。"
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
                            <h3>{language === 'en' ? 'Education' : '教育背景'}</h3>
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
                            <h3>{language === 'en' ? 'Experience' : '经历'}</h3>
                            <p>{content[language].experience}</p>
                            <h3>{language === 'en' ? 'Certification' : '认证'}</h3>
                            <p>{content[language].certification}</p>
                            <h3>{language === 'en' ? 'Skills' : '技能'}</h3>
                            <p>{content[language].skills}</p>
                            <h3>{language === 'en' ? 'Hobbies' : '爱好'}</h3>
                            <p>{content[language].hobbies}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;