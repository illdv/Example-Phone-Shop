import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchPhone } from '../AC'

import iconSearch from '@material-ui/icons/Search';

class Search extends Component {

  state = {
    value: ''
  }

  render() {

    return (
      <form onChange={this.handleSubmit} className='input-group'>
        <input type='text' className='form-control' placeholder='search' />


        {/* <RaisedButton
          backgroundColor={fullWhite}
          icon={<SearchIcon />}
          disabled={true}

        /> */}

      </form>
    )
  }

  capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      value: e.target.value
    })


    this.state.value.length >= 2 &&
      this.props.searchPhone(this.capitalize(this.state.value))



  }
}

export default connect(null, { searchPhone })(Search)