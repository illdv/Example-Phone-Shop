import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchPhone } from '../AC'


class Search extends Component {

  state = {
    value: ''
  }

  render() {

    return (
      <div className='well'>
        <h3 className='lead'>Quick shop</h3>
        <form onSubmit={this.handleSubmit} className='input-group'>
          <input onChange={this.handleChange} type='text' className='form-control' placeholder='search' />
        </form>
      </div>
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
    this.props.searchPhone(capitalize(this.state.value))
  }
}

export default connect(null, { searchPhone })(Search)