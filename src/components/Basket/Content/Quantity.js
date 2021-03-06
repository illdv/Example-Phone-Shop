import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleQuantityToBasket } from '../../../AC'
import { Grid, Typography, IconButton, Divider, withWidth } from '@material-ui/core';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';



class Quantity extends Component {
  state = {
    input: this.props.phone.count
  }



  render() {

    return <Grid container direction={this.props.width === 'xs' ? 'column' : 'row'} alignItems="center" justify='center'>
      <Grid item >
        <IconButton onClick={
          this.handleInput(this.state.input, '-')
        }
          color='inherit'
        >
          <RemoveCircleOutline />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography variant='subheading' align='center' >{this.state.input} <Divider /> </Typography>
      </Grid>
      <Grid item >
        <IconButton onClick={this.handleInput(this.state.input, '+')}
          color='inherit' >
          <AddCircleOutline />
        </IconButton>
      </Grid>
    </Grid>
  }

  handleInput = (state, sign) => () => {

    const currentNum = sign === '-' ? state - 1 : state + 1

    currentNum <= 3 && this.props.handleQuantityToBasket(currentNum, this.props.phone)
  }

}

export default withWidth()(connect(
  null,
  { handleQuantityToBasket }
)(Quantity))