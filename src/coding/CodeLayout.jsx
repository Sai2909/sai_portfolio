import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const CodeLayout = () => {
  return (
  <>
  <Header/>
  <Outlet/>
 
 
  </>
  )
}

export default CodeLayout
