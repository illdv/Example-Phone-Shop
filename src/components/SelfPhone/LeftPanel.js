import React from 'react'
import AddToBasket from '../../Buttons'
import {compose} from 'redux'
import { Grid, Typography, CardContent, CardMedia, CardHeader, IconButton, CardActions, withWidth, Hidden } from '@material-ui/core'
import LocalizedText from '../../translate/localized-text'
import { withStyles } from '@material-ui/core/styles';
import DrawerParams from './DrawerParams'

const styles = theme => ({
  action: {
    margin: 0
	},
});

const LeftPanel = ({phone, width, classes}) => 
	<Grid item lg={4} md={5} sm={6} xs={12}>
		<CardMedia
			src={phone.image}
			title={phone.name}
			component='img'
		/>
		<CardHeader
		style={{paddingBottom: 0, paddingTop: 0}}
		title={<LocalizedText>{phone.price}</LocalizedText>}
		action={
			width === 'xs' ?         
				<DrawerParams  phone={phone}/> :
				<AddToBasket phone={phone} />}
		classes={{
			action: classes.action,
		}}/>
		<Hidden smUp>
			<CardActions style={{padding: '0 16px 16px'}}>
			<AddToBasket phone={phone} />
			</CardActions>
		</Hidden>
		<Hidden xsDown>
			<CardContent>
				<Typography variant="headline" component="h4" style={{marginBottom: 8, textAlign: 'center'}} >
				 {phone.name}
				</Typography>
				<Typography variant="body1">
				{phone.description}
			</Typography>
		</CardContent>
	</Hidden>
</Grid>


export default compose(
	withWidth(),
	withStyles(styles)
)(LeftPanel)