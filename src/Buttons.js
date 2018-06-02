import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPhoneToBasket } from './AC'
import { AddShoppingCart, ArrowBack } from '@material-ui/icons';
import LocalizedText from './translate/localized-text'
import { Button, Tooltip, IconButton } from '@material-ui/core'



export const Continue = ({ visibilityHidden }) => {

  return <Tooltip id="continue-shopping-icon" title={<LocalizedText>continue shopping</LocalizedText>}>
    <IconButton variant="fab"
      component={Link} to='/phones'
      style={visibilityHidden}
      color='inherit'>
      <ArrowBack />
    </IconButton>
  </Tooltip>
}

const addToBasket = ({ addPhoneToBasket, phone }) => (
  <Button
    variant="raised"
    color="secondary"
    fullWidth={true}
    onClick={() => addPhoneToBasket(phone)}>
    <AddShoppingCart />
   <LocalizedText>buy now</LocalizedText>
</Button>
)


export default connect(
  null,
  { addPhoneToBasket }
)(addToBasket)

