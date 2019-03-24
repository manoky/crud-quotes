import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo,faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
library.add(faIgloo,faTrashAlt, faEdit)

class QuoteListItem extends Component {

  state = {
    updating: false,
  }

  componentDidUpdate() {
    let textArea;
      if(this.state.updating){
        textArea = this.refs.quote;
        textArea.focus();
        textArea.select();
      }
  }


  update = () => {
    this.setState({
      updating: true,
    })
  }

  //quote, author, image, id
  sendUpdate = () => {
    this.props.updateQuote(this.refs.quote.value,
       this.refs.author.value,
       this.refs.image.value,
       this.props.quote.id
      )
    this.setState({
      updating: false,
    })
  }

  displayForm = () => (
    <form style={{ margin: 'auto'}}
      onSubmit={this.sendUpdate}
    >
      <div className="form-group">
        <input type='text' ref='author'
          placeholder='author'
          className="form-control"
          defaultValue={this.props.quote.author}
          required
        />
      </div>
      <div className="form-group">
        <input
          type='text' ref='image'
          placeholder='enter image url'
          className="form-control"
          defaultValue={this.props.quote.image}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          ref='quote'
            placeholder='enter quote'
            className="form-control"
            defaultValue={this.props.quote.quote}
            required
          />
      </div>
      <button className="btn btn-success">save</button>
    </form>
  );
  

  displayList = () => (
    <div className="row QuoteListItem align-items-center">
      <div className="col-auto">
        <div style={{width: '150px'}}>
          <img src={this.props.quote.image} style={{width: '100%'}}/> 
        </div>
      </div>
      <div className="col-md-3 qoute-cols">{this.props.quote.quote}</div>
      <div className="col-md-3 qoute-cols"> - {this.props.quote.author}</div>
      <div className="col-md-3 qoute-cols"> 
        <span className="delete-quote" onClick={()=> this.props.deleteQuote(this.props.quote.id)}>
          <FontAwesomeIcon icon="trash-alt" />
        </span>&nbsp;&nbsp;
        <span className="update-quote" onClick={this.update}>
          <FontAwesomeIcon icon="edit"/>
        </span>
      </div>
    </div>
  )
    
  render(){
    return (
      this.state.updating ? this.displayForm() : this.displayList()
    )
  }
}

QuoteListItem.propTypes = {
  quote: PropTypes.object,
  updateQuote: PropTypes.func,
  deleteQuote: PropTypes.func,
}

export default QuoteListItem;