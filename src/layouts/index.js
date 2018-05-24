import React from 'react'


import { Grid } from '@material-ui/core'


const randomKey = () => Date.now() + Math.random()

export const Main = ({ children }) =>
  <Grid container justify='center' component='main' style={{ margin: '20px 0', flex: '1 0 auto' }} >
    {[children].map(child => <React.Fragment key={randomKey()}>{child}</React.Fragment>)}
  </Grid>


export const Section = ({ paperStyle, children }) => <Grid container item md={8} xs={11} justify='space-between' component='section' style={paperStyle} >{children}</Grid>




