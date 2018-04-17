import React from 'react'
import { Link } from 'react-router-dom'
import { take } from 'ramda'
import { addPhoneToBasket } from '../AC'
import { connect } from 'react-redux'

const Phone = ({ phone, addPhoneToBasket, addPhoneToLocalStorage }) =>
  <div className='col-sm-4 col-lg-4 col-md-4 book-list'>
    <div className='thumbnail'>
      <img
        className='img-thumbnail'
        src={phone.image}
        alt={phone.name}
      />
      <div className='caption'>
        <h4 className='pull-right'>${phone.price}</h4>
        <h5>
          {phone.name}
        </h5>
        <p>{take(60, phone.description)}...</p>
        <p className='itemButton'>
          <button
            className='btn btn-primary'
            onClick={() => addPhoneToBasket(phone)}
          >
            Buy Now!
      </button>
          <Link
            to={`/phones/${phone.name}`}
            className='btn btn-default'
          >
            More info!
      </Link>
        </p>
      </div>
    </div>
  </div>




export default connect(null,
  { addPhoneToBasket }
)(Phone)