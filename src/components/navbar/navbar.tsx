"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { TiThMenu } from "react-icons/ti";
import Link from "next/link";

import User1 from "@/assets/images/users/user-1.jpg";
import LogoSmImg from "@/assets/images/small-logo.svg";
import LogoLgImg from "@/assets/images/logo/meesralogonbfc.svg";

const Navbar = ({ showMobilemenu }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center p-2 px-4 h-16 fixed w-full z-50 bg-white">
        <div className="flex justify-center items-center">
          <div className="pr-8 h-14 flex justify-center items-center">
            <Image
              src={LogoLgImg}
              className="hidden sm:block h-12"
              alt="logo"
            />
            <Image
              src={LogoSmImg}
              className=" h-10 w-10 sm:hidden"
              alt="logo"
            />
          </div>
          <button color="primary" onClick={showMobilemenu}>
            {/* <TiThMenu /> */}
            <i className="bi bi-list text-xl"></i>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <i className="bi bi-bell-fill"></i>
          </div>
          <button
            className="flex gap-3 justify-center items-center"
            onClick={toggleDropdown}
          >
            <div className="rounded-full w-10 h-10 flex justify-center items-center">
              <Image src={User1} alt="logo" className="rounded-full" />
            </div>
            Jone Doe
          </button>
          {isOpen && (
            <ul
            ref={dropdownRef}
            id="profileDropdown"
            className="p-1 fixed top-20 right-4 z-[100] bg-white rounded-box w-64 sm:w-52 shadow-xl text-sm text-m-text transition rounded"
          >
            <li className="px-5 py-4 font-medium">Welcome!</li>
            <li className="px-5 py-2 hover:bg-gray-100">
              <Link href="/profile">
                <i className="bi bi-person pr-2"></i>
                My Profile
              </Link>
            </li>
            <li className="px-5 py-2 hover:bg-gray-100">
              <Link href="/">
                <i className="bi bi-box-arrow-right pr-2"></i>
                Logout
              </Link>
            </li>
          </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
