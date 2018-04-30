import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { take } from 'ramda'
import { addPhoneToBasket } from '../AC'
import { connect } from 'react-redux'
import { compose } from 'redux'

import classnames from 'classnames'
import { withStyles } from 'material-ui/styles';

import { Button, IconButton, Collapse } from 'material-ui';
import { AddShoppingCart, ExpandMore, InfoOutline } from '@material-ui/icons';
import withWidth from 'material-ui/utils/withWidth'

import Card, { CardActions, CardContent, CardMedia, CardHeader } from 'material-ui/Card';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

});

class Phone extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { phone, addPhoneToBasket, classes, width } = this.props



    return <Card>
      <CardHeader

        title={phone.name}
        subheader={phone.price}
      />
      <CardMedia style={{ height: 0, paddingTop: '100%', }}
        image={phone.image}
        title={phone.name}
      />

      <IconButton
        className={classnames(classes.expand, {
          [classes.expandOpen]: this.state.expanded,
        })}
        onClick={this.handleExpandClick}
        aria-expanded={this.state.expanded}
        aria-label="Show more"
      >
        <ExpandMore />
      </IconButton>
      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <p>{take(60, phone.description)}...</p>
        </CardContent>
      </Collapse>
      <CardActions>
        <Button
          variant="raised"
          color="secondary"
          onClick={() => addPhoneToBasket(phone)}>
          <AddShoppingCart />
          Buy Now
      </Button>


        <Button
          variant="flat"
          color="default"
          component={Link} to={`/phones/${phone.name}`}
        >
          <InfoOutline />
          more info
      </Button>
      </CardActions>
    </Card>

  }



}




export default compose(
  withStyles(styles),
  withWidth(),
  connect(null,
    { addPhoneToBasket }
  ))(Phone)