import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    render () {
        return (
            <footer className="footer-container">
                <div className="footer">
                    <nav className="footer-nav">
                        <ul className="footer-nav-list">
                            <Link>About</Link>
                            <Link>Developers </Link>
                            <a
                                className="footer-aa-link"
                                href="https://www.appacademy.io/"
                            >
                            </a>
                        </ul>
                    </nav>
                </div>
            </footer>
        )
    }
};

export default Footer;
