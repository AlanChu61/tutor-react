import React from 'react';
import styles from "./AboutMe.module.css";

function AboutMe() {
    const resumePath = '/Resume.pdf';

    return (
        <div className='row'>
            <div className={`col-12 card ${styles.selfIntro}`} id="about">
                <h1>About Me</h1>
                <p>
                    Passionate and technically skilled software developer with experience in full-stack web development and operations management. Adept in delivering high-quality web applications and optimizing processes while leading cross-functional teams to drive customer satisfaction. Equipped with the knowledge and experience to provide accessible and extensive solutions to meet project objectives within agreed parameters.
                </p>
                <div className='btn-container'>
                    <button className={`${styles.button}`}>
                        <a href={resumePath} target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </button></div>
            </div></div>
    );

}

export default AboutMe;
