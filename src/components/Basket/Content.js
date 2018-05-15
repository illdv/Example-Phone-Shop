import React from 'react'
import { connect } from 'react-redux'
import { getTotalBasketPrice } from '../../helpers'
import ContentValue from './ContentValue'
import { isEmpty } from 'ramda'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';

import { CheckoutBasket } from '../../Buttons'

const Content = ({ phones, totalPrice, checkoutBasket }) => {

  const getBody = () => <React.Fragment>{
    phones.map(phone =>
      <ContentValue phone={phone} key={phone.id} />
    )
  }
    <TableRow>
      <TableCell>
        <b>Total:</b>
        <span> ${totalPrice}</span>
      </TableCell>


      <TableCell>
        <CheckoutBasket phones={phones} />
      </TableCell>
    </TableRow>
  </React.Fragment>





  return <Table>
    <TableBody>
      {isEmpty(phones) ?
        <TableRow>
          <TableCell>Your shopping cart is empty </TableCell>
        </TableRow> :
        getBody()
      }
    </TableBody>
  </Table>
}

export default connect(state => ({
  totalPrice: getTotalBasketPrice(state)
})
)(Content)