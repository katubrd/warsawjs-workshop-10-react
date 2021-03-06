import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './input';

class TransactionForm extends Component {
  state = {
    description: '',
    value: '',
    date: '',
    category: '',
  }

  handleInputChange=(key,value )=>{
    console.log(key, value);
    this.setState({ [key] : value})
  }
  render() {
    const { description, value, date, category } = this.state;

    return (
      <form
        className='Transaction-form'
        onSubmit={this.props.onSubmit}
      >
          <Input
            name='description'
            placeholder='Description'
            value={description}
            onChange={this.handleInputChange}
          />
          <Input
            name='value'
            type='number'
            placeholder='value'
            value={value}
            onChange={this.handleInputChange}
          />
          <Input
            name='date'
            type='text'
            placeholder='Date'
            value={date}
            onChange={this.handleInputChange}
          />
      <button>New Transaction</button>
      </form>
    )
  }
};

TransactionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TransactionForm;
