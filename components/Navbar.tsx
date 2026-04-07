import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import Searchbar from "./Searchbar";
import Carticon from "./Carticon";
import Favouriteicon from "./Favouriteicon";
import Signin from "./Signin";
import Mobilemenu from "./Mobilemenu";
import { currentUser } from "@clerk/nextjs/server";
import { log } from "node:console";
import { ClerkLoaded, Show, UserButton } from "@clerk/nextjs";

export default async function Navbar() {
  const user = await currentUser();
  log(user)
  return (
    <div className="bg-white py-5">
      <Container className=" flex gap-7 justify-between text-lightColor">
        {/* logo */}
        <div className="flex items-center justify-center gap-3 md:gap-0 ">
          <Mobilemenu ></Mobilemenu>
          <Logo ></Logo>
        </div>

        {/* navlinks */}
        <HeaderMenu></HeaderMenu>
        
        {/* buttons */}
        <div className="w-auto md:w-1/3 flex gap-5 items-center justify-end">
          <Searchbar></Searchbar>
          <Carticon></Carticon>
          <Favouriteicon></Favouriteicon>
          <ClerkLoaded>
            <Show when="signed-in">
              <UserButton></UserButton>
            </Show>
            {
              !user &&  <Signin></Signin>
            }
            
          </ClerkLoaded>
        </div>
      </Container>
    </div>
  );
}
