import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTotalBasketPrice } from '../../helpers'
import ContentValue from './ContentValue'


class Content extends Component {


  render() {
    const { phones, totalPrice } = this.props
    return <div className='table-responsive'>

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
    </div>
  }

}
export default connect(state => ({
  totalPrice: getTotalBasketPrice(state)
}))(Content)