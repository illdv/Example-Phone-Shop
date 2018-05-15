import React from 'react'
import { connect } from 'react-redux'
import { getBasketPhonesWithCount } from '../../helpers'
import Content from './Content'
import { Continue } from '../../Buttons'
import { Grid } from 'material-ui'

const Basket = ({ phones }) => {

  return <Grid container style={{ justifyContent: 'center' }}>
    <Grid item md={8}>
      <Content phones={phones} />
    </Grid>
    <Grid item md={1} style={{ position: 'relative' }}>
      <Continue />
    </Grid>
  </Grid>
}

export default connect(
  state => ({
    phones: getBasketPhonesWithCount(state)
  })
)(Basket)