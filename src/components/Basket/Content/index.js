import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import Quantity from './Quantity'
import RemovePhone from './RemovePhone'

export default ({ phones }) =>




  phones.map(phone => {

    const img = <img style={{ maxWidth: '100%' }} src={phone.image} alt={phone.name} />

    const name = <Typography variant='body1'>{phone.name}</Typography>

    return <Grid container alignItems='center' key={phone.id}>

      {[img, name, <Quantity phones={phones} phone={phone} />, <RemovePhone phone={phone} />].map(cell =>
        <Grid item xs={3} key={Date.now() + Math.random()} container justify='center' alignItems='baseline'>
          {cell}
        </Grid>
      )
      }
    </Grid>
  })









