import React, { Component } from 'react'

class Index extends Component {
  render() {
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="../">
                <h1>Project Starter</h1>
              </a>
              <span className="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                <div className="tabs is-right">
                  <ul>
                    <li><a a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                  </ul>
                  <span className="navbar-item">
                    <a className="button is-outlined" href="https://github.com/Thammasok/frontend-react">
                      <span className="icon">
                        <i className="fa fa-github"></i>
                      </span>
                      <span title="Hello from the other side">View Source</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Index