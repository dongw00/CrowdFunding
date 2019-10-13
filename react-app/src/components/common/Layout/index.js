import React, {Fragment} from 'react'
import {Link} from "react-router-dom"
import {Header, Footer} from "../index"

export default ({children}) => {
  return (
      <Fragment>
        <Header/>
        {children}
        <Footer/>
      </Fragment>
  )
}