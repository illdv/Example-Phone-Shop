import React from 'react'
import { Link } from 'react-router-dom'
import { take } from 'ramda'
import { addPhoneToBasket } from '../AC'
import { connect } from 'react-redux'


import AddShoppingCart from 'material-ui/icons';
import InfoOutline from 'material-ui/svg-icons/action/info-outline'
import Button from 'material-ui/Button';


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

        <RaisedButton
          label="Buy Now!"
          labelPosition="after"
          primary={true}
          icon={<AddShoppingCart />}
          onClick={() => addPhoneToBasket(phone)}

        />


        <FlatButton
          containerElement={<Link
            to={`/phones/${phone.name}`} />}
          label="More info"
          labelPosition="before"
          secondary={true}
          disableTouchRipple={true}
          icon={<InfoOutline />}
        />


      </div>
    </div>
  </div>




export default connect(null,
  { addPhoneToBasket }
)(Phone)