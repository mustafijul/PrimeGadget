import { SignInButton } from '@clerk/nextjs'
import React from 'react'

export default function Signin() {
  return (
    <div>
      <SignInButton mode='modal'>
         <button className='font-semibold text-sm text-lightColor hover:text-shop_dark_green hoverEffect cursor-pointer'>
            Login
        </button>
      </SignInButton>
       
    </div>
  )
}
