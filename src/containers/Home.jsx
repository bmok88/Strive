import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    quote: ''
  };

  componentDidMount() {
    axios
      .get(
        'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
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
      <span className="quote">
        <h1>{`"${quote}"`}</h1>
        <h2>-{author}</h2>
      </span>
    );
  };

  render() {
    return <div className="home">{this.formatQuote(this.state.quote)}</div>;
  }
}

export default Home;
