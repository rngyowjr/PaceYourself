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
                Our app will help you manage your income versus your expenses.
                Most of us are spending money without us knowing when we're
                spending too much already. You can actually see your full income
                and expenses for the whole month and year respectively. We also
                provide a visual representation which will tell you if you're in
                a good state or not. If you see a green on the pie chart, it
                means you are still in a good state for not having your expenses
                more than your income/savings.
              </div>
              <div className="about-alt-container">
                Ready to make a budget?
                <Link to="/login" className="about-alt-link">
                  {" "}
                  Head Back Here{" "}
                </Link>
              </div>
            </div>
          </div>
        );
    }
};

export default About;
