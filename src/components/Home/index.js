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
      <div>
        <div className="offcanvas"></div>
        <div id="content" className="one-nevbar">
          <section>
            <h1>New Project</h1>
            <p>This is project starter</p>
          </section>
        </div>
        <div className="offcanvas"></div>
      </div>
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