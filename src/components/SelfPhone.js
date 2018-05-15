import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhoneByName } from '../AC'
import { compose, pick, toPairs } from 'ramda'




import { getPhoneById } from '../helpers'
import AddToBasket, { Continue } from '../Buttons'

import { Grid, Typography, Divider, ListItem, ListItemText, Card, CardContent, CardMedia, CardHeader } from 'material-ui'





class SelfPhone extends Component {

  componentDidMount() {
    this.props.fetchPhoneByName((this.props.match.params.name))
  }

  render() {


    const { phone } = this.props

    return <Grid component='section' item md={6} style={{ position: "relative", margin: '0 auto' }}>
      <Card raised>
        <Grid container justify='center' spacing={40} >
          {phone && this.LeftPanel()}
          {phone && this.RightPanel()}
        </Grid>

      </Card>
      <Continue />
    </Grid>


  }

  LeftPanel = () => {

    const { phone } = this.props

    return <Grid item md={5} >
      <CardMedia
        src={phone.image}
        title={phone.name}
        component='img'
      />
      <CardHeader
        title={`${phone.price}$`}
        subheader={phone.name}
        action={<AddToBasket phone={phone} />}
      />
      <CardContent>
        <Typography variant="body1">
          {phone.description}
        </Typography>
      </CardContent>
    </Grid>
  }

  RightPanel = () => <Grid item md={4} component='ul' container direction='column' justify='center'>
    {this.columnFields().map(([key, value]) => <React.Fragment key={key}>
      <ListItem >
        <ListItemText primary={key} secondary={value} />
      </ListItem>
      <Divider />
    </React.Fragment>
    )
    }

  </Grid>

  columnFields = () => compose(
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
  )(this.props.phone)




}


export default connect(
  state => ({
    phone: getPhoneById(state, state.selfPhonePage.id)
  }),
  { fetchPhoneByName }
)(SelfPhone)