import React from 'react';
import './styles/links.css';

import instagram from './assets/instagram.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';

const Links = () => {
    return (
        <div className="social-section">
            <h2>Connect with Me</h2>
            <div className="link-buttons">
                <a
                    href="https://github.com/wongcolin45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github"
                >
                    <img src={github} alt="GitHub Logo" />
                    GitHub
                </a>
                <a
                    href="https://instagram.com/colinwong27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-instagram"
                >
                    <img src={instagram} alt="Instagram Logo" />
                    Instagram
                </a>

                {/* LinkedIn Link */}
                <a
                    href="https://linkedin.com/in/wongcolin45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-linkedin"
                >
                    <img src={linkedin} alt="LinkedIn Logo" />
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Links;