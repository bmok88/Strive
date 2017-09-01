import React, { Component } from 'react';
import axios from 'axios';

import Display from '../components/Display';

class Home extends Component {
  state = {
    quote: '',
    display: ''
  };

  componentDidMount() {
    axios
      .get(
        'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        { cache: false }
      )
      .then(quote => {
        this.setState({
          quote: quote.data[0]
        });
      });
  }

  formatQuote = quoteData => {
    let quote;

    if (this.state.quote) {
      quote = quoteData.content.slice(3, quoteData.content.length - 6);
    }
    const author = quoteData.title;

    return (
      <div className="quote">
        <h1>{`"${quote}"`}</h1>
        <h2>-{author}</h2>
      </div>
    );
  };

  chooseDisplay = e => {
    e.preventDefault();
    this.setState({
      display: e.target.value
    });
  };

  render() {
    return (
      <div className="home">
        {this.formatQuote(this.state.quote)}
        <ul className="home-nav">
          <li>
            <a
              role="menuitem"
              tabIndex="0"
              onClick={e => this.chooseDisplay(e)}
            >
              Goals
            </a>
          </li>
          <li>
            <a
              role="menuitem"
              tabIndex="0"
              onClick={e => this.chooseDisplay(e)}
            >
              Food Log
            </a>
          </li>
          <li>
            <a
              role="menuitem"
              tabIndex="0"
              onClick={e => this.chooseDisplay(e)}
            >
              Workout Tracker
            </a>
          </li>
        </ul>
        <Display display={this.state.display} />
      </div>
    );
  }
}

export default Home;
