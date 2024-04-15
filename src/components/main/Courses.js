import React from 'react';

function Courses() {
    const courses = [
        { name: "高中數學", description: "涵蓋所有必需的數學技能，為大學和未來的職業生涯做準備。" },
        { name: "A-Level 物理", description: "深入研究物理學的基礎知識，培養解決實際問題的能力。" },
        { name: "高中化學", description: "探索化學世界，從基本概念到實驗操作。" },
        { name: "科學編程", description: "學習如何通過編程解決科學問題，包括Python和其他語言的基礎。" }
    ];

    return (
        <div className="courses">
            <h1>可用課程</h1>
            {courses.map((course, index) => (
                <div key={index} className="course">
                    <h2>{course.name}</h2>
                    <p>{course.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Courses;
