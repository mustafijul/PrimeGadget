import React from "react";
import Text from "./Text";
import Link from "next/link";
import banner_1 from '../images/banner/banner_1.png'
import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 md:px-24 flex items-center justify-between">
      <div>
        <Text></Text>
        <Link
          href="/shop"
          className="bg-shop_dark_green text-white py-2 px-5 rounded-lg hover:bg-shop_light_green hoverEffect"
        >
          Buy Now
        </Link>
      </div>

      <div>
        <Image src={banner_1} alt="banner1" className="hidden md:inline-flex w-96"></Image>
      </div>
    </div>
  );
}
