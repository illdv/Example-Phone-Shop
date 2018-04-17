import React, { Component } from 'react'
import { connect } from "react-redux";
import Sidebar from './Sidebar'
import Loader from './Loader'
import { fetchPhones, loadMorePhones, fetchCategories } from "../AC";

import { getPhones } from '../helpers'
import Phone from './Phone'
import { isEmpty } from 'ramda'

class Phones extends Component {

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
    if (isEmpty(this.props.phones)) return <Loader />

    return <div className='view-container'>
      <div className='container'>
        <div className='row'>
          <aside className='col-md-3'>
            <Sidebar />
          </aside>
          <div className='col-md-9'>
            <div className="book row">
              {this.props.phones.map(phone =>
                <Phone phone={phone} key={phone.id} />)}
            </div>
            <div className='row'>
              <div className='col-md-12'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}


export default connect(
  (state, ownProps) => ({
    phones: getPhones(state, ownProps)
  }),
  { fetchPhones, loadMorePhones, fetchCategories }
)(Phones)