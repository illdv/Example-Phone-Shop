import React, { Component } from 'react'
import { compose } from 'redux'
import BasketCart from './BasketCart'
import Search from './Search'
import Choicelanguage from './ChoiceLanguage'
import Logo from './Logo'
import { withRouter } from 'react-router-dom'
import { AppBar, Grid, Hidden, Toolbar } from '@material-ui/core'
import Drawer from './DrawerHead';
import { Continue } from '../../Buttons'





class Header extends Component {



  render() {

    return <AppBar position='fixed'>
      <Toolbar style={{ justifyContent: 'space-between' }} disableGutters>
        <Grid item xs={1} >
          {this.props.location.pathname !== '/phones' ? <Continue /> : <Continue visibilityHidden={{ visibility: 'hidden' }} />}
        </Grid>
        <Grid item md={8} xs={10} container alignItems='center' spacing={16} >
          <Grid item style={{ marginRight: 'auto' }}>
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
        <Grid item xs={1} container justify='flex-end'>
          <Choicelanguage />
        </Grid>

      </Toolbar>
    </AppBar >
  }


}

export default compose(
  withRouter
)(Header)