import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTotalBasketPrice } from '../helpers'

import Button from 'material-ui/Button'
import ShoppingCart from '@material-ui/icons/ShoppingCart'


const BasketCart = ({ totalBasketCount, totalPrice }) => {

  return <Button
    variant='raised'

    color='primary'
    component={Link} to='/basket'
  >
    <ShoppingCart />
    {`${totalBasketCount} ${totalBasketCount > 1 ? 'phones' : 'phone'} - $${totalPrice}`}
  </Button>

}







export default connect(
  state => ({
    totalBasketCount: state.basket.length,
    totalPrice: getTotalBasketPrice(state)
  })
)(BasketCart)