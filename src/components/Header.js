import React from 'react'

import { AppBar, Toolbar, Typography } from 'material-ui'

const style = {
  appBar: {
    marginBottom: 20,
  },
};

export default props => {


  return <AppBar position="static" style={style.appBar}>
    <Toolbar>


      <Typography variant="headline" color='inherit' paragraph={true} >
        name of shop
      </Typography>


    </Toolbar>
  </AppBar>
}