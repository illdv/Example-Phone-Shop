import React from 'react'
import { connect } from 'react-redux'
import { values } from 'ramda'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { propEq, isNil } from 'ramda'
import { getActiveCategoryId } from '../helpers'
import classNames from 'classnames'

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';


const Categories = ({ categories, activeCategoryId }) => {



  return (



    <List>
      <Subheader style={{ fontSize: 20 }}>Brands</Subheader>
      <ListItem
        containerElement={
          <Link to='/phones' />
        }
        primaryText='All'
      >
      </ListItem>
      <Divider />
      {categories.map(category =>
        <React.Fragment key={category.name}>
          <ListItem

            primaryText={category.name}
            containerElement={
              <Link to={`/categories/${category.id}`} />
            }
          >

          </ListItem>
          <Divider />
        </React.Fragment >

      )}






    </List>

  )
}


export default compose(
  withRouter,
  connect((state, ownProps) => ({
    categories: values(state.categories),
    activeCategoryId: getActiveCategoryId(ownProps)
  })
  )
)(Categories)
