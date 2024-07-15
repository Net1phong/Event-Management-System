import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="navbar fixed top-0 inset-x-0 z-[100]">
      <div className="flex-1">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost hover:bg-transparent"
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
        <button className="btn btn-circle btn-sm btn-ghost hover:bg-transparent">
          <i className="fa-regular fa-bell fa-xl "></i>
        </button>
        {/* Gear */}
        <button className="btn btn-circle btn-sm min-h-0 h-6 w-6 btn-ghost hover:bg-transparent ">
          <i className="fa-solid fa-gear fa-xl active:rotate-90 transition-all duration-300"></i>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar hover:bg-transparent"
          >
            <div className="w-8 rounded-full skeleton ">
              {/* Imag */}

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
