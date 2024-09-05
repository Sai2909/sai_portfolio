import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function Layout() {
  const location = useLocation();
  
  // Check if the current path is '/coding'
  const isCodingPage = location.pathname.startsWith('/coding');

  return (
    <>
      {!isCodingPage && <Header />} 
      <Outlet />
      {!isCodingPage && <Footer />} 
    </>
  );
}

export default Layout;
