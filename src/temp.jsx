import React from 'react';
import './App.css';

class BoroughForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <input id="results" type="text" value={this.state.value} onChange={this.handleChange} placeholder="e.g. 'City of London', 'Tower Hamlets' or 'Camden'" autocomplete="off"/>
              <input class="submit-button" type="submit" value="Search"/>       
            </form>  
        );
    }
}

function App() {
    return (
      <div id="home">
        <img class="banner" alt="Rightmove banner image" src="https://media.rightmove.co.uk/hero_image.jpg"></img>
          <div class="selector-container">
            <h1>Choose a borough</h1>
            <h2>Search for a London borough that you want to scrape from</h2>
            <BoroughForm />
        </div>
      </div>
    );
}

export default App;