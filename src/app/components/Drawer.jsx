import React from "react";

import Header from "./Header";

function Drawer({ children }) {
  return (
    <>
      <div className="drawer ">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
        />
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
          <div className="w-60 py-2 bg-base-200 px-2 min-h-full"></div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
