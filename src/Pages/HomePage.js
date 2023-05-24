import React from 'react'
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'
import { originals, action, comedy, horror } from '../urls';

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />  
    </div>
  )
}

export default HomePage
