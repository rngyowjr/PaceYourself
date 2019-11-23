import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/about.scss';

class About extends React.Component {

    render() {
        return (
            <div className="about-container">
                <div className="about-background-container">
                    <div className="about-background"></div>
                </div>
                <div className="about-content-container">
                    <div className="about-header-container">
                        <div className="about-header">
                            Welcome! Let us tell you about our project:
                        </div>
                    </div>
                    <div className="dev-description-container">
                        Blah. Blah. Blah. text. text. text. (this is the description)
                        asdfasfadfafa
                        dsfadfafadfasdf
                        adfadfadfadfadf
                        afdadfasdfafasdf
                        adfadfadfadfadffafa
                        asdfadfasfasdfasdf
                        asdfasfsfd
                    </div>
                    <div className="about-alt-container">
                        Ready to make a budget?
                        <Link
                            to="/login"
                            className="about-alt-link"
                        > Head Back Here  </Link>
                    </div>
                </div>
            </div>
        )
    }
};

export default About;
