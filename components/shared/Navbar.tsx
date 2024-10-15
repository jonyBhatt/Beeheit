"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { AlignRight, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="  p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#">Logo</a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className=" focus:outline-none">
            <AlignRight className="text-primary" size={25} />
          </button>
        </div>

        {/* Nav Links & Button - Hidden on small screens */}
        <div
          className={`md:flex items-center space-x-6 ${
            isOpen ? "hidden" : "hidden"
          } `}
        >
          <Link
            href="#"
            className="hover:text-primary duration-300 transition-all ease-in-out"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:text-primary duration-300 transition-all ease-in-out"
          >
            What We Do
          </Link>
          <Link
            href="#"
            className="hover:text-primary duration-300 transition-all ease-in-out"
          >
            Our Approach
          </Link>
          <Link
            href="#"
            className="hover:text-primary duration-300 transition-all ease-in-out"
          >
            Insights
          </Link>
          <Link
            href="#"
            className="hover:text-primary duration-300 transition-all ease-in-out"
          >
            About
          </Link>
          <Button size={"lg"} className="font-semibold text-lg">
            Let&apos;s Talk
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden absolute top-0 left-0 w-full bg-gray-800 text-secondary dark:text-white p-4 space-y-4 h-svh flex flex-col items-start justify-center gap-8"
          >
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-white focus:outline-none"
            >
              <X className="text-primary font-bold" size={25} />
            </button>
            <Link
              href="#"
              className="block hover:text-primary duration-300 transition-all ease-in-out"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block hover:text-primary duration-300 transition-all ease-in-out"
            >
              What We Do
            </Link>
            <Link
              href="#"
              className="block hover:text-primary duration-300 transition-all ease-in-out"
            >
              Our Approach
            </Link>
            <Link
              href="#"
              className="block hover:text-primary duration-300 transition-all ease-in-out"
            >
              Insights
            </Link>
            <Link
              href="#"
              className="block hover:text-primary duration-300 transition-all ease-in-out"
            >
              About
            </Link>
            <Button size={"lg"} className="font-semibold text-lg">
              Let&apos;s Talk
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

/**
 *
 * md:hidden absolute top-0 left-0 w-full bg-gray-800  p-4 space-y-4
 */
