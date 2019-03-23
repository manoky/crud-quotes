import React, {Component} from 'react';

class Quote extends Component {
  
  render() {
    return (
      <form style={{ margin: 'auto'}} 
      onSubmit={(e) => {e.preventDefault();
                          this.props.addQuote(this.refs.quote.value,
                          this.refs.author.value, 
                          this.refs.image.value )}}
                        >
        <div className="form-group">
          <input type='text' ref='author'
            placeholder='author'
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <input
            type='text' ref='image'
            placeholder='enter image url'
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            ref='quote'
              placeholder='enter quote'
              className="form-control"
              required
            />
        </div>
        <button className="btn btn-success">submit</button>
      </form>
    )
  }
}
export default Quote;
