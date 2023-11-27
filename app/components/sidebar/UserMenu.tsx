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

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
            font-semibold
            text-sm
            uppercase
            flex 
            flex-row 
            items-center 
            gap-3 
            cursor-pointer 
            transition 
          "
        >
          
          {currentUser?.name}
          <Avatar src={currentUser?.image} />
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
            top-12 
            text-md
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <button onClick={() => signOut()}>
                  logout
                </button>
              </>
            ) : (
              <>
                <button onClick={loginModal.onOpen}>
                  login
                </button>
                <button onClick={registerModal.onOpen}>
                  register
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