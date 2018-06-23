import React, { Component } from 'react'

class Index extends Component {
  render() {    
    return (
      <section className="hero is-medium is-bold">
        { this.props.children }
      </section>
    )
  }
}

export default Index