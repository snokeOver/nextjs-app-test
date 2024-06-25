"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services ",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    className="font-bold hover:text-prime duration-500"
                    href={link.path}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image src="/assets/logo.svg" alt="logo" width={100} height={50} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  className="font-bold hover:text-prime duration-500"
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-5 mr-6 text-2xl">
            <IoIosSearch />
            <FaCartArrowDown />
          </div>
          <button className="btn btn-outline btn-primary px-5">
            Appointment
          </button>
          {session?.status === "unauthenticated" ? (
            <Link href={"/login"} className="btn btn-primary ml-5">
              Log In
            </Link>
          ) : (
            <button onClick={() => signOut()} className="btn btn-primary ml-5">
              log Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
