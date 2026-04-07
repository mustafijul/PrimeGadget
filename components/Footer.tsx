import React from 'react';
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo'; 
import SocialIcons from './Socialicons'; 

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <Container>
        <FooterTop />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Column 1 - Brand Info */}
          <div>
            <Logo />
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Discover curated furniture collections at Shopcart, blending style and comfort to elevate your living spaces.
            </p>
            <SocialIcons />
          </div>

          {/* Column 2 - Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">Contact us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">Help</a></li>
            </ul>
          </div>

          {/* Column 3 - Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <p className="font-medium text-gray-800 text-sm mb-2">Categories</p>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">Mobiles</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">Appliances</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">Smartphones</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">Air Conditioners</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">Washing Machine</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">Kitchen Appliances</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shop_dark_green text-sm transition-colors">Gadget Accessories</a></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter to receive updates and exclusive offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="w-full bg-shop_dark_green text-white px-4 py-2 rounded-lg hover:bg-shop_light_green transition-colors font-medium text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 py-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} <Logo className='text-sm'></Logo>. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}