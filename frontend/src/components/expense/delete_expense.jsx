import React from 'react';
import '../../stylesheets/delete.scss'

class DeleteExpense extends React.Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
    this.closeDelete = this.closeDelete.bind(this);
  }

  handleDelete(expenseId) {
    this.props.deleteExpense(expenseId);
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
          <p className="delete-modal-message">Are you SURE you want to delete this expense?</p>
          <div className="delete-button-container">
            <button
              className="delete-yes-button"
              onClick={() => this.handleDelete(this.props.expenseId)}
            >Yes</button>
            <button
              className="delete-no-button"
              onClick={this.closeDelete}
            >No</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteExpense;