import React from 'react';
import { useLanguage } from '../App';
import '../style/About.css'; // Import the CSS file

function About() {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "About Me",
            description: "I am a passionate educator with over 10 years of experience in teaching. My expertise spans across mathematics, science, and computer programming. I believe in making learning an engaging and interactive experience, excelling at listening to students' needs and customizing lessons to enhance their learning experience.",
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
                    degree: "PhD Candidacy/M.S. in Materials Science",
                    institution: "Purdue University"
                },
                {
                    year: "2024 - Present",
                    program: "M.S. in Artificial Intelligence",
                    institution: "University of Texas at Austin"
                }
            ],
            certification: [
                "Pursuing the US Teaching Certification Program at Moreland University.",
                "Completed CAIE Professional Development Courses - 9702."
            ],
            experience: [
                "As CEO of Shanghai Jieni Education, developed strategic educational programs empowering thousands of students.",
                "Founded U.S. Aideer Online High School, pioneering online education tailored to diverse learning needs.",
                "Appointed as a distinguished judge for student research competitions in IN, USA, including West Central Science and Engineering Fair 2021.",
                "Over 10 years of experience in personalized tutoring, focusing on mathematics, science, and programming for various age groups."
            ],
        },
        zh: {
            title: "关于我",
            description: "我是一名充满热情的教育工作者，拥有超过10年的教学经验。我的专业领域涵盖数学、科学和电脑程式设计等。我相信应该为所有学生创造一个引人入胜且互动的学习体验，擅长倾听学生的需求并定制课程以增强他们的学习体验。",
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
                    program: "人工智慧科学硕士项目",
                    institution: "德克萨斯大学奥斯汀分校"
                }
            ],
            certification: [
                "目前正在Moreland University接受美国教师资格证项目。",
                "完成CAIE专业发展课程 - 9702。"
            ],
            experience: [
                "作为上海杰尼教育的首席执行官，制定战略教育项目，赋予成千上万的学生权力。",
                "创立美国艾迪尔在线高中，开创适应多样化学习需求的在线教育方法。",
                "受邀成为美国印第安纳州学生科研竞赛的著名评委，包括West Central Science and Engineering Fair 2021。",
                "拥有超过10年的个性化辅导经验，专注于数学、科学和各年龄段的编程。"
            ],
        }
    };

    return (
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">{content[language].title}</h2>
                <p className="lead mb-5">{content[language].description}</p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-section">
                            <h3>{language === 'en' ? 'Education' : '教育背景'}</h3>
                            {content[language].education.map((item, index) => (
                                <p key={index}>
                                    <strong>{item.year}</strong>: {item.degree || item.program} - {item.institution}
                                </p>
                            ))}
                            <h3>{language === 'en' ? 'Certification' : '认证'}</h3>
                            {content[language].certification.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-section">
                            <h3>{language === 'en' ? 'Experience' : '经历'}</h3>
                            {content[language].experience.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;