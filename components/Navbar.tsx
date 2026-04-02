import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'

export default function Navbar() {
  return (
    <div className='bg-white py-5'> 
      <Container className=' flex gap-7 justify-between'>
        {/* logo */}
        <Logo></Logo>
        {/* navlinks */}
        <HeaderMenu></HeaderMenu>
        {/* buttons */}
        <div>
          Others
        </div>
      </Container>
    </div>
  )
}
