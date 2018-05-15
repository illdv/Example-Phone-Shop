import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchPhone } from '../../AC'


import SearchBar from 'material-ui-search-bar'


class Search extends Component {

  state = {
    value: ''
  }

  render() {

    return (
      <SearchBar style={{ marginRight: 'auto', marginLeft: 'auto' }}
        onChange={(targetValue) => this.setState({
          value: targetValue
        })}
        onRequestSearch={this.handleSubmit}
        value={this.state.value}
      />
    )
  }

  capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

  handleSubmit = () => {
    this.props.searchPhone(this.capitalize(this.state.value))
    this.setState({
      value: ''
    })
  }
}

export default connect(null, { searchPhone })(Search)