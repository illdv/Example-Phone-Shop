import React from 'react'
import { connect } from 'react-redux'
import { getBasketPhonesWithCount } from '../../helpers'
import Content from './Content'
import Sidebar from './Sidebar'


const Basket = ({ phones }) => (
  <div className='container'>
    <div className='row'>
      <Content phones={phones} />
      <Sidebar phones={phones} />
    </div>
  </div >
)

export default connect(
  state => ({
    phones: getBasketPhonesWithCount(state)
  })
)(Basket)