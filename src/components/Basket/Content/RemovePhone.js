import React from 'react'
import { connect } from 'react-redux';
import { removePhoneFromBasket } from '../../../AC'
import Delete from '@material-ui/icons/Delete'
import { Tooltip, IconButton, Typography } from '@material-ui/core';



const removePhone = ({ phone, removePhoneFromBasket }) => <div style={{ textAlign: 'center' }}>
  <Typography variant='body2'>
    {`$${phone.price}`}
  </Typography>
  <Tooltip id="tooltip-icon" title="Delete phone">
    <IconButton color="secondary"
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