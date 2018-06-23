import React, { Component } from 'react'

class Index extends Component {
  componentDidMount() {
    document.title = "404 Page not found."
  }

  render() {
    const fontSymbol = { fontSize: '180px' }
    return (
      <div className="container">
        <div className="text-center">
          <h1 className="text-default text-primary" style={fontSymbol}>404</h1>
          <label className="text-xl text-default">Page not found.</label>
          <br />
          <span className="text-default-light">We are sorry but the page you are looking for does not exist.<br />You could return to the </span>
          <a href="/">Homepage</a>
        </div>
      </div>
    );
  }
}

export default Index