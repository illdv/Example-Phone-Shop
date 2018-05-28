import React from 'react'
import { connect } from 'react-redux'
import { getBasketPhonesWithCount } from '../../helpers'
import { isEmpty } from 'ramda'
import { Main, Section } from '../../layouts'
import { Grid, Hidden, Typography } from '@material-ui/core';
import Total from './Sidebar/Total';
import Checkout from './Sidebar/Checkout';
import CleanBasket from './Sidebar/CleanBasket';
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
          <Grid container item sm={10} xs={12} direction='column' >
            {phones.map(phone =>
              <Content phone={phone} key={phone.id} />

            )}

          </Grid>


          <Hidden xsDown>
            <Grid container item sm={2} justify='flex-end' style={{ position: 'relative' }} >
              <Grid container direction='column' spacing={16} item sm={2} alignItems='flex-end' style={{ position: 'fixed' }}>


                {[<Total />, <Checkout phones={phones} />, <CleanBasket />].map(value =>
                  <Grid item key={Date.now() + Math.random()}>{value}</Grid>)}

              </Grid>

            </Grid>
          </Hidden>

          <Hidden smUp>
            <Grid container justify='space-between' alignItems='center'>
              <Total />
              <CleanBasket marginRight={{ marginRight: 'auto', marginLeft: '8px' }} />
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