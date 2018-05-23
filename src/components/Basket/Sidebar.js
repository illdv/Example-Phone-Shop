import React from 'react'
import { connect } from 'react-redux'
import { getTotalBasketPrice } from '../../helpers'
import { Typography } from '@material-ui/core';
import { CheckoutBasket } from '../../Buttons'


const Total = ({ totalPrice }) =>

  <Typography variant='subheading' >
    Total:
     ${totalPrice}
  </Typography >



export default connect(state => ({
  totalPrice: getTotalBasketPrice(state)
})
)(Total)








export const Checkout = ({ phones }) => <CheckoutBasket phones={phones} />





