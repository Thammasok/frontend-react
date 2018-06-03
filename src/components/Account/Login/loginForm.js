import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { login } from '../../../actions/auth'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.dispatch(login(this.state.username, this.state.password))
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="row" style={{ padding: '30px 0' }}>
          <div className="col-sm-10 col-sm-offset-1">
            <div className="text-center">
              <img src="https://fs.chomchob.com/file/image?path=/admin/upload/2018-05-30/2e1d9cd3-9a83-443a-abd4-a5a07209a207" alt="..." width="60px" /><br />
              <span className="text-xxxl text-light text-accent">Chom</span><span className="text-xxxl text-second">CHOB</span><br />
              <p className="text-lg text-light text-default-light">Login to use Dashboard of ChomCHOB Platform.</p>
            </div>
            <form onSubmit={this.handleSubmit.bind(this)} method="POST" className="form">
              <div className="form-group floating-label">
                <input type="text" className="form-control" id="username-tb" name="username" value={this.state.username} onChange={this.handleChange.bind(this)} />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-group floating-label">
                <input type="password" className="form-control" id="password-tb" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} />
                <label htmlFor="password">Password</label>
              </div>
              <div className="text-center">
                <p>
                  <button type="submit" className="btn btn-primary">Login</button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(LoginForm);