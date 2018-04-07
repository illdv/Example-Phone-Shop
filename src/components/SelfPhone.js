import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhoneById, addPhoneToBasket } from '../AC'
import { compose, pick, toPairs } from 'ramda'
import BasketCart from './BasketCart'
import { Link } from 'react-router-dom';
import { getPhoneById } from '../helpers'

class SelfPhone extends Component {

  componentDidMount() {
    this.props.fetchPhoneById((this.props.match.params.name))
  }

  render() {

    return <div className='view-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            {this.props.phone && this.renderContent()}
          </div>
          <aside className='col-md-3'>
            {this.props.phone && this.renderSidebar()}
          </aside>
        </div>
      </div>
    </div>
  }

  renderContent = () => {
    const { phone } = this.props
    return <div className='thumbnail'>
      <div className='row'>
        <div className='col-md-6'>
          <img className='img-thumbnail' src={phone.image} alt={phone.name} />
        </div>
        <div className='col-md-6'>
          {this.renderFields()}
        </div>
        <div className='caption-full'>
          <h4 className='pull-right'>${phone.price}</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>
    </div>
  }

  renderFields = () => {
    const { phone } = this.props
    const columnFields = compose(
      toPairs,
      pick([
        'cpu',
        'camera',
        'size',
        'weight',
        'display',
        'battery',
        'memory'
      ])
    )(phone)
    return columnFields.map(([key, value]) =>
      <div className='column' key={key}>
        <div className='ab-details-title'>
          <span> {key}: </span>
        </div>
        <div className='ab-details-info'>
          <p> {value}</p>
        </div>
      </div>
    )

  }
  renderSidebar = () => {
    const { phone, addPhoneToBasket } = this.props
    return <div>
      <p className='lead'>Quick shop</p>
      <BasketCart />
      <div className='form-group'>
        <h4>{phone.name}</h4>
        <h5>${phone.price}</h5>
      </div>
      <Link to='/phones' className='btn btn-info btn-block'>
        Back to store
      </Link>
      <button type='button' className='btn btn-success btn-block'
        onClick={() => addPhoneToBasket(phone.id)}>
        Add to cart
      </button>
    </div>
  }
}


export default connect(
  state => ({
    phone: getPhoneById(state, state.phonePage.id)
  }),
  { fetchPhoneById, addPhoneToBasket }
)(SelfPhone)