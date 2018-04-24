import React from 'react'

import Sidebar from './Sidebar'
import Phones from './Phones'



import { Grid } from 'material-ui'



export default props =>
  <Grid container spacing={24}>
    <Sidebar />
    <Phones />
  </Grid>



