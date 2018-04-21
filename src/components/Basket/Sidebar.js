import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { isEmpty } from 'ramda'
import { checkoutBasket, cleanBasket } from '../../AC'

import {
  green500
} from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import RemoveShoppingCart from 'material-ui/svg-icons/action/remove-shopping-cart'
import Payment from 'material-ui/svg-icons/action/payment'
import Reply from 'material-ui/svg-icons/content/reply'

const Sidebar = ({ phones, cleanBasket, checkoutBasket }) => {

  return (
    <aside className='col-md-3'>
      <RaisedButton
        label="Continue shopping"
        containerElement={<Link to='/phones' />}
        labelPosition="before"
        primary={true}
        icon={<Reply />}
        fullWidth={true}
      />
      {!isEmpty(phones) &&

        <React.Fragment >
          <RaisedButton
            label="clear cart"
            labelPosition="before"
            secondary={true}
            icon={<RemoveShoppingCart />}
            onClick={cleanBasket}
            fullWidth={true}
          />
          <RaisedButton
            labelColor='white'
            label="checkout"
            labelPosition="before"
            backgroundColor={green500}
            icon={<Payment />}
            onClick={() => checkoutBasket(phones)}
            fullWidth={true}
          />
        </React.Fragment>}
    </aside>
  )

}

export default connect(
  null,
  { checkoutBasket, cleanBasket }
)(Sidebar)