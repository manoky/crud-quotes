import React, {Component} from 'react';
import QuoteListItem from './QuoteListItem';
import Quote from './Quote';

class QuoteList extends Component {
  render() {
    const { quotes, addQuote, ...props} = this.props;

    return (
      <div className="container QuoteList">
       { this.props.adding ? <Quote addQuote={addQuote} /> : quotes.map(quote => (
          <QuoteListItem key={quote.id} quote={quote} {...props} />
        )) }
      </div>
    );
  }
}

export default QuoteList;