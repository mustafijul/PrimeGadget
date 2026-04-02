import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export default function Logo({className} : {className ?: string}) {
  return (
    <Link href="/" className="inline-block group">
  <h2 className={cn(
    "text-2xl w-fit font-black tracking-wider uppercase transition-colors hoverEffect",
    // Parent controls "rime" & "adget"
    "text-shop_dark_green group-hover:text-shop_light_green",
    className
  )}>
    {/* P & G do opposite via group-hover */}
    <span className="text-shop_light_green group-hover:text-shop_dark_green transition-colors hoverEffect">P</span>
    rime
    <span className="text-shop_light_green group-hover:text-shop_dark_green transition-colors hoverEffect">G</span>
    adget
  </h2>
</Link>
  )
}
