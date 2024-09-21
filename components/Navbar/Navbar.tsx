"use client";

import { motion } from "framer-motion";
import { navlinks } from "@/lib/data";
import logo from "@/public/nav-logo.png";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header>
      {/* Desktop Navbar */}
      <motion.div
        className="hidden lg:block fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-indigo-500 border-opacity-60 bg-black shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:top-6 md:h-[3.25rem] md:w-[36rem] md:rounded-full z-50"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="hidden md:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 z-50">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-sm uppercase font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link href="/" className="flex items-center justify-center">
              <Image src={logo} alt="logo" className="h-9 w-9" />
            </Link>
          </motion.li>
          {navlinks.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-indigo-500 transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      {/* Mobile Navbar */}
      <nav className="flex lg:hidden fixed top-0 left-0 w-full bg-black shadow-md z-50">
        <div className="flex justify-between items-center px-4 py-3 w-full">
          <Link href="/" >
            <Image src={logo} alt="logo" className="h-9 w-9" />
          </Link>
          <button
            onClick={toggleDrawer}
            className="text-2xl text-white focus:outline-none"
          >
            &#9776;
          </button>
        </div>
        {isDrawerOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
            <div className="fixed top-0 left-0 w-2/3 h-full bg-white p-4 z-50">
              <button
                onClick={toggleDrawer}
                className="text-2xl focus:outline-none"
              >
                &times;
              </button>
              <ul className="mt-8 space-y-4">
                {navlinks.map((link) => (
                  <li key={link.hash}>
                    <Link
                      href={link.hash}
                      className="text-lg"
                      onClick={toggleDrawer}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
