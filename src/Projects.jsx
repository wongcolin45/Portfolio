import React from 'react';
import Nav from "./Nav.jsx";
import chessImg from './assets/chess.png';
import graphNeuImg from './assets/graphneu.png';
import parcelImg from './assets/parcel.png';
import oasisImg from './assets/oasis.png';

import './project.css';

const projects = [
    {
        title: "NEU Bites",
        tech: "React, Flask, Supabase (PostgreSQL), AWS",
        date: "Sep 2024 – Nov 2024",
        goal: "Create a food discovery web app for students in Boston",
        description: "NEU Bites was my first group coding project, developed as part of Oasis, Northeastern's introductory web development club. The goal of the project was to build a web app that helps students discover and explore food options around the Boston area based on location, cuisine, and student reviews. Our team collaborated on designing the user experience, building both the frontend and backend, and deploying the final product. I was solely responsible for the frontend, which was built in React. I implemented components for search, filtering, and restaurant listings, and helped connect our UI to the Flask backend APIs. I also learned how to use Git more effectively in a team setting, including working with branches, resolving merge conflicts, and coordinating pull requests. This project taught me the fundamentals of full-stack development, API integration, and team collaboration. It was a valuable experience that gave me the confidence to take on more complex software engineering projects in the future.",
        image: oasisImg,
        github: "https://github.com/Oasis-NEU/f24-group1"
    },
    {
        title: "Multiplayer Chess",
        tech: "React, Spring Boot, JUnit, STOMP.js, SockJS",
        date: "Nov 2024 – Jan 2025",
        goal: "Create a chess game that can be played online with friends",
        description: "I built this project to practice the Java programming skills I learned in my Object-Oriented Design class. Previously, I had used simpler backend frameworks like FastAPI and Express, so I wanted to try something new. This led me to Spring Boot, a Java framework for building web applications. I found this project to be a great way to learn the framework and how to incorporate it into a full-stack application. While Java can be a bit verbose, I also find it very powerful, and this project helped me realize that I don't have to use JavaScript for everything. Even though I enjoy using JavaScript for frontend development, I generally prefer Java for other programming needs. This project also helped me learn about WebSockets, a protocol that allows real-time communication between the client and server. I used WebSockets to enable real-time updates to the chess board, which was especially helpful since I initially implemented the chess API with RESTful endpoints, making state updates more difficult.",
        image: chessImg,
        github: "https://github.com/wongcolin45/Chess2Players"
    },
    {
        title: "Parcel",
        tech: "React, FastAPI, AWS S3, Textract, Gemini",
        date: "Jan 2025 – April 2025",
        goal: "Create a healthcare document scanner and analyzer",
        description: "I built this project as part of Forge Product Lab, a club here at Northeastern. Our goal was to develop a full-stack web application for analyzing healthcare plans. As a member of the backend team, I worked closely with the frontend team to set up robust endpoints for a FastAPI application. The user uploads personal information and multiple healthcare plan PDFs, which we store securely in AWS S3. We leveraged AWS Textract to parse document data—extracting plan benefits, costs, and coverage details—and then passed the extracted text through a Gemini model to generate user-friendly summaries and insights. I implemented authentication and data validation to ensure privacy and reliability. Over the course of the project, I optimized API performance, managed asynchronous tasks for large file processing, and collaborated on designing RESTful routes that simplified frontend integration. Through this experience, I gained in-depth knowledge of Amazon Web Services, best practices for secure file handling, and the importance of clear API design when connecting frontend and backend services.",
        image: parcelImg,
        github: "https://github.com/riasingh125/forge-spring25-software"
    },
    {
        title: "Graph NEU",
        tech: "Next.js, Zustand, FastAPI, NetworkX, SQLAlchemy, PostgreSQL, Docker",
        date: "April 2025 – Present",
        goal: "Provide a graph visualization of the NEU course catalog",
        description: "I built this project after my Database Design class to practice designing my own database. I used BeautifulSoup to scrape the NEU course catalog and store the data in a PostgreSQL database. Then I used FastAPI to create a RESTful API to serve that data to a Next.js frontend. I kinda wanted to incorporate some graph theory I learned in my Algorithms class, so there's a lot of cool stuff I could add when displaying the courses. Right now I can only show a simple graph of each course and its associated prerequisites. Currently, many of the edges intersect, so I need to implement an efficient algorithm that provides x and y coordinates for each course node to minimize crossings. Based on my research, I believe minimizing edge crossings is an NP-hard problem, so that will be fun. On top of that, I also plan to implement meta-graphs to show different schedules and how they lead into different majors and graduation requirements.",
        image: graphNeuImg,
        github: "https://github.com/wongcolin45/Graph-NEU"
    }
];



projects.reverse();

const Projects = () => {

    const handleClick = (link) => window.open(link, "_blank");

    return (
        <div className="main">
        <Nav/>
            <h1>What I have Built</h1>
            {projects.map((proj) => (
                <section className="projects-section">
                    <div className="project-card" key={proj.title}>
                        <div className="project-info">
                            <h2>{proj.title}</h2>
                            <div className="project-meta">
                                {/*<span>{proj.tech}</span>*/}
                                <span className="project-date">{proj.date}</span>
                            </div>
                            <p>{proj.description}</p>
                            <span>
                                <strong>{"Tech Stack: "}</strong>
                                {proj.tech}
                            </span>
                        </div>
                        <div className="project-img">
                            <img src={proj.image}
                                 alt={proj.title + " screenshot"}
                                 width="580" height="400"/>
                        </div>
                    </div>
                    <div className="project-link">
                        <button onClick={() => handleClick(proj.github)}>GitHub Repository</button>
                    </div>
                </section>
            ))}

    </div>
    );
}
export default Projects;