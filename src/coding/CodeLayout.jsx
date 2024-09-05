import React from 'react'
import { Outlet } from 'react-router'
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
