import React from 'react'
import {Button} from '@material-ui/core'
import LocalizedText from '../../../translate/localized-text'


export default ({ phones }) => (
	<Button
		variant="raised"
		color='primary'
		fullWidth
		onClick={() => alert(JSON.stringify(phones))}>
	<LocalizedText>Checkout</LocalizedText>		
	</Button>
)




