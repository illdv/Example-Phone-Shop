import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { cleanBasket } from '../../../AC'
import LocalizedText from './../../../translate/localized-text'

const CleanBasket = ({ cleanBasket, marginRight }) =>

    <Button variant='raised'
      style={marginRight}
      color='secondary'
      fullWidth
      onClick={cleanBasket}>
      <LocalizedText>Empty basket</LocalizedText>
    </Button >




export default connect(null,
  { cleanBasket }
)(CleanBasket)














