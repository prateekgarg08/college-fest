import { FC } from 'react'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Navbar: FC<{}> = ({}) => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)
  return (
    <div className=" flex items-center justify-between bg-bgBlack text-orange  px-2 overflow-visible">
      <div className="logo bg-bgBlack">
        <img
          src="/assets/logo/new.svg"
          alt=""
          width={150}
          height={100}
        />
      </div>
      <div className=" ">
        <div
          className="lg:hidden text-3xl"
          onClick={() => setIsMobileNavActive(true)}
        >
          <AiOutlineMenu />
        </div>
        <div
          className={`${
            isMobileNavActive ? 'flex' : 'hidden'
          } absolute w-full top-0 text-orange bg-bgBlack left-0 z-10 flex-col space-y-5 text-xl h-full  py-2 lg:text-base lg:static items-center   lg:flex lg:flex-row lg:space-x-4 lg:space-y-0`}
        >
          <div className="lg:hidden text-2xl font-bold  w-full flex flex-row-reverse">
            <AiOutlineClose onClick={() => setIsMobileNavActive(false)} />
          </div>
          <a
            href="#"
            className=""
          >
            Home
          </a>
          <a
            href="#"
            className=""
          >
            Events
          </a>
          <a
            href="#"
            className=""
          >
            Sponsors
          </a>
          <a
            href="#"
            className=""
          >
            Contact Us
          </a>
          <button className="rounded-2xl bg-orange text-black px-3 py-1">
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}
