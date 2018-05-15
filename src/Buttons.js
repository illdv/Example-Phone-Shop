import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { addPhoneToBasket } from './AC'
import { AddShoppingCart, Reply, Payment } from '@material-ui/icons';

import { Button, Tooltip } from 'material-ui/'






export const Continue = () => (
  <Tooltip id="continue-shopping-icon" title="continue shopping" >
    <Button variant="fab"
      component={Link} to='/phones'
      style={{ position: 'absolute', right: '0', top: '0' }}
      color='default'
    >
      <Reply />
    </Button>
  </Tooltip>


)

export const CheckoutBasket = ({ phones }) => (
  <Tooltip id="checkout-icon" title="continue shopping">
    <Button
      variant='fab'
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

