import React from 'react'
import Banner from './banner'
import LoginForm from './loginForm'

class Index extends React.Component {
  render() {
    return (
      <div id="content" style={{ paddingTop: '0px' }}>
        <div className="row" style={{ padding: '30px 0' }}>
          <div className="col-xs-10 col-xs-offset-1">
            <div className="row">
              <Banner />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index;