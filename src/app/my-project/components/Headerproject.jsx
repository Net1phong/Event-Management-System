import React from "react";

function Headerproject() {
  return (
    <div>
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
    </div>
  );
}

export default Headerproject;
