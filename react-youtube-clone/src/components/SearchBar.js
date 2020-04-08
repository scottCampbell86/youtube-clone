import React, { Component } from 'react';
import '../style/SearchBar.css'

class SearchBar extends Component {

  state = { term: ''}

  handleInput = (e) => {
    //e.preventDefault()
    this.setState({
      term: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleFormSubmit(this.state.term)
  }



  render() {
    return (
      <div className="search-bar ui segment">
        <form 
          className="ui form"
          onSubmit={this.handleSubmit}
          >
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange={this.handleInput} 
              //or, onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;