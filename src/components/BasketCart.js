import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTotalBasketPrice } from '../helpers'


class BasketCart extends Component {





  render() {
    const { totalBasketCount, totalPrice } = this.props





    return <div className='cart'>
      <div className='dropdown'>
        <Link to='/basket' id='dLabel' className='btn btn-primary btn-block btn-lg'>
          <i className='fa fa-fa-shopping-cart' />
          <span>{`${totalBasketCount} item(s) - $${totalPrice}`}</span>
        </Link>
      </div>
    </div >
  }

}




export default connect(
  state => {

    return {
      totalBasketCount: state.basket.length,
      totalPrice: getTotalBasketPrice(state)

    }
  }
)(BasketCart)