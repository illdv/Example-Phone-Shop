import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, withWidth } from '@material-ui/core'
import LocalizedText from '../../translate/localized-text'



const Logo = ({ width }) => {

  const sizeText = () => {
    switch (width) {
      case 'xs':
        return '0.8rem'
      case 'sm':
        return '1rem'
      default:
        return '1.5rem'
    }
  }
  console.log(width);

  return <Typography variant='headline' color='inherit' style={{ fontSize: sizeText(), textDecoration: 'none' }} component={Link} to='/phones' >
     <LocalizedText>name of shop</LocalizedText>
  </Typography>
}
export default withWidth()(Logo)