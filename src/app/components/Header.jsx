"use client"
import { useState , useEffect , useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [backgroundColor , setBackgroundColor] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 80) {
      setBackgroundColor(true);
    } else {
      setBackgroundColor(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`navbar fixed top-0 inset-x-0 z-[100] transition-colors duration-200 ${backgroundColor ? "bg-white/5 backdrop-blur-sm" : ""}`}>
      <div className="flex-1 space-x-2">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost text-white"
        >
          <i className="fa-solid fa-bars fa-xl"></i>
        </label>
        <Link href="/">
          <Image
            className="active:scale-95 transition-all duration-150 cursor-pointer"
            src="/Title.svg"
            width={70}
            height={70}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex-none gap-1">
        {/* Bell */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-sm btn-ghost hover:bg-transparent text-white"
          >
            <i className="fa-regular fa-bell fa-xl"></i>
          </div>
          <div
            tabIndex={0}
            className="menu dropdown-content bg-base-100/25 backdrop-blur-sm font-bold rounded-box z-[20] mt-5 w-80 px-2 py-5 shadow"
          >
            <div className="flex flex-col h-80">
              <h2 className="text-[1.6rem] text-white font-extrabold mx-4">
                Notification
              </h2>
              <div className="border-b-2 border-white my-4 mx-3"></div>
              <div className=" grid place-content-center h-full">
                <div className="flex flex-col items-center">
                  <Image
                    className="active:scale-95 transition-all duration-150 cursor-pointer"
                    src="/Mascot.svg"
                    width={200}
                    height={200}
                    alt="Logo"
                  />
                  <h3 className="text-center text-xl text-white">No unread notifications</h3>
                </div>
              </div>
            </div>
            {/* <div className="grid place-content-center h-full border-2"></div> */}
          </div>
        </div>
        {/* Profile */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar hover:bg-transparent"
          >
            <div className="w-8 rounded-full skeleton ">{/* Imag */}</div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100/25 backdrop-blur-sm font-bold rounded-box z-[20] mt-3 w-52 p-2 shadow text-white"
          >
            <li>
              <a>
                <i className="fa-solid fa-user"></i> Profile
              </a>
            </li>
            <li>
              <a>
                <i className="fa-solid fa-gear"></i> Settings
              </a>
            </li>
            <li>
              <a className="hover:bg-error">
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
