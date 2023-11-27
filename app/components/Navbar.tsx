'use client'

import { SafeUser } from "../types";
import { ThemeButton } from "./ThemeButton";
import UserMenu from "./sidebar/UserMenu";

interface NavbarProps {
   currentUser: SafeUser | null
}
const Navbar: React.FC<NavbarProps> = ({
   currentUser
}) => {
   return (
      <nav className="absolute top-0 left-0 w-full z-10 lg:flex-row lg:flex-nowrap lg:justify-start flex items-center py-4 px-4 bg-gray-500 text-gray-700 dark:bg-[#28253b] dark:text-white">
         <div className="w-full mx-aut0 items-center flex justify-between lg:flex-nowrap flex-wrap lg:px-6 px-4">
            <a href="" className=" text-lg uppercase inline-block font-semibold my-3">Settings Page</a>
           
               <ThemeButton/>
               <UserMenu currentUser={currentUser} />
         </div>
      </nav>
   )
}

export default Navbar;