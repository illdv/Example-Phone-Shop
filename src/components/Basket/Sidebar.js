import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { isEmpty } from 'ramda'
import { checkoutBasket, cleanBasket } from '../../AC'


import Button from 'material-ui/Button'
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart'
import Payment from '@material-ui/icons/Payment'
import Reply from '@material-ui/icons/Reply'


const Sidebar = ({ phones, cleanBasket, checkoutBasket }) => {

  return (
    <aside className='col-md-3'>
      <Button
        variant='raised'
        component={Link} to='/phones'
        fullWidth={true}
        color='default'
      >
        continue shopping
        <Reply />
      </Button>
      {!isEmpty(phones) &&

        <React.Fragment >

          <Button
            variant='raised'
            component={Link} to='/phones'
            fullWidth={true}
            color='secondary'
            onClick={cleanBasket}
          >
            clear cart
        <RemoveShoppingCart />
          </Button>

          <Button
            variant='raised'
            fullWidth={true}
            color='primary'
            onClick={() => checkoutBasket(phones)}
          >
            checkout
        <Payment />
          </Button>
        </React.Fragment>}
    </aside>
  )

}

export default connect(
  null,
  { checkoutBasket, cleanBasket }
)(Sidebar)