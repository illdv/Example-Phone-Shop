import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTotalBasketPrice } from '../../helpers'

import { Button, Badge, Hidden, withWidth } from '@material-ui/core'
import ShoppingCart from '@material-ui/icons/ShoppingCart'

import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux'
import classnames from 'classnames'



const styles = {
  opacityBadge: {
    opacity: 0,
  },
  position: {
    top: -8,
    right: -8
  },
  circled: {
    minWidth: 48,
    height: 48,
    borderRadius: '50%'
  },
  xsVisibility: {
    width: 20,
    height: 20,
    top: 1,
    right: 1
  }
};

class BasketCart extends React.Component {


  render() {
    const { totalBasketCount, classes, width } = this.props


    return <Badge badgeContent={totalBasketCount} color='secondary' classes={{
      badge: classnames({
        [classes.opacityBadge]: totalBasketCount < 1,
        [classes.position]: true,
        [classes.xsVisibility]: width === 'xs',
      })
    }}>
      <Button component={Link} to='/basket'
        size="small"

        className={classnames({
          [classes.circled]: width === 'sm' || width === 'xs' || width === 'md'
        })}

        color='inherit'
        disabled={totalBasketCount > 0 ? false : true}
      >
        <ShoppingCart />
        <Hidden mdDown>
          My basket
        </Hidden>
      </Button>
    </Badge>
  }

}
export default compose(
  withStyles(styles),
  withWidth(),
  connect(
    state => ({
      totalBasketCount: state.basket.length,
      totalPrice: getTotalBasketPrice(state)
    })
  ))(BasketCart)

