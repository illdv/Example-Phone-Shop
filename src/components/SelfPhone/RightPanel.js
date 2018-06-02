import React, { Fragment } from 'react'
import { compose, pick, toPairs } from 'ramda'
import { Grid, Divider, ListItem, ListItemText, Hidden, CardContent, Typography } from '@material-ui/core'



export default  ({phone}) => 	<Fragment>	
	<Hidden smUp>
<CardContent>
	<Typography variant="headline" component="h4" style={{marginBottom: 8, textAlign: 'center'}} >
	 {phone.name}
	</Typography>
	<Typography variant="body1">
	{phone.description}
</Typography>
</CardContent>
</Hidden> 
<Grid item  lg={4} md={5} sm={6} xs={12}
component='ul' container direction='column' justify='space-between' style={{ paddingLeft: 0 }}>
{columnFields(phone).map(([key, value]) => <Fragment key={key}>
	<ListItem >
		<ListItemText primary={key} secondary={value} />
	</ListItem>
	<Divider />
</Fragment>
)
}

</Grid>
</Fragment>

const columnFields = (phone) => compose(
toPairs,
pick([
	'cpu',
	'camera',
	'size',
	'weight',
	'display',
	'battery',
	'memory'
])
)(phone)