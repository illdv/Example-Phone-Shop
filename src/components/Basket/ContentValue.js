import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removePhoneFromBasket, handleQuantityToBasket } from '../../AC'

import Tooltip from 'material-ui/Tooltip';

import Button from 'material-ui/Button'
import Delete from '@material-ui/icons/Delete'

import { TableCell, TableRow } from 'material-ui/Table';
import TextField from 'material-ui/TextField';



class ContentValue extends Component {

  state = {
    input: this.props.phone.count
  }

  render() {
    const { phone, removePhoneFromBasket, lengthBasket } = this.props

    return (
      <TableRow>
        <TableCell>
          <img style={{ maxWidth: '100%' }} src={phone.image} alt={phone.name} />
        </TableCell>

        <TableCell>{phone.name}</TableCell>
        <TableCell>${phone.price}</TableCell>
        <TableCell>
          <TextField style={{ width: 100 }}
            id="quantity"
            type="number"
            value={this.state.input}
            onChange={this.handleInput(phone)}
            onBlur={(e) =>
              !e.target.value && this.setState({
                input: lengthBasket
              })
            }
          />
        </TableCell>
        <TableCell>
          <Tooltip id="tooltip-icon" title="Delete phone">
            <Button variant='fab' color="secondary"
              onClick={() => removePhoneFromBasket(phone.id)}
            >
              <Delete />
            </Button>
          </Tooltip>
        </TableCell>

      </TableRow>
    )
  }

  handleInput = phone => e => {
    const event = e.target.value
    this.setState(() => {
      return event >= 0 ?
        { input: event } :
        { input: 0 }
    })

    event && this.props.handleQuantityToBasket(event, phone)
  }

}

export default connect(
  state => ({
    lengthBasket: state.basket.length
  }),
  { removePhoneFromBasket, handleQuantityToBasket }, null, { pure: false }

)(ContentValue)