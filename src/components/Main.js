import React from 'react'


import Phones from './Phones'

import Sidebar from './Sidebar'

import { Grid } from 'material-ui'

import Snackbars from '../components/Snackbars'


export default props =>
  <Grid container spacing={24} justify='center' component='main'>
    <Grid item md={1} component='aside' >
      <Sidebar />

    </Grid>
    <Grid item md={8} component='section'>
      <Phones />
    </Grid>
    <Snackbars />
  </Grid>



