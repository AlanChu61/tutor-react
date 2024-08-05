import React, { useState } from 'react';
import { useLanguage } from '../App';
import { Modal, Button } from 'react-bootstrap';

function Courses() {
    const { language } = useLanguage();
    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const content = {
        en: {
            title: "My Courses",
            courses: [
                {
                    name: "A-Level Mathematics",
                    description: "Explore advanced mathematics concepts including calculus and algebra in a personalized 1-on-1 setting.",
                    details: "This course covers advanced topics in calculus, algebra, and geometry, focusing on problem-solving techniques and real-world applications. Delivered in a personalized 1-on-1 format to suit individual learning needs."
                },
                {
                    name: "A-Level Computer Science",
                    description: "Learn programming fundamentals and computational thinking through personalized 1-on-1 sessions.",
                    details: "This course teaches the basics of computer science, including programming in Python, data structures, and computational thinking. All sessions are 1-on-1, ensuring personalized attention and instruction."
                },
                {
                    name: "A-Level Physics",
                    description: "Understand the fundamental principles of physics and their applications with 1-on-1 guidance.",
                    details: "This course covers mechanics, electromagnetism, thermodynamics, and modern physics concepts, with practical applications and experiments. Offered as 1-on-1 sessions for focused learning."
                },
                {
                    name: "Python Programming",
                    description: "Introduction to programming using Python, offered in a personalized 1-on-1 format.",
                    details: "Learn the basics of Python programming, covering syntax, variables, loops, functions, and data structures. Suitable for beginners and delivered through 1-on-1 sessions for personalized learning."
                },
                {
                    name: "Research Paper Writing",
                    description: "Develop skills for writing academic research papers with 1-on-1 expert guidance.",
                    details: "This course focuses on the structure, style, and components of academic research papers, including thesis development, argumentation, and citation methods. Personalized 1-on-1 sessions provide tailored instruction."
                },
                {
                    name: "Program and Career Guidance",
                    description: "Navigate academic programs and career choices effectively through 1-on-1 counseling.",
                    details: "This course offers personalized guidance to help students choose academic programs that align with their interests and career aspirations. Includes career assessments, application support, and workshops with industry professionals, all delivered in a 1-on-1 setting."
                }
            ]
        },
        zh: {
            title: "我的课程",
            courses: [
                {
                    name: "A-Level 数学",
                    description: "在个性化的1对1环境中探索包括微积分和代数在内的高级数学概念。",
                    details: "本课程涵盖微积分、代数和几何的高级主题，重点介绍问题解决技术及其现实应用。以1对1的形式提供，以适应个别学习需求。"
                },
                {
                    name: "A-Level 计算机科学",
                    description: "通过个性化的1对1课程学习编程基础和计算思维。",
                    details: "本课程教授计算机科学的基础知识，包括Python编程、数据结构和计算思维。所有课程都是1对1的，确保个性化关注和教学。"
                },
                {
                    name: "A-Level 物理",
                    description: "通过1对1的指导，了解物理学的基本原理及其应用。",
                    details: "本课程涵盖力学、电磁学、热力学和现代物理概念，并包括实践应用和实验。以1对1课程提供以进行专注学习。"
                },
                {
                    name: "Python 编程",
                    description: "以个性化的1对1形式提供的Python编程入门课程。",
                    details: "学习Python编程的基础知识，涵盖语法、变量、循环、函数和数据结构。适合初学者，并通过1对1课程提供以个性化学习。"
                },
                {
                    name: "论文写作",
                    description: "在1对1专家指导下培养撰写学术研究论文的能力。",
                    details: "本课程专注于学术研究论文的结构、风格和组成部分，包括论题开发、论证和引用方法。个性化的1对1课程提供针对性教学。"
                },
                {
                    name: "项目和职业指导",
                    description: "通过1对1咨询有效导航学术项目和职业选择。",
                    details: "本课程提供个性化指导，帮助学生选择符合他们兴趣和职业目标的学术项目。包括职业评估、申请支持和与行业专业人士的研讨会，均在1对1环境中进行。"
                }
            ]
        }
    };

    const handleShowModal = (course) => {
        setSelectedCourse(course);
        setShowModal(true);
    };

    return (
        <section id="courses" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">{content[language].title}</h2>
                <div className="row">
                    {content[language].courses.map((course, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">{course.description}</p>
                                    <Button variant="primary" onClick={() => handleShowModal(course)}>
                                        {language === 'en' ? 'Learn More' : '了解更多'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for course details */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedCourse && selectedCourse.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedCourse && selectedCourse.details}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        {language === 'en' ? 'Close' : '关闭'}
                    </Button>
                    <Button variant="primary" onClick={() => alert("Enroll or contact logic here")}>
                        {language === 'en' ? 'Enroll Now' : '立即报名'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default Courses;