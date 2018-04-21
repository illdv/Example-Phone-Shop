import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTotalBasketPrice } from '../helpers'

import RaisedButton from 'material-ui/RaisedButton'
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart'


const BasketCart = ({ totalBasketCount, totalPrice }) => {

  return <RaisedButton
    label={`${totalBasketCount} ${totalBasketCount > 1 ? 'phones' : 'phone'} - $${totalPrice}`}
    labelPosition="before"
    primary={true}
    icon={<ShoppingCart />}
    fullWidth={true}
    containerElement={<Link to='/basket' />}
  />

}







export default connect(
  state => ({
    totalBasketCount: state.basket.length,
    totalPrice: getTotalBasketPrice(state)
  })
)(BasketCart)