import React from 'react'
import { connect } from 'react-redux'
import { getBasketPhonesWithCount } from '../../selectors'
import { isEmpty } from 'ramda'
import { Main, Section } from '../../layouts'
import { Grid, Hidden, Typography } from '@material-ui/core';
import Total from './Sidebar/Total';
import Checkout from './Sidebar/Checkout';
import CleanBasket from './Sidebar/CleanBasket';
import Content from './Content/'
import {randomNum} from './../../helpers'


const Basket = ({ phones }) => {
  return <Main>
    <Section>
      {isEmpty(phones) ?
        <Typography variant='subheading'>
          Your shopping cart is empty
          </Typography>
        :
        <React.Fragment>
          <Grid container item sm={9} xs={12} direction='column' >
            {phones.map(phone =>
              <Content phone={phone} key={phone.id} />
            )}
          </Grid>


          <Hidden xsDown>
          <Grid container item sm={3} style={{ position: 'relative' }}>
              <Grid container direction='column' item sm={2} style={{ position: 'fixed' }}>
                {[<Total />, <Checkout phones={phones} />, <CleanBasket />].map(value =>
                  <Grid 
              
                   key={randomNum()}
                  style={{paddingBottom: 16}}>{value}
                  </Grid>)}
              </Grid>
</Grid>
          
          </Hidden>

          <Hidden smUp>
            <Grid container direction='column'>
            {[<Total />, <Checkout phones={phones} />, <CleanBasket />].map(value =>
                  <Grid 
              
                   key={randomNum()}
                  style={{paddingBottom: 16}}>{value}
                  </Grid >)}
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