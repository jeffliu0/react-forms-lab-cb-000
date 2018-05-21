import React from "react";

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {

      username: '',
      password: ''

    };
  }

  handleUserChange = (e) => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  handlePassChange = (e) => {
    console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    return this.state.username.length < 1 && this.state.password.length < 1 ? null :
      this.props.onSubmit(this.state.username, this.state.password)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" onChange={this.handleUserChange}
            value={this.state.user}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password}
            onChange = {this.handlePassChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
