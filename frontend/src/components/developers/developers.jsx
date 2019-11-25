import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/developers.scss';
import eunice from '../../assets/images/eunice.jpg'
import kim from '../../assets/images/kim.jpg'
import alex from '../../assets/images/alex.jpg'

class Developers extends React.Component {

    render() {
        return (
            <div className="dev-container"> 
                <div className="dev-background-container">
                    <div className="dev-background"></div>
                </div>
                <div className="dev-content-container">
                    <div className="dev-header-container">
                        <div className="dev-header">
                            Howdy, let us introduce ourselves :)
                        </div>
                    </div>
                    <div className="dev-photo">
                        <img src={kim} alt="Kim" />
                    </div>
                    <div className="dev-description-container">
                        Hey There I'm Kim! (this is my description)
                    </div>
                    <div className="dev-photo">
                        <img src={eunice} alt="Eunice"/>
                    </div>
                    <div className="dev-description-container">
                        Hey There I'm Eunice! (this is my description)

                    </div>
                    <div className="dev-photo">
                        <img src={alex} alt="Alex" />
                    </div>
                    <div className="dev-description-container">
                        Originally from Connecticut, Alex studied Geoscience at Skidmore College 
                        in New York. After graduating, he worked as a surveyor and a ski patroller 
                        before hearing the call of the code. He is now a rising software engineer with
                        a passion for games and sushi, though not exclusivly in that order.
                    </div>
                    <div className="dev-alt-container">
                        Ready to make a budget?
                        <Link
                            to="/login"
                            className="dev-alt-link"
                        > Head Back Here  </Link>
                    </div>
                </div>
            </div>
        )
    }
};

export default Developers;
