import React, { Component } from 'react'
import { connect } from "react-redux";

import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { fetchPhones, loadMorePhones, fetchCategories } from "../AC";

import { getPhones } from '../helpers'
import Phone from './Phone'
import { Grid } from 'material-ui'



class Phones extends Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps.phones[0] === this.props.phones[0]) {
      return false
    }
    return true
  }

  componentDidMount() {
    this.props.fetchPhones()
    this.props.fetchCategories()
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1)
    ) {
      this.props.loadMorePhones();
    }
  }

  render() {

    return (
      <Grid container spacing={16}>
        {this.props.phones.map(phone =>
          <Grid item md={4} sm={6} xs={12} key={phone.id}>
            <Phone phone={phone} />
          </Grid>
        )}

      </Grid>


    )
  }
}
export default compose(
  withRouter,
  connect(
    (state, ownProps) => ({
      phones: getPhones(state, ownProps),
    }),
    { fetchPhones, loadMorePhones, fetchCategories }
  ))(Phones)

