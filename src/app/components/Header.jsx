import React from "react";

function Header() {
  return (
    <div className="navbar">
      <div className="flex-1">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <i className="fa-solid fa-bars fa-xl"></i>
        </label>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <button className="btn btn-circle btn-sm btn-ghost">
          <i className="fa-solid fa-bell fa-2xl"></i>
        </button>
        <button className="btn btn-circle btn-sm btn-ghost">
          <i className="fa-solid fa-gear fa-2xl"></i>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
