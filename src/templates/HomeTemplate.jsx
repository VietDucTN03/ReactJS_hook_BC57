//rafce

import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const HomeTemplate = () => {
  return (
    <div>
        <Header/>
        <div className='content' style={{minHeight:'80vh'}}>
            <Outlet/>
        </div>
        <footer className='p-4 bg-dark text-white text-center'>
            <h3>Footer</h3>
        </footer>
    </div>
  )
}

export default HomeTemplate