import React from 'react';
import '../../stylesheets/delete_modal.scss'

class DeleteIncome extends React.Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
    this.closeDelete = this.closeDelete.bind(this);
  }

  handleDelete(incomeId) {
    this.props.deleteIncome(incomeId);
    window.location.reload();
  }

  closeDelete() {
    document.querySelector('.avgrund-cover').style.visibility = "hidden";
    document.querySelector('.delete-modal').style.visibility = "hidden";
  };

  render() {
    return (
      <div className="delete-modal-container">
        <div className="delete-content-content">
          <p className="delete-modal-message">Are you SURE you want to delete this income?</p>
          <div className="delete-button-container">
            <button 
              className="delete-no-button"
              onClick={this.closeDelete}
            >No</button>
            <button 
              className="delete-yes-button"
              onClick={() => this.handleDelete(this.props.incomeId)}
            >Yes</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteIncome;