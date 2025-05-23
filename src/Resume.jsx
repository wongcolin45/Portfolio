// Resume.jsx
import React from 'react';
import Nav from './Nav.jsx';
import PDFViewer from './PDFViewer.jsx';
import './styles/resume.css';


const Resume = () => {
    const fileUrl = '/assets/ColinWongResume.pdf';

    return (
        <div className="main">
            <Nav />

            <div className="resume-header">
                <a
                    href={fileUrl}
                    download="Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="download-btn">📄 Download PDF</button>
                </a>
            </div>

            <PDFViewer fileUrl={fileUrl} />
        </div>
    );
}

export default Resume;
