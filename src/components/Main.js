import React from 'react'



import Phones from './Phones'

import Categories from './Categories'

import Snackbars from '../components/Snackbars'
import { Main as LayoutMain, Section } from '../layouts/'

const Main = () => {
  return <LayoutMain>
    <Categories />
    <Section >
      <Phones />
    </Section>
    <Snackbars />
  </LayoutMain>
}


export default Main

