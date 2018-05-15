import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import classnames from 'classnames'
import { withStyles } from 'material-ui/styles';

import { IconButton, Collapse, Typography, Card, CardActions, CardContent, CardMedia, CardHeader } from 'material-ui';
import { ExpandMore } from '@material-ui/icons';


import AddToBasket from '../Buttons'

const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),

  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

});

class Phone extends Component {
  state = { expanded: false };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.expanded !== this.state.expanded;
  }



  render() {
    const { phone, classes } = this.props

    return <Card raised
    >
      <Link to={`/phones/${phone.name}`}>
        <CardMedia
          src={phone.image}
          title={phone.name}
          component='img'
        />
      </Link>
      <CardHeader
        title={`${phone.price}$`}
        subheader={phone.name}
        action={
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
        }
      />

      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body1">
            {phone.description}
          </Typography>
        </CardContent>
      </Collapse>

      <CardActions>

        <AddToBasket phone={phone} />
      </CardActions>
    </Card>

  }
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
}




export default withStyles(styles)(Phone)