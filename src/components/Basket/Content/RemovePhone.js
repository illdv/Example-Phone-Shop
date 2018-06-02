import React from 'react'
import { connect } from 'react-redux';
import { removePhoneFromBasket } from '../../../AC'
import Delete from '@material-ui/icons/Delete'
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import LocalizedText from  '../../../translate/localized-text'


const removePhone = ({ phone, removePhoneFromBasket }) => <div style={{ textAlign: 'center' }}>
  <Typography variant='body2'>

   <LocalizedText>{phone.price}</LocalizedText> 
  </Typography>
  <Tooltip title={<LocalizedText>remove phone</LocalizedText>}>
    <IconButton color="inherit"
      onClick={() => removePhoneFromBasket(phone.id)}
    >
      <Delete />
    </IconButton>
    </Tooltip>
</div>




export default connect(
  null,
  { removePhoneFromBasket }
)(removePhone)