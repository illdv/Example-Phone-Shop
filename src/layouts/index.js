import React from 'react'
import { Grid, withWidth } from '@material-ui/core'


const randomKey = () => Date.now() + Math.random()


export const Main = withWidth()(({ children, width }) => {

  const mt = margin => width === 'xs' ? 53.99 + margin : 63.99 + margin
  const mb = (margin) => 131.97 + margin

  return <Grid container justify='center' component='main' style={{ marginTop: mt(30), marginBottom: mb(30) }} >
    {[children].map(child => <React.Fragment key={randomKey()}>{child}</React.Fragment>)}
  </Grid>
})

export const Section = ({ paperStyle, children }) => <Grid container item md={8} xs={10} justify='center' component='section' style={paperStyle} >{children}</Grid>




