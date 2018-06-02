import React from 'react'
import { connect } from 'react-redux'
import { getTotalBasketPrice } from '../../../selectors'
import { Typography } from '@material-ui/core';
import LocalizedText from  '../../../translate/localized-text'

const Total = ({ totalPrice }) =>

  <Typography variant='subheading'  style={{textAlign: 'center'}}>
    <b style={{paddingRight: 8}}>
    <LocalizedText>Total</LocalizedText>:</b>
    <LocalizedText>{totalPrice}</LocalizedText>

  </Typography >



export default connect(state => ({
  totalPrice: getTotalBasketPrice(state)
})
)(Total)







