import React from 'react'
import { connect } from 'react-redux'
import { Button, Tooltip } from '@material-ui/core'
import { cleanBasket } from '../../../AC'
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart'


const CleanBasket = ({ cleanBasket, marginRight }) =>
  <Tooltip title='clear basket'>
    <Button variant='raised'
      style={marginRight}
      color='secondary'
      fullWidth
      onClick={cleanBasket}>
      Empty basket
      < RemoveShoppingCart />
    </Button >
  </Tooltip>



export default connect(null,
  { cleanBasket }
)(CleanBasket)














