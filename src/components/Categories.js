import React from 'react'
import { connect } from 'react-redux'
import { values } from 'ramda'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { propEq, isNil } from 'ramda'
import { getActiveCategoryId } from '../helpers'
import classNames from 'classnames'
import LocalizedText from '../translate/localized-text'

import { Grid, Chip } from '@material-ui/core';


import { withStyles } from '@material-ui/core/styles';




const styles = theme => ({
  active: {
    background: '#3f51b5',
    color: 'white'
  },
  chip: {
    textDecoration: 'none',
    cursor: 'pointer',
    margin: theme.spacing.unit
  }
});




const Categories = ({ categories, activeCategoryId, classes }) => {

  return (
    <Grid container item md={8} justify='center'>
      <Chip component={Link} to='/phones'
        className={classNames({
          [classes.active]: isNil(activeCategoryId),
          [classes.chip]: true,
        })}
        label={<LocalizedText>ALL</LocalizedText>}

      >
        />
      </Chip>


      {categories.map(category => {
        const getActiveState = propEq('id', activeCategoryId)

        return <Chip component={Link} to={`/categories/${category.id}`}
          label={category.name.toUpperCase()}
          className={classNames({
            [classes.active]: getActiveState(category),
            [classes.chip]: true,
          })}
          key={category.name}
        >

        </Chip>
      })}
    </Grid>

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