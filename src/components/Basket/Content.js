import React from 'react'
import { connect } from 'react-redux'
import { getTotalBasketPrice } from '../../helpers'
import ContentValue from './ContentValue'
import { isEmpty } from 'ramda'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';

const Content = ({ phones, totalPrice }) => {

  const getBody = () => {
    return < Table >
      <TableBody>
        {phones.map(phone =>
          <ContentValue phone={phone} key={phone.id} />
        )}
        <TableRow>
          <TableCell>
            <b>Total:</b>
            <span> ${totalPrice}</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table >
  }


  return <div className='col-md-9'>

    {isEmpty(phones) ?
      <div>Your shopping cart is empty</div> :
      getBody()
    }
  </div>
}

export default connect(state => ({
  totalPrice: getTotalBasketPrice(state)
})
)(Content)