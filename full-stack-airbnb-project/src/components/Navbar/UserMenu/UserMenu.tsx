"use client";

import useLoginModal from "@/hooks/useLoginModal/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal/useRegisterModal";
import useRentModal from "@/hooks/useRentModal/useRentModal";
import { signOut, useSession } from "next-auth/react";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../../Avatar/Avatar";
import MenuItem from "../MenuItem/MenuItem";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();
  const loginModal = useLoginModal();
  const { data: session } = useSession();

  const toggleOpen = useCallback(() => {
    setIsOpen((previousValue) => !previousValue);
  }, []);

  const onRent = useCallback(() => {
    if (!session) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, session]);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {session !== null ? (
              <>
                <MenuItem handleOnClick={() => {}} label="My trips" />
                <MenuItem handleOnClick={() => {}} label="My favorites" />
                <MenuItem handleOnClick={() => {}} label="My reservations" />
                <MenuItem handleOnClick={() => {}} label="My properties" />
                <MenuItem
                  handleOnClick={rentModal.onOpen}
                  label="Airbnb my home"
                />
                <hr />
                <MenuItem handleOnClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem handleOnClick={loginModal.onOpen} label="Login" />
                <MenuItem
                  handleOnClick={registerModal.onOpen}
                  label="Sign up"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
