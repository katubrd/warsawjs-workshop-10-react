import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloStateful from './components/hello-stateful';
import HelloStateless from './components/hello-stateless';
import Counter from './components/counter';
import TransactionCard from './components/transaction-card';
import TransactionList from './components/transaction-list';
import TransactionFrom from './components/transaction-form';
import Input from './components/input';
import CategoryCard from './components/category-card';
import CategoryList from './components/category-list';



class App extends Component {
  state = {
    transactions: [
      {
        id: 1,
        description: 'Potwierdzenie uczestnictwa w warsztatach WarsawJS',
        value: 20,
        date: '16.09.2017',
        category: 'Edukacja'
      },
      {
        id: 2,
        description: 'Bilet na pociąg',
        value: 120,
        date: '07.09.2017',
        category: 'Transport'
      },
      {
        id: 3,
        description: 'Części do samochodu',
        value: 430,
        date: '26.08.2017',
        category: 'Samochód'
      }
    ],
    categories: [
      {
        id: 1,
        name: 'Edukacja',
        budgeted: 100,
        activity: 50
      },
      {
        id: 2,
        name: 'Transport',
        budgeted: 200,
        activity: 123
      },
      {
        id: 3,
        name: 'Samochód',
        budgeted: 300,
        activity: 170
      }
    ]
  }

  handleRemoveTransaction = ({ id }) => {
    const { transactions } = this.state;

    this.setState({ transactions: transactions.filter(transaction => transaction.id !== id) });
  }

  handleAddTransaction = (transaction) => {
    const { transactions } = this.state;

    this.setState({
      transactions: [
        ...transactions,
        { id: Math.random().toString(36).substring(7), ...transaction }
      ]
    });
  }

  handleChangeCategoryBudget = ({ id, budgeted }) => {
    const { categories } = this.state;
    const categoryIndex = categories.findIndex(category => category.id === id);
    if (categoryIndex === -1) {
      console.error('Category with index ${id} not found')
      return;
    }
    categories[categoryIndex].budgeted = budgeted;
    this.setState({ categories });
  }

  handleRemoveCategory = ({ id }) => {
    const { categories } = this.state;
    this.setState({ categories: categories.filters(category => category.id !== id) });
  }

  handleChangeView = (view) => {
    this.setState({ currentView: view });
  }

  render() {
    const { transactions, categories, currentView } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Zaczynamy zabawę</h2>
        </div>
        <p className="App-intro">
          wooohooo
        </p>
        <div>
          <button onClick={() => this.handleChangeView('transaction')}>Transactions</button>
          <button onClick={() => this.handleChangeView('categories')}>Categories</button>
        </div>
        {currentView === 'transaction' ? (
          <TransactionList
           items={transactions}
           onRemoveTransaction={this.handleRemoveTransaction}
           onAddTransaction={this.handleAddTransaction}
           />) : (
             <CategoryList
             items={categories}
             handleChangeCategoryBudget={this.handleChangeCategoryBudget}
             onRemoveCategory={this.handleRemoveCategory}/>
           )}
      </div>
    );
  }
}


export default App;
