import React from 'react';
import '../../stylesheets/delete.scss'

class DeleteIncome extends React.Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(incomeId) {
    this.props.deleteIncome(incomeId);
    window.location.reload();
  }

  render() {
    return (
      <div className="delete-modal-container">
        <div className="delete-content-content">
          <p className="delete-modal-message">Are you SURE you want to delete this income?</p>
          <div className="delete-button-container">
            <button 
              className="delete-yes-button"
              onClick={() => this.handleDelete(this.props.incomeId)}
            >Yes</button>
            <button className="delete-no-button">No</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteIncome;