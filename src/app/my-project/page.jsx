import React from "react";
import Project from "./components/Project";

function page() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col items-center px-4  justify-between gap-5 pt-4">
        <div className="bg-white/10 rounded-xl w-full h-[13vh] px-10 py-5">
          <div className="flex justify-between items-center">
            <div className="flex gap-10">
              <div className="grid justify-items-center">
                <p className="text-md font-medium">TO DAY’S DATE</p>
                <p className="pt-2 text-xl font-bold text-white">MAR 1, 2024</p>
              </div>

              <div className="grid justify-items-center">
                <p className="text-md font-medium">TOTAL PROJECT</p>
                <p className="pt-2 text-xl font-bold text-white">10</p>
              </div>
            </div>
            <button className="btn font-bold flex">Create Project</button>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col items-center p-4 justify-between gap-5 pb-5">
        <div className="bg-white/10 rounded-xl w-full px-10 py-5">
          <div className="mt-2">
            <div className="flex text-center items-center gap-3 mb-6">
              <h1 className="text-xl font-extrabold text-white">My Project</h1>
              <h1>(10 Project)</h1>
            </div>

            <div className="grid grid-cols-5 w-full gap-5">
              {/* card */}
              <Project pic="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" name="Spider-Man" by="By Ice"/>
              <Project pic="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" name="Sneaker Show" by="By Oil"/>
              <Project pic="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" name="Event Music" by="By Phone"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
