'use client'

import { SafeUser } from "../types";
import Search from "./navbar/Search";
import UserMenu from "./sidebar/UserMenu";

interface NavbarProps {
   currentUser: SafeUser | null
}
const Navbar: React.FC<NavbarProps> = ({
   currentUser
}) => {
   return (
      <nav
         className="
            absolute 
            top-0 
            left-0 
            w-full 
            z-10 
            lg:flex-row 
            lg:flex-nowrap 
            lg:justify-start 
            flex 
            justify-between
            items-center 
            py-4 
            px-4
            md:px-0
            md:min-h-20
            bg-white
            text-gray-700 
            dark:bg-[#1E2746] 
            dark:text-white
         "
      >
         <div className="w-full mx-aut0 items-center flex justify-end lg:flex-nowrap flex-row flex-wrap lg:px-6 px-4">
            
            <div className="flex lg:w-3/12 w-full lg:justify-end justify-between">
               <UserMenu currentUser={currentUser} />
            </div>
         </div>
      </nav>
   )
}

export default Navbar;