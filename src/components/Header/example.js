import React, { Component } from 'react'


class Example extends Component {


  state = {
    disabled: true
  }

  clickHandlers = () => {
    this.setState({
      disabled: !this.state.disabled
    })

  }

  render() {


    return (

      <div>
        <button disabled={this.state.disabled}>Тест</button>
        <button onClick={this.clickHandlers}>Сменить</button>
      </div>
    );
  }

};

export default Example