import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removePhoneFromBasket, handleQuantityToBasket } from '../../AC'



import Delete from '@material-ui/icons/Delete'


import { TextField, TableCell, TableRow, Button, Tooltip, IconButton, Typography, Grid } from '@material-ui/core';



class ContentValue extends Component {

  state = {
    input: this.props.phone.count
  }

  render() {
    const { phone, removePhoneFromBasket, lengthBasket } = this.props
    const img = <img style={{ maxWidth: '100%' }} src={phone.image} alt={phone.name} />
    const name = <span>{phone.name}</span>
    const quantity = <TextField style={{ width: 30 }}
      id="quantity"
      type="number"
      value={this.state.input}
      onChange={this.handleInput(phone)}
      onBlur={(e) =>
        !e.target.value && this.setState({
          input: lengthBasket
        })
      }
    />
    const removePhone = <React.Fragment>
      <Typography variant='body2'>
        {`$${phone.price}`}
      </Typography>
      <Tooltip id="tooltip-icon" title="Delete phone">
        <IconButton variant='fab' color="secondary"
          onClick={() => removePhoneFromBasket(phone.id)}
          size='large'  >
          <Delete />

        </IconButton>

      </Tooltip>
    </React.Fragment>

    return (
      <Grid container alignItems ='center' >

        {[img, name, quantity, removePhone].map(cell =>
          <Grid item xs={3} key={Date.now() + Math.random()} >
            {cell}
          </Grid>
        )
        }
      </Grid>

    )
  }

  handleInput = phone => e => {
    const event = e.target.value
    this.setState(() => {
      return event >= 0 ?
        { input: event } :
        { input: 0 }
    })

    event && this.props.handleQuantityToBasket(event, phone)
  }

}

export default connect(
  state => ({
    lengthBasket: state.basket.length
  }),
  { removePhoneFromBasket, handleQuantityToBasket }
)(ContentValue)