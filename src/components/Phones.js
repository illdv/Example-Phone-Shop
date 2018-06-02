import React, { Component } from 'react'
import { connect } from "react-redux";
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { fetchPhones, loadMorePhones, fetchCategories } from "../AC";

import { getPhones } from '../selectors'
import Phone from './Phone'
import { Grid } from '@material-ui/core'



class Phones extends Component {

  shouldComponentUpdate(nextProps) {

    if (nextProps.basket.length > this.props.basket.length && this.props.phones.length !== 0) {
      return false
    }
    if (nextProps.basket.length < this.props.basket.length) {
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
      <Grid container spacing={16} justify='center'>
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
      basket: state.basket
    }),
    { fetchPhones, loadMorePhones, fetchCategories }
  ))(Phones)

