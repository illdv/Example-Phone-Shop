import React from 'react'
import BasketCart from './BasketCart'
import Search from './Search'
import Choicelanguage from './ChoiceLanguage'
import Logo from './Logo'
import { withRouter } from 'react-router-dom'
import { AppBar, Grid, Hidden, Toolbar } from '@material-ui/core'
import Drawer from './DrawerHead';
import { Continue } from '../../Buttons'





export default withRouter(props => {


  return <AppBar position='sticky' >
    <Toolbar style={{ justifyContent: 'space-between' }} disableGutters>
      {props.location.pathname !== '/phones' ? <Continue /> : <Continue visibilityHidden={{ visibility: 'hidden' }} />}
      <Grid item md={8} xs={10} container alignItems='center' spacing={16} style={{ flexShrink: 1 }}>
        <Grid item style={{ marginRight: 'auto', }}>
          <Logo />
        </Grid>
        <Hidden xsDown>
          <Grid item >
            <Search />
          </Grid>
        </Hidden>
        <Grid item >
          <BasketCart />
        </Grid>
        <Hidden smUp>
          <Grid item >
            <Drawer />
          </Grid>
        </Hidden>
      </Grid>
      <Choicelanguage />
    </Toolbar>
  </AppBar>

})