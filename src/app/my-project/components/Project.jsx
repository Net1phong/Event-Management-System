import React from "react";

function Project() {
  return (
    <div>
            <div className="flex flex-col items-center p-4 justify-between gap-5 pb-5">
        <div className="bg-white/10 rounded-xl w-full px-10 py-5">
          <div className="mt-2">
            <div className="flex text-center items-center gap-3 mb-6">
              <h1 className="text-xl font-extrabold text-white">My Project</h1>
              <h1>(10 Project)</h1>
            </div>
            {/* card */}
            <div className="grid grid-cols-5 w-full gap-5">
              <div className="rounded-xl w-full h-60 relative">
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  alt="Movie"
                />
                <div className="bg-base-100/60 backdrop-blur-sm h-16 rounded-b-xl absolute inset-x-0 bottom-0 py-2 px-3">
                  <p className=" font-bold text-white">Watch Movie</p>
                  <p className=" font-medium">project-name</p>
                </div>
              </div>

              <div className="rounded-xl w-full h-60 relative">
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
                <div className="bg-base-100/60 backdrop-blur-sm h-16 rounded-b-xl absolute inset-x-0 bottom-0 py-2 px-3">
                  <p className=" font-bold text-white">Sneaker Show</p>
                  <p className=" font-medium">project-name</p>
                </div>
              </div>

              <div className="rounded-xl w-full h-60 relative">
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                  alt="Album"
                />
                <div className="bg-base-100/60 backdrop-blur-sm h-16 rounded-b-xl absolute inset-x-0 bottom-0 py-2 px-3">
                  <p className=" font-bold text-white">Event Music</p>
                  <p className=" font-medium">project-name</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
