import React from 'react'


import { Grid } from '@material-ui/core'


const randomKey = () => Date.now() + Math.random()

export const Main = ({ children }) =>
  <Grid container justify='center' component='main' style={{ margin: '20px 0' }} >
    {[children].map(child => <React.Fragment key={randomKey()}>{child}</React.Fragment>)}
  </Grid>


export const Section = ({ paperStyle, children }) => <Grid container item md={8} xs={10} justify='center' component='section' style={paperStyle} >{children}</Grid>




