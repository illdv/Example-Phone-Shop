import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchPhone } from '../../AC'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import { FormControl, InputAdornment, IconButton, Input } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import {head,keys} from 'ramda'
const styles = theme => {
  return ({
    root: {
      width: 200,
      color: 'white',
      background: theme.palette.primary.light,
      borderRadius: 5,
      transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      opacity: 0.7,
      padding: theme.spacing.unit,
      '&:hover': {
        opacity: 1,
      },
    },
    focused: {
      width: 250,
      background: theme.palette.primary.dark
    }

  })
}

class Search extends Component {
  state = {
    value: '',
    placeholder : ''
  }

  static getDerivedStateFromProps(props, state) {
 if (head(keys(props.lang)) === 'English') {
   return {
     placeholder: 'Search'
   }
  }
   if (head(keys(props.lang)) === 'Russian') {
    return {
      placeholder: 'Поиск'
    }
 }
    return null
  }

  render() {

    
    const { classes } = this.props

    return (
      <FormControl component='form' onSubmit={this.handleSubmit}>
        <Input
          id="search-field"
          placeholder={this.state.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
          disableUnderline
          classes={{
            root: classes.root,
            focused: classes.focused
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                color='inherit'
                onClick={this.handleSubmit}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    )
  }

  capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchPhone(this.capitalize(this.state.value))
    this.setState({
      value: ''
    })
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }
}

export default compose(
  withStyles(styles),
  connect(state => ({
    lang: state.language
  }), { searchPhone }))(Search)