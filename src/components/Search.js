import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchPhone } from '../AC'


class Search extends Component {

  state = {
    value: ''
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className='input-group'>
        <input onChange={this.handleChange} type='text' className='form-control' placeholder='search' />
      </form>
    )
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
    console.log(capitalize(this.state.value));


    this.props.searchPhone(capitalize(this.state.value))
  }
}

export default connect(null, { searchPhone })(Search)