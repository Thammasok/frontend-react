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
      <div className="column is-half is-offset-one-quarter">
        <form>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email"  />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />
                {` `}Remember me
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Login</button>
            </div>
          </div>
        </form>
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