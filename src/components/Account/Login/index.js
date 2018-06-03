import React from 'react'
import LoginForm from './loginForm'

class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default Index;