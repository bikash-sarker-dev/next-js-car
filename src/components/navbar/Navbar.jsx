"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session?.user?.image);
  let links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/"}>About</Link>
      </li>
      <li>
        <Link href={"/"}>Service</Link>
      </li>
      <li>
        <Link href={"/"}>Blogs</Link>
      </li>
      <li>
        <Link href={"/"}>Contacts</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Image
              src={"./assets/logo.svg"}
              width={80}
              height={50}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          {status === "authenticated" ? (
            <>
              <div>
                <Image
                  unoptimized={true}
                  src={session?.user?.image}
                  width={60}
                  height={50}
                  alt="profile"
                />
              </div>
              <button
                onClick={() => signOut()}
                className="btn btn-primary btn-sm"
              >
                LOG-OUT
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-primary btn-sm" href={"/login"}>
                LOGIN
              </Link>
              <Link className="btn btn-primary btn-sm" href={"/register"}>
                REGISTER
              </Link>
            </>
          )}
          <button className="btn btn-outline ">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
