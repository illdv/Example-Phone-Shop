import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhoneByName } from '../AC'
import { compose, pick, toPairs } from 'ramda'
import { getPhoneById } from '../helpers'
import AddToBasket from '../Buttons'
import { Grid, Typography, Divider, ListItem, ListItemText, CardContent, CardMedia, CardHeader } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Main, Section } from '../layouts'

const styles = theme => ({
  action: {
    margin: 0
  },

});

class SelfPhone extends Component {

  componentDidMount() {
    this.props.fetchPhoneByName((this.props.match.params.name))
  }

  render() {

    const { phone } = this.props



    return <Main>
      <Section paperStyle={{ boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)', borderRadius: 2, background: '#fff' }}>
        {phone && this.LeftPanel()}
        {phone && this.RightPanel()}
      </Section>
    </Main>


  }

  LeftPanel = () => {

    const { phone, classes } = this.props

    return <Grid item sm={4} xs={12}>

      <CardMedia
        src={phone.image}
        title={phone.name}
        component='img'
      />
      <CardHeader
        title={`${phone.price}$`}
        action={
        <AddToBasket phone={phone} />
      }
      classes={{
        action: classes.action
      }}
      />
      <CardContent>
      <Typography variant="headline" component="h4" style={{marginBottom: 8, textAlign: 'center'}} >
           {phone.name}
          </Typography>
        <Typography variant="body1">
          {phone.description}
        </Typography>
      </CardContent>

    </Grid>
  }

  RightPanel = () => <Grid item sm={4} xs={12}
    component='ul' container direction='column' justify='space-between' style={{ paddingRight: '0' }}>
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


export default compose(
  withStyles(styles),
  connect(
  state => ({
    phone: getPhoneById(state, state.selfPhonePage.id)
  }),
  { fetchPhoneByName }
))(SelfPhone)