'use client';

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useRentModal from "@/app/hooks/useRentModal";
import { SafeUser } from "@/app/types";

import Avatar from "@/app/components/Avatar";

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 ">
        <div
          onClick={toggleOpen}
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
          <span className="font-semibold text-sm">{currentUser?.name}</span><br/>
          <span className="font-normal text-xs">{currentUser?.email}</span>
          </p>
          <Avatar src={currentUser?.image} size={45}/>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0
            md:top-16
            top-[18px] 
            text-md
            dark:bg-[#1E2746] 
          "
        >
          <div className="flex flex-col items-start cursor-pointer p-2 text-left">
            {currentUser ? (
              <>
                <button onClick={() => signOut()}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={loginModal.onOpen}>
                  Login
                </button>
                <button onClick={registerModal.onOpen}>
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;