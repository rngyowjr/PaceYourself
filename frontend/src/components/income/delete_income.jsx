import React from 'react';
import '../../stylesheets/delete.scss'

class DeleteIncome extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.props.income;
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const income = Object.assign({}, this.state);
    this.props.updateIncome(income)
    this.props.history.push('/income')
  }

  render() {
    return (
      <div className="income-delete">
      THIS IS A TEST
      </div>
    );
  }
}

export default DeleteIncome;