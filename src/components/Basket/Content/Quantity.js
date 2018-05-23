import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleQuantityToBasket } from '../../../AC'

import { Grid, Input, IconButton } from '@material-ui/core';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';



class Quantity extends Component {
  state = {
    input: this.props.phone.count
  }

  componentDidMount() {

    console.log(this.textInput.value);

  }



  render() {
    const { phone, phones } = this.props



    return <Grid container alignItems="baseline" justify='center'>
      <Grid item>
        <IconButton onClick={

          this.handleInput(this.state.input, phone, '-')
        }
          color='primary'
        >
          <RemoveCircleOutline />
        </IconButton>
      </Grid>
      <Grid item>
        <Input style={{ width: 30 }}


          id={phone.id}
          value={this.state.input}
          onChange={this.handleInput(this.state.input, phone)}

          inputProps={{ style: { textAlign: 'center' } }}
          inputRef={element =>
            this.textInput = element
          }
          onFocus={() => console.log(this.textInput.id)
          }
        />
      </Grid>
      <Grid item>
        <IconButton onClick={this.handleInput(this.state.input, phone, '+')}
          color='primary' >
          <AddCircleOutline />
        </IconButton>
      </Grid>
    </Grid>
  }

  handleInput = (state, phone, sign) => e => {



    let currentNum
    if (sign === '-') {
      currentNum = state - 1
    } else if (sign === '+') {
      currentNum = state + 1

    } else {
      this.setState({
        input: e.target.value
      })
      currentNum = String(e.target.value).replace(/\D/, '')
    }

    currentNum && this.props.handleQuantityToBasket(currentNum, phone)
  }

}

export default connect(
  null,
  { handleQuantityToBasket }
)(Quantity)