import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div>
      <div id="app-download" className="app-download">
        <p>For better experience Dowload <br /> 15min App </p>
        <div className="app-download-plateform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AppDownload
