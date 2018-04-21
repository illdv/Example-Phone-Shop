import React from 'react'
import { connect } from 'react-redux'
import { getTotalBasketPrice } from '../../helpers'
import ContentValue from './ContentValue'
import { isEmpty } from 'ramda'

const Content = ({ phones, totalPrice }) => {

  const getBody = () => (
    <div className='table-responsive'>

      <table className='table-bordered table-condensed'>
        <tbody>
          {phones.map(phone =>
            <ContentValue phone={phone} key={phone.id} />
          )}
          <tr className='row'>
            <td className='col'>
              <b>Total:</b>
              <span> ${totalPrice}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>)

  return <div className='col-md-9'>

    {isEmpty(phones) ?
      <div>Your shopping cart is empty</div> :
      getBody()
    }
  </div>
}

export default connect(state => ({
  totalPrice: getTotalBasketPrice(state)
}))(Content)