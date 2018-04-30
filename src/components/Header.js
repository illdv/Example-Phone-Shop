import React from 'react'
import BasketCart from './BasketCart'
import Search from './Search'
import { AppBar, Toolbar, Typography } from 'material-ui'

const style = {
  appBar: {
    marginBottom: 20,

  },
};

export default props => {

  return <AppBar position="sticky" style={style.appBar}>
    <Toolbar>


      <Typography variant="headline" color='inherit' paragraph={true} >
        name of shop
      </Typography>


      <Search />
      <BasketCart />
    </Toolbar>
  </AppBar>

}