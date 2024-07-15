import React from "react";
import Link from "next/link";
import Header from "./Header";

function Drawer({ children }) {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Header */}
          <Header />
          {/* Content */}
          <main>{children}</main>
        </div>
        <div className="drawer-side z-[101]">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="w-60  py-2 bg-base-200 px-2 min-h-full"></div>
          <ul className="menu bg-base-200  text-base-content min-h-full w-80 text-xl gap-4  font-bold  pt-12">
            {/* -------- icon ย้อนกลับ ------------------ */}

            <div className="flex justify-end px-4 pb-6 text-white">
              <i class="fa-solid fa-arrow-left " aria-label="close sidebar"></i>
            </div>
            <div className="border-t-2 border-white"></div>

            {/* -------คอนเทนข้างใน sidebar --------- */}
            
            <li className="mt-10">
              
              {/* ---------- Hompage -------------- */}
             
              <Link href="/" className="hover:bg-primary hover:text-white">
                <span>
                  <i
                    class="fa-solid fa-house py-2 mr-4"
                    for="my-drawer"
                    aria-label="close sidebar"
                  ></i>
                  Hompeage
                </span>
              </Link>
            </li>
            <li>
              
              {/* ------------- Projectpage ---------------- */}
             
              <Link href="/" className="hover:bg-primary hover:text-white">
                <span>
                  <i className="fa-regular fa-floppy-disk py-2 mr-4"></i>Project
                </span>
              </Link>
            </li>
            <li>
             
              {/* ------------ Calendar ------------- */}
              
              <Link
                href="/calendar"
                className="hover:bg-primary hover:text-white"
              >
                <span>
                  <i class="fa-solid fa-calendar-days py-2 mr-4"></i>Calendar
                </span>
              </Link>
            </li>
            <li>
             
              {/* ------------ Settingpage -------------- */}
              
              <Link href="/" className="hover:bg-primary hover:text-white">
                <span>
                  <i class="fa-solid fa-gear py-2 mr-4"></i>Setting
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Drawer;
