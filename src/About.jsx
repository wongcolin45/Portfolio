// About.jsx
import React from 'react';
import Nav from './Nav';
import './styles/about.css';
import profilePic from './assets/profile.jpg';
import docker from './assets/tech-stack/docker.png';
import spring from './assets/tech-stack/springboot.png';
import postgres from './assets/tech-stack/postgres.png';
import react from './assets/tech-stack/react.png';
import Links from "./Links.jsx";

const techStack = [
    react, spring, postgres, docker,
]

const links = [
    'https://react.dev/',
    'https://spring.io/projects/spring-boot',
    'https://www.postgresql.org/',
    'https://www.docker.com/'
]

const coursework = [
    'Object-Oriented Design',
    'Algorithms and Data',
    'Computer Systems',
    'Intro to Databases',
    'Discrete Structures',
    'Information Visualization',
    'Intro to Math Reasoning',
];

const About = () => {
    return (
        <div className="main about-page">
            <Nav />
            <div className="about-section-wrapper">
                {/* Profile and Intro */}
                <div className="profile-container">
                    <img src={profilePic} alt="Colin Wong"
                         className="profile-pic"
                         onClick={() => window.open('https://www.instagram.com/colinwong27/')}/>
                    <div className="intro-text">
                        <h1>Hi, I'm Colin Wong</h1>
                        <p>
                            I’m a driven Computer Science student at Northeastern University specializing in
                            foundational theory and
                            modern software development. With hands-on experience in full-stack web
                            applications—leveraging React for
                            dynamic frontends and Spring Boot for robust backends—I create clean, scalable solutions.
                            I'm currently
                            seeking my first co-op opportunity to contribute my passion for algorithms, system design,
                            and
                            collaborative innovation.
                        </p>
                    </div>
                </div>

                <div className="education-section">
                    <h2>Education</h2>
                    <div className="edu-details">
                        <div>
                            <h3>Northeastern University</h3>
                            <span>Boston, MA</span>
                        </div>
                        <span className="edu-date">Expected May 2027</span>
                    </div>
                    <p>
                        <strong>B.S. in Computer Science</strong> — Concentration: Foundations<br/>
                        <strong>Minor:</strong> Mathematics
                    </p>
                    <p>
                        <strong>GPA:</strong> 3.83/4.00 &nbsp; | &nbsp; <strong>Khoury GPA:</strong> 3.97/4.00
                    </p>
                    {/* Add Coursework Section */}
                    <div>
                        <strong>Relevant Coursework:</strong>
                        <ul className="coursework-list">
                            {coursework.map((course, idx) => (
                                <li key={idx}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="stack-section">
                    <h2>My Current Tech Stack</h2>
                    <div className="tech-stack">
                        {techStack.map((tech, idx) => {
                            return (
                                <img key={idx} src={tech} alt={'tech-image'} onClick={() => window.open(links[idx])}/>
                            )
                        })}
                    </div>
                </div>
                <Links/>
            </div>
        </div>
    );
};

export default About;