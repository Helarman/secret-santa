'use client';

import { useCallback, useEffect, useState } from "react";
import { GoSignOut } from "react-icons/go";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes"
import { FaMoon, FaSun } from 'react-icons/fa6'


import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { SafeUser } from "@/app/types";

import Avatar from "@/app/components/Avatar";
import Notification from "@/app/components/Notification";
import { FaBell } from "react-icons/fa6";

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [userIsOpen, setUserIsOpen] = useState(false);

  const toggleUserOpen = useCallback(() => {
    setUserIsOpen((value) => !value);
  }, []);


  const [toggle, setToggle] = useState(false)

  const toggleTheme = () => {
      setToggle(!toggle)
  }
  const { setTheme } = useTheme()

  return (
    <>
      <div className="flex flex-row">

        <div className="mr-5 flex" onClick={toggleTheme}>
          
          {toggle ? <button className="p-5 rounded-full bg-gray-100  text-gray-900 dark:bg-[#181F39] dark:text-white" onClick={() => setTheme("dark")}>
            <FaMoon />
          </button> :
            <button className="p-5 rounded-full bg-gray-100  text-gray-900 dark:bg-[#181F39] dark:text-white" onClick={() => setTheme("light")}>
              <FaSun />
            </button>}
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-row items-center gap-3 ">
          <div
            onClick={toggleUserOpen}
            className="
            text-right
            md:border-l-2
            pl-5
            flex 
            flex-row 
            items-center 
            gap-3 
            cursor-pointer 
            transition 
            mt-3
            md:mt-0
            text-gray-900
            dark:text-violet-50
          "
          >
            <p>
              <span className="font-semibold text-sm">{currentUser?.name}</span><br />
              <span className="font-normal text-xs">{currentUser?.email}</span>
            </p>
            <Avatar src={currentUser?.image} size={45} />
          </div>
        </div>
        <div
          className={` ${userIsOpen ? 'block' : 'hidden'} absolute top-16 min-h-screen md:min-h-0 bg-white 
          dark:bg-[#1E2746] z-50 float-left p-2  text-left`}

        >
          {currentUser ? (
            <>
              <button className="ml-2 mt-2 mr-10 flex flex-row items-center hover:opacity-75" onClick={() => router.push('/notifications')}>
                <FaBell className="text-amber-500 mr-2" />
                <span>Notification</span>
              </button>
              <button className="ml-2 mt-2 mb-2 mr-10 flex flex-row items-center hover:opacity-75" onClick={() => signOut()}>
                <GoSignOut className="text-red-500 mr-2" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <button className="ml-2 mt-2 mr-1 flex flex-row items-center hover:opacity-75" onClick={loginModal.onOpen}>
                Login
              </button>
              <button className="ml-2 mt-1 mb-2 flex flex-row items-center hover:opacity-75" onClick={registerModal.onOpen}>
                Register
              </button>
            </>
          )}
        </div>
      </div >
    </>
  );
}

export default UserMenu;