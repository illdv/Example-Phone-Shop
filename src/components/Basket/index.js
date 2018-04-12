import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBasketPhonesWithCount } from '../../helpers'
import { isEmpty } from 'ramda'
import Content from './Content'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'


class Basket extends Component {


  render() {




    const phones = this.props.phones








    const isBasketEmpty = isEmpty(phones)

    return <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
          {isBasketEmpty ?
            <div>Your shopping cart is empty</div> :
            <Content phones={phones} />}
        </div>
        <aside className='col-md=3 btn-user-checkout'>
          <Link to='/phones' className='btn btn-info btn-block'>
            Continue shopping
    </Link>
          {!isBasketEmpty && <Sidebar phones={phones} />}
        </aside>
      </div>
    </div>
  }

}




export default connect(
  state => {

    return {
      phones: getBasketPhonesWithCount(state)
    }
  }
)(Basket)