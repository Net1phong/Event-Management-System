export default function Project() {
    return (
      <>
        <div className="flex flex-col items-center px-4  justify-between gap-5 pt-4">
          <div className="bg-white/10 rounded-xl w-full h-[13vh] px-10 py-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-10">
                <div className="flex-col">
                  <p className="text-md font-extrabold">TO DAY’S DATE</p>
                  <p className="pt-2 text-xl font-extrabold">MAR 1, 2024</p>
                </div>
  
                <p className="text-md font-extrabold">TOTAL PROJECT</p>
              </div>
              <button className="btn font-bold flex">Create Project</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 justify-between gap-5 pb-5">
          <div className="bg-white/10 rounded-xl w-full px-10 py-5">
            <div>
              <div className="p-4 text-center items-center flex gap-4">
                <h1 className="text-xl font-extrabold">Project</h1>
                <h1>(15 Project)</h1>
              </div>
              <div className="flex-row">
                <div className="carousel-item bg-base-100 w-96 shadow-xl">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }