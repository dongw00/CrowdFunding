import React from 'react'
import {Link} from "react-router-dom"

export default () => {
  return (
      <div id="header">
        <div className="container">

          <div id="logo">
            <h1><a href="#">Kau Funding</a></h1>
            <span>Design by Kauboy</span>
          </div>

          <nav id="nav">
            <ul>
              <li className="active"><a href="index.html">Homepage</a></li>
              <li><a href="">Fundings</a></li>
              <li><a href="">Contact us</a></li>
              <li><a href="">question</a></li>
            </ul>
          </nav>

        </div>
      </div>
  )
}