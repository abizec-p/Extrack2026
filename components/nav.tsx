"use client";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { useState } from "react";
import { FaRegChartBar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { usePathname } from "next/navigation";

import { FaWallet } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { PiRankingFill } from "react-icons/pi";
import { IoReceipt } from "react-icons/io5";

export default function Nav() {
  const [open, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!open);
  };
  return (
    <div>
      <div
        onClick={toggleMenu}
        className={`${open ? "hidden" : "flex"} absolute left-5 top-8`}
      >
        <CiMenuFries />
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`${open ? "flex" : "hidden"} z-50 fixed  transition ease-in-out duration-300 w-60 md:w-60 p-5   bg-white shadow-sm outline-none border-r h-screen flex flex-col justify-between md:flex absolute inset-0 md:fixed border-neutral-200`}
      >
        <div>
          <div className="flex pb-2  border-b border-neutral-200  justify-between items-center">
            <Image
              src="/extrack-logo-for-light-bg.png"
              alt="logo for extrack"
              height={5000}
              width={5000}
              className="h-7 w-auto"
            />
            <div onClick={toggleMenu} className=" block md:hidden">
              <IoMdClose />
            </div>
          </div>
          <div className="mt-5 ">
            <Link
              className=" flex active items-center gap-2 bg-neutral-200 hover:bg-neutral-200 p-2 rounded"
              href="/"
            >
              <MdSpaceDashboard />
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-2 hover:bg-neutral-200 p-2 rounded"
              href="/"
            >
              <FaRegChartBar />
              Overview
            </Link>
            <Link
              className="flex items-center gap-2 hover:bg-neutral-200 p-2 rounded"
              href="/"
            >
              <FaWallet />
              Transaction
            </Link>
            <Link
              className="flex items-center gap-2 hover:bg-neutral-200 p-2 rounded"
              href="/"
            >
              <FaChartPie />
              Monthly Chart
            </Link>
            <Link
              className="flex items-center gap-2 hover:bg-neutral-200 p-2 rounded"
              href="/"
            >
              <PiRankingFill />
              Ranking
            </Link>
            <Link
              className="flex items-center gap-2 hover:bg-neutral-200 p-2 rounded"
              href="/"
            >
              <IoReceipt />
              Top expenses
            </Link>
          </div>
        </div>
        <div className="flex border-t pt-2 border-neutral-300  flex-col">
          <Link className="font-bold " href="/">
            Abishek Pariyar
          </Link>
          <Link href="/">Settings</Link>
          <Link href="/">Logout</Link>
        </div>
      </div>
    </div>
  );
}
