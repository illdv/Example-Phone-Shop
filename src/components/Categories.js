import React from 'react'
import { connect } from 'react-redux'
import { values } from 'ramda'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { propEq, isNil } from 'ramda'
import { getActiveCategoryId } from '../helpers'
import classNames from 'classnames'

const Categories = ({ categories, activeCategoryId }) => {
  return (
    <div className='well'>
      <h4>Brand</h4>
      <ul className='list-group list-unstyled'>
        <li>
          <Link to='/phones' className={classNames({
            'list-group-item': true,
            'active': isNil(activeCategoryId),
          })}>
            All
          </Link>
        </li>
        {categories.map(category => {
          const getActiveState = propEq('id', activeCategoryId)


          return (
            <li key={category.name}  >
              <Link to={`/categories/${category.id}`} className={classNames({
                'list-group-item': true,
                'active': getActiveState(category),
              })}>
                {category.name}
              </Link>
            </li>
          )
        }
        )}
      </ul>
    </div>
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
