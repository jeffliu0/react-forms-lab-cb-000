import React from "react";

export default class TwitterMessage extends React.Component {

  constructor() {
    super();

    this.numChars = 0

    this.state = {
      currentChars: this.numChars
    }
  }


  handleChars = (e) => {
    this.setState({
      currentChars: e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange = {this.handleChars}/>
        <span> {this.props.maxChars - this.state.currentChars} </span>
      </div>
    );
  }
}
