"use client"
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path';
import React from 'react'

export default function HeaderMenu() {
    const pathname = usePathname();
    // console.log(pathname)
  return (
    <div className='hidden md:flex justify-center items-center gap-7 capitalize font-semibold text-lightColor absolute left-1/2 transform -translate-x-1/2'>
        {
            headerData?.map((item) =>(
                <Link key={item?.title} href={item?.href} className={`hover:text-shop_light_green hoverEffect group relative ${pathname === item.href && "text-shop_light_green"}`}>
                    {item?.title}
                    <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect left-0 ${pathname === item.href && "w-1/2" }`}></span>

                      <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect right-0 ${pathname === item.href && "w-1/2" }`}></span>
                </Link>
            ))
        }
    </div>
  )
}
