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
      <div className="income-delete">
        THIS IS A TEST
        <button 
          className="index-delete-button"
          onClick={this.handleDelete}
        >Modal Delete</button>
      </div>
    );
  }
}

export default DeleteIncome;