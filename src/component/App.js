import React, {Component} from 'react';
import axios from 'axios';
import QuoteList from './QuoteList';
import Header from './Header';
import './App.scss';


class App extends Component {
  state = {
    quotes: [],
    adding: false,
  }
  
  componentDidMount() {
    axios.get('/api/quotes')
      .then(resp => resp.data)
      .then(quotes => this.setState({
        quotes,
      }))
  }
  
  // showing the add button
  add = () =>(
    this.setState({
      adding: true,
      show: 'none',
    })
  );

  addQuote = (quote, author, image) => {
    const data = {quote, author, image}
    axios.post('/api/quotes', data)
    .then(resp => resp.data)
    .then((quote) =>this.setState(prevState =>({
        quotes: [
          ...prevState.quotes,
          quote
        ],
          adding: false,
    })))
    .catch(err => console.log(err))
  }

  updateQuote = (quote, author, image, id) => {
    const data = {quote, author, image};
    axios.put(`/api/quotes/${id}`, data)
      .then(resp => resp.data)
      .then((quotes) => this.setState({quotes}))
      .catch(err => console.log(err))
  }

  deleteQuote = (id) => {
    axios.delete(`/api/quotes/${id}`)
      .then(() => this.setState(prevState => ({
        quotes: prevState.quotes.filter(q => q.id !== id).sort((a,b) => b-a)
      })))
      .catch(err => console.log(err))
  }

  render() {
    const { quotes, adding } = this.state;
    // return quotes in a descending order
    const sortedQoutes = quotes.sort((a,b) => b-a);
    return (
      <div className="container-fluid">
        <Header add= {this.add}/>
        <QuoteList
         quotes={sortedQoutes}
         addQuote={this.addQuote}
         adding={adding}
         deleteQuote={this.deleteQuote}
         updateQuote={this.updateQuote}
        />
      </div>
    );
  }
}

export default App;

