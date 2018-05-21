import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })

    var haiku = this.state.text.split('\n')

    if(haiku.length === 3){
      if(haiku[0].split(' ').length === 5 &&
        haiku[1].split(' ').length === 3 &&
        haiku[2].split(' ').length === 5){
        document.getElementById('poem-validation-error').innerText = ''
      }
    }
    else{
      document.getElementById('poem-validation-error').innerText =
      'This poem is not written in the right structure!'
      console.log('Still working')
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onKeyPress={this.handleChange}/>
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
