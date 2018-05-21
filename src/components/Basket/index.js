import React from 'react'
import { connect } from 'react-redux'
import { getBasketPhonesWithCount } from '../../helpers'
import Content from './Content'

import { Main, Section } from '../../layouts'
import { Grid, Hidden } from '@material-ui/core';
import Total, { Checkout } from './Sidebar';


const Basket = ({ phones }) => {

  return <Main>
    <Section>

      <Grid item md={10} xs={12} >
        <Content phones={phones} />
      </Grid>

      <Hidden smDown>
        <Grid item md={2} container direction='column' component='aside' alignItems='center' style={{ position: 'relative' }} >
          <div style={{ position: 'fixed' }}>
            <Total />
            <Checkout phones={phones} />
          </div>
        </Grid>
      </Hidden>
    </Section>
  </Main>
}

export default connect(
  state => ({
    phones: getBasketPhonesWithCount(state)
  })
)(Basket)