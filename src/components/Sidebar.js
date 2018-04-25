import React from 'react'

import { Grid } from 'material-ui'

import BasketCart from './BasketCart'
import Search from './Search'
import Categories from './Categories'


const Sidebar = () => (

  <Grid item sm={2}>

    <BasketCart />
    <Search />
    <Categories />

  </Grid>

)


export default Sidebar