import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getLocalStorage } from '../../actions/example'

class Index extends Component {
  constructor(props) {
    super(props)
    this.testCall()
  }

  testCall(){
    // this.props.dispatch(addLocalStorage("Thammasok"))
    this.props.dispatch(getLocalStorage())
  }

  render() {
    return (
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Home
            </h1>
            <h2 class="subtitle">
              Project Starter
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

Index.propTypes = {
  messages: PropTypes.object
}

export default connect(mapStateToProps)(Index)