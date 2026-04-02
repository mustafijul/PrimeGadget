import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import Searchbar from './Searchbar'
import Carticon from './Carticon'
import Favouriteicon from './Favouriteicon'
import Signin from './Signin'

export default function Navbar() {
  return (
    <div className='bg-white py-5'> 
      <Container className=' flex gap-7 justify-between'>
        {/* logo */}
        <Logo></Logo>
        {/* navlinks */}
        <HeaderMenu></HeaderMenu>
        {/* buttons */}
        <div className='w-auto md:w-1/3 flex gap-5 items-center justify-end'>
          <Searchbar></Searchbar>
          <Carticon></Carticon>
          <Favouriteicon></Favouriteicon>
          <Signin></Signin>
        </div>
      </Container>
    </div>
  )
}
