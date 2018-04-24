import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removePhoneFromBasket, handleQuantityToBasket } from '../../AC'

import Tooltip from 'material-ui/Tooltip';

import Button from 'material-ui/Button'
import Delete from '@material-ui/icons/Delete'


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




        <Tooltip id="tooltip-icon" title="Delete phone">
          <Button variant='fab' color="secondary"
            onClick={() => removePhoneFromBasket(phone.id)}
          >
            <Delete />
          </Button>
        </Tooltip>
      </td>
    </tr>

  }

  handleInput = id => e => {
    const event = e.target.value
    this.setState(() => {
      return event >= 1 ?
        { input: event } :
        { input: 1 }
    })
    event >= 1 &&
      this.props.handleQuantityToBasket(e.target.value, id)
  }

}

export default connect(
  null,
  { removePhoneFromBasket, handleQuantityToBasket }

)(ContentValue)