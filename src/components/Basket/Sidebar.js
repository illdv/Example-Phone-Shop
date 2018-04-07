import React from 'react'

import { connect } from 'react-redux'

import { checkoutBasket, cleanBasket } from '../../AC'

const Sidebar = ({ phones, cleanBasket, checkoutBasket }) => {

  return <React.Fragment>
    <button onClick={cleanBasket} className='btn btn-danger btn-block'>
      Clear Basket
  </button>
    <button onClick={() => checkoutBasket(phones)} className='btn btn-success btn-block'>
      Checkout
    </button>
  </React.Fragment>

}

export default connect(
  null,
  { checkoutBasket, cleanBasket }
)(Sidebar)