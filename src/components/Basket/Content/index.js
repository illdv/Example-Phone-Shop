import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import Quantity from './Quantity'
import RemovePhone from './RemovePhone'

export default ({ phone }) => {
  const img = <img style={{ maxWidth: '100%' }} src={phone.image} alt={phone.name} />

  const name = <Typography variant='body1'>{phone.name}</Typography>

  return <Grid container alignItems='center' style={{ marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>

    {[img, name, <Quantity phone={phone} />, <RemovePhone phone={phone} />].map(cell =>
      <Grid item xs={3} key={Date.now() + Math.random()} container justify='center' alignItems='baseline'>
        {cell}

      </Grid>
    )}

  </Grid>

}
