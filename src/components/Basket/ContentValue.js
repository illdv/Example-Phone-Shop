import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removePhoneFromBasket, handleQuantityToBasket } from '../../AC'


class ContentValue extends Component {


  state = {
    input: 0
  }

  render() {
    const { phone, removePhoneFromBasket, handleQuantityToBasket } = this.props

    return <tr

      className='row'
    >
      <td className='col'>
        <img className='img-thumbnail' src={phone.image} alt={phone.name} />
      </td>
      <td className='col'>{phone.name}</td>
      <td className='col'>${phone.price}</td>
      <td className='col'>
        <input onChange={this.handleInput(handleQuantityToBasket)} type='number' defaultValue={phone.count} />
      </td>
      <td className='col'>
        <span onClick={() => removePhoneFromBasket(phone.id)} className='btn btn-block badge-danger' />
      </td>
    </tr>

  }

  handleInput = (quantity) => e => {
    const event = +e.target.value
    this.setState(prevState => {
      return { input: event }
    })

    return quantity(this.state.input)


  }

}

export default connect(
  null,
  { removePhoneFromBasket, handleQuantityToBasket }

)(ContentValue)