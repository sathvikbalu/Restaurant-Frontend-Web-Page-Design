import React from 'react'
import Header from './header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <div>{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout
