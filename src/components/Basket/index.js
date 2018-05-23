import React from 'react'
import { connect } from 'react-redux'
import { getBasketPhonesWithCount } from '../../helpers'
import { isEmpty } from 'ramda'
import { Main, Section } from '../../layouts'
import { Grid, Hidden, Typography } from '@material-ui/core';
import Total, { Checkout } from './Sidebar';
import Content from './Content/'

const Basket = ({ phones }) => {

  return <Main>
    <Section>
      {isEmpty(phones) ?
        <Typography variant='subheading'>
          Your shopping cart is empty
          </Typography>
        :
        <React.Fragment>
          <Grid item sm={10} xs={12} >
            <Content phones={phones} />
          </Grid>

          <Hidden xsDown>
            <Grid item sm={2} component='aside' style={{ position: 'relative' }} >
              <div style={{ position: 'fixed' }}>
                <Total />
                <Checkout phones={phones} />
              </div>
            </Grid>
          </Hidden>

          <Hidden smUp>
            <Grid container justify='space-between' alignItems='center'>
              <Total />
              <Checkout phones={phones} />
            </Grid>
          </Hidden>
        </React.Fragment>
      }
    </Section>
  </Main>
}

export default connect(
  state => ({
    phones: getBasketPhonesWithCount(state)
  })
)(Basket)