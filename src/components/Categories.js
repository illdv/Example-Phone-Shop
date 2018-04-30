import React from 'react'
import { connect } from 'react-redux'
import { values } from 'ramda'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { propEq, isNil } from 'ramda'
import { getActiveCategoryId } from '../helpers'
import classNames from 'classnames'

import List, { ListItem, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';




const styles = {
  active: {
    background: '#3f51b5',
    '&:hover': {
      background: '#3f51b5'
    }
  },
  white: {
    color: 'white'
  },
};




const Categories = ({ categories, activeCategoryId, classes }) => {

  return (
    <List >
      <ListSubheader style={{ fontSize: 20 }}
        color='inherit'
        disableSticky={true}
      >Brands:</ListSubheader>       <Divider />

      <ListItem component={Link} to='/phones'
        className={classNames({
          [classes.active]: isNil(activeCategoryId),
        })}
        button
      >
        <ListItemText primary="All" disableTypography={true}
          className={classNames({
            [classes.white]: isNil(activeCategoryId),
          })}
        />
      </ListItem>
      <Divider />

      {categories.map(category => {
        const getActiveState = propEq('id', activeCategoryId)

        return <React.Fragment key={category.name}>
          <ListItem component={Link} to={`/categories/${category.id}`}
            button
            className={classNames({
              [classes.active]: getActiveState(category),
            })}
          >
            <ListItemText primary={category.name}
              disableTypography={true}
              className={classNames({
                [classes.white]: getActiveState(category),
              })} />
          </ListItem>
          <Divider />
        </React.Fragment >

      })}
    </List>

  )
}



export default compose(
  withStyles(styles),
  withRouter,
  connect((state, ownProps) => ({
    categories: values(state.categories),
    activeCategoryId: getActiveCategoryId(ownProps)
  })
  )
)(Categories)
