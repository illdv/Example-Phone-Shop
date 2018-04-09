import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removePhoneFromBasket, handleQuantityToBasket } from '../../AC'


class ContentValue extends Component {



  render() {


    const { phone, removePhoneFromBasket } = this.props

    return <tr

      className='row'
    >
      <td className='col'>
        <img className='img-thumbnail' src={phone.image} alt={phone.name} />
      </td>
      <td className='col'>{phone.name}</td>
      <td className='col'>${phone.price}</td>
      <td className='col'>
        <input onChange={this.handleInput(phone.id)} type='number' defaultValue={phone.count} />
      </td>
      <td className='col'>
        <span onClick={() => removePhoneFromBasket(phone.id)} className='btn btn-block badge-danger' />
      </td>
    </tr>

  }

  handleInput = id => e =>
    this.props.handleQuantityToBasket(e.target.value, id)


}

export default connect(
  null,
  { removePhoneFromBasket, handleQuantityToBasket }

)(ContentValue)