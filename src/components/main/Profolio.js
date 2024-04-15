import React, { useState } from 'react';
import styles from './portfolio.module.css';  // 确保正确引用CSS模块

function Portfolio() {
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const achievements = [
        {
            year: "2024",
            students: [
                { name: "王同学", offers: ["King's College London (KCL)", "University of California, Irvine (UCI)", "University of Science, Australia"], achievement: "Offer holder from multiple prestigious universities." },
                { name: "沈同学", offers: ["American Mathematics Competitions (AMC)"], achievement: "Participated and excelled in AMC." }
            ]
        },
        {
            year: "2023",
            students: [
                { name: "左同学", offers: ["University of Melbourne"], achievement: "Achieved A* in CIE A-level Mathematics and Physics." }
            ]
        },
        {
            year: "2022",
            students: [
                { name: "张同学", offers: ["NCAA Approved"], achievement: "Passed NCAA with Edexcel A-level Mathematics and Physics A*." }
            ]
        }
    ];

    const handleYearClick = year => {
        if (selectedYear === year) {
            setSelectedYear(null); // 如果当前年份已经展开，再次点击时将其关闭
            setSelectedStudent(null); // 关闭学生的详细信息
        } else {
            setSelectedYear(year);
            setSelectedStudent(null); // 新打开一个年份时不显示学生详细
        }
    };

    const handleStudentClick = student => {
        if (selectedStudent === student.name) {
            setSelectedStudent(null); // 如果当前学生已经展开，再次点击时将其关闭
        } else {
            setSelectedStudent(student.name);
        }
    };

    return (
        <div className={styles.portfolio}>
            <h1>学生成就</h1>
            {achievements.map(yearGroup => (
                <div key={yearGroup.year} className={styles.yearGroup}>
                    <h2 onClick={() => handleYearClick(yearGroup.year)} style={{ cursor: 'pointer' }}>
                        {yearGroup.year}
                    </h2>
                    {selectedYear === yearGroup.year && (
                        <div>
                            {yearGroup.students.map(student => (
                                <div key={student.name} className={styles.student}>
                                    <h3 onClick={() => handleStudentClick(student)} style={{ cursor: 'pointer' }}>
                                        {student.name}
                                    </h3>
                                    {selectedStudent === student.name && (
                                        <div className={styles.details}>
                                            <ul>
                                                {student.offers.map((offer, index) => (
                                                    <li key={index}>{offer}</li>
                                                ))}
                                            </ul>
                                            <p>{student.achievement}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Portfolio;
