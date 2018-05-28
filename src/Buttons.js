import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { addPhoneToBasket } from './AC'
import { AddShoppingCart, ArrowBack, Payment } from '@material-ui/icons';

import { Button, Tooltip, IconButton } from '@material-ui/core'

export const Continue = ({ visibilityHidden }) => {

  return <Tooltip id="continue-shopping-icon" title="continue shopping" >
    <IconButton variant="fab"
      component={Link} to='/phones'
      style={visibilityHidden}
      color='inherit'

    >
      <ArrowBack />
    </IconButton>
  </Tooltip>
}


export const CheckoutBasket = ({ phones }) => (
  <Tooltip id="checkout-icon" title="checkout purchase">
    <Button
      variant="raised"
      color='primary'
      onClick={() => alert(JSON.stringify(phones))}
    >

      <Payment />
    </Button>
  </Tooltip>
)



const addToBasket = ({ addPhoneToBasket, phone }) => (
  <Button
    variant="raised"
    color="secondary"
    fullWidth={true}
    onClick={() => addPhoneToBasket(phone)}>
    <AddShoppingCart />
    Buy Now
</Button>
)


export default connect(
  null,
  { addPhoneToBasket }
)(addToBasket)

