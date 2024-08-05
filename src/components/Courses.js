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
                    description: "Explore advanced mathematics concepts including calculus and algebra.",
                    details: "This course covers advanced topics in calculus, algebra, and geometry, focusing on problem-solving techniques and real-world applications."
                },
                {
                    name: "A-Level Computer Science",
                    description: "Learn programming fundamentals and computational thinking.",
                    details: "This course teaches the basics of computer science, including programming in Python, data structures, and computational thinking."
                },
                {
                    name: "A-Level Physics",
                    description: "Understand the fundamental principles of physics and their applications.",
                    details: "This course covers mechanics, electromagnetism, thermodynamics, and modern physics concepts, with practical applications and experiments."
                },
                {
                    name: "Python Programming",
                    description: "Introduction to programming using Python.",
                    details: "Learn the basics of Python programming, covering syntax, variables, loops, functions, and data structures. Suitable for beginners."
                },
                {
                    name: "Research Paper Writing",
                    description: "Develop skills for writing academic research papers.",
                    details: "This course focuses on the structure, style, and components of academic research papers, including thesis development, argumentation, and citation methods."
                }
            ]
        },
        zh: {
            title: "我的课程",
            courses: [
                {
                    name: "A-Level 数学",
                    description: "探索包括微积分和代数在内的高级数学概念。",
                    details: "本课程涵盖微积分、代数和几何的高级主题，重点介绍问题解决技术及其现实应用。"
                },
                {
                    name: "A-Level 计算机科学",
                    description: "学习编程基础和计算思维。",
                    details: "本课程教授计算机科学的基础知识，包括Python编程、数据结构和计算思维。"
                },
                {
                    name: "A-Level 物理",
                    description: "了解物理学的基本原理及其应用。",
                    details: "本课程涵盖力学、电磁学、热力学和现代物理概念，并包括实践应用和实验。"
                },
                {
                    name: "Python 编程",
                    description: "使用Python进行编程的入门课程。",
                    details: "学习Python编程的基础知识，涵盖语法、变量、循环、函数和数据结构。适合初学者。"
                },
                {
                    name: "论文写作",
                    description: "培养撰写学术研究论文的能力。",
                    details: "本课程专注于学术研究论文的结构、风格和组成部分，包括论题开发、论证和引用方法。"
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