import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles';

import { IconButton, Collapse, Typography, Card, CardActions, CardContent, CardMedia, CardHeader } from '@material-ui/core';
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
  subheader: {
    whiteSpace: 'nowrap'
  },
  relativePosition: {
    position: 'relative'
  },
  centaredHalf: {
    width: '70%',
    left: '70%',
    marginLeft: '-55%'
  },
  background: {
    position: 'absolute',
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    width: '100%'
  }
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
      <div className={classes.relativePosition}>
        <Link to={`/phones/${phone.name}`}>
          <CardMedia
            src={phone.image}
            title={phone.name}
            component='img'
          />
        </Link>
        <div className={classes.background}>
          <CardActions className={classnames(classes.relativePosition, classes.centaredHalf)}>

            <AddToBasket phone={phone} />
          </CardActions>
        </div>
      </div>
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
        classes={{
          subheader: classes.subheader,
        }}
      />

      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body1">
            {phone.description}
          </Typography>
        </CardContent>
      </Collapse>


    </Card>

  }
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
}




export default withStyles(styles)(Phone)