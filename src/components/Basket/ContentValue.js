import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removePhoneFromBasket, addPhoneToBasket } from '../../AC'


class ContentValue extends Component {


  state = {
    input: this.props.phone.count
  }

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
        <input onChange={this.handleInput(phone.id)} type='number' value={this.state.input} />
      </td>
      <td className='col'>
        <span onClick={() => removePhoneFromBasket(phone.id, 'all')} className='btn btn-block badge-danger' />
      </td>
    </tr>

  }

  handleInput = id => e => {
    this.setState({
      input: e.target.value
    })
    console.log('e', e.target.value);
    console.log('state', this.state.input);

    return e.target.value > +this.state.input ?

      this.props.addPhoneToBasket(id) :

      this.props.removePhoneFromBasket(id)
  }
}

export default connect(
  null,
  { removePhoneFromBasket, addPhoneToBasket }

)(ContentValue)