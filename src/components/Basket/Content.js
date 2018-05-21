import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getTotalBasketPrice } from '../../helpers'
import ContentValue from './ContentValue'
import { isEmpty } from 'ramda'
import { Table, TableBody, TableCell, TableRow, TableFooter, withWidth, Hidden } from '@material-ui/core';
import Total, { Checkout } from './Sidebar';

const Content = ({ phones, totalPrice, checkoutBasket, width }) => {

  const getBody = () =>
    phones.map(phone =>
      <ContentValue phone={phone} key={phone.id} />
    )

  return isEmpty(phones) ?


    <p> Your shopping cart is empty</p>

    :
    <React.Fragment>

      {getBody()}

      <Hidden mdUp>


        <Total />

        <Checkout phones={phones} />

      </Hidden>
    </React.Fragment>
}

export default compose(
  withWidth(),
  connect(state => ({
    totalPrice: getTotalBasketPrice(state)
  })
  ))(Content)