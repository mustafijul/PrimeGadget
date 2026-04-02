import { CarTaxiFront, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Carticon() {
  return (
    <div>
      <Link href='/cart' className='relative'>
        <ShoppingCart className='h-5 w-5 hover:text-shop_light_green hoverEffect'></ShoppingCart>
        <span className='absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-shop_light_green flex items-center justify-center font-semibold text-xs text-white'>0</span>
    </Link>
    </div>
    
  )
}
