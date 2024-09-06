import React, { useState } from 'react'
import './Home.css'
import Header from '../../componants/Header/Header'
import ExploloreMenu from '../../componants/ExploreMenu/ExploloreMenu'
import FoodDisplay from '../../componants/FoodDisplay/FoodDisplay'
import AppDownload from '../../componants/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploloreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
