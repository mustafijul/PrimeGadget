import { X } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react'
import Logo from './Logo';
import { headerData } from '@/constants/data';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop if we click outside sidebar will close*/}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}  // Close when clicking backdrop
      />
      
      {/* Side Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white shadow-xl z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-2">
          <Logo className='text-white text-xl'></Logo>
          <button 
            onClick={onClose}
            className="fixed top-0 right-0 mb-4 p-2 hover:text-shop_dark_green cursor-pointer rounded hoverEffect"
          >
            <X></X>
          </button>
          <div className="mt-4">
            {/* Your menu items here */}
            <nav className="flex flex-col gap-4 tracking-wide font-semibold">
              {
                headerData.map(item =>
                  <Link className='hover:text-shop_light_green hoverEffect' key={item.title} href={item.href}>
                    {item?.title}
                  </Link>
                )
              }
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideMenu