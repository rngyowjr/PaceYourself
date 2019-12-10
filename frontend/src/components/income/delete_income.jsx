import React from 'react';
import '../../stylesheets/delete.scss'

class DeleteIncome extends React.Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.deleteIncome(this.props.incomeId);
    window.location.reload();
  }

  render() {
    return (
      <div className="delete-modal-container">
        <div className="delete-content-content">
          <p className="delete-modal-message">Are you SURE you want to delete this income?</p>
          <div className="delete-button-container">
            <button className="delete-yes-button">Yes</button>
            <button className="delete-no-button">No</button>
          </div>
        </div>
      </div>
      // <div className="delete-modal">
      //   THIS IS A TEST
      //   <button 
      //     className="index-delete-button"
      //     onClick={this.handleDelete}
      //   >Modal Delete</button>
      // </div>
    );
  }
}

export default DeleteIncome;