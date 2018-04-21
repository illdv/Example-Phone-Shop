import React from 'react'

import BasketCart from './BasketCart'
import Search from './Search'
import Categories from './Categories'


const Sidebar = () => (
  <aside className='col-md-3'>
    <BasketCart />
    <Search />
    <Categories />
  </aside>
)


export default Sidebar