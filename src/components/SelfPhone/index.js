import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhoneByName } from '../../AC'

import { getPhoneById } from '../../selectors'
import {Hidden} from '@material-ui/core'

import { Main, Section } from '../../layouts'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'



class SelfPhone extends Component {

  componentDidMount() {
    this.props.fetchPhoneByName((this.props.match.params.name))
  }

  render() {
    const { phone } = this.props

    return <Main>
      <Section paperStyle={{ boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)', borderRadius: 2, background: '#fff' }}>
        {phone && <LeftPanel phone={phone}/> } 
        {phone && <Hidden xsDown><RightPanel phone={phone}/></Hidden>}
      </Section>
    </Main>
  }
}

export default  connect(
  state => ({
    phone: getPhoneById(state, state.selfPhonePage.id)
  }),
  { fetchPhoneByName }
)(SelfPhone)