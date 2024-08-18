"use client";
import { useState } from "react";
import Project from "./components/Project";

function page() {
  const [modal, setModel] = useState(false);

  const openModel = () => {
    setModel(true);
  };

  return (
    <>
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
            <button className="btn" onClick={openModel}>
              Create Project
            </button>
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
              <Project
                pic="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                name="Spider-Man"
                by="By Ice"
              />
              <Project
                pic="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                name="Sneaker Show"
                by="By Oil"
              />
              <Project
                pic="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                name="Event Music"
                by="By Phone"
              />
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-[50rem] h-[48rem] bg-white">
            <button
              onClick={() => {
                setModel(false);
              }}
              className="btn btn-md btn-circle btn-ghost absolute right-5 top-5 text-black text-xl"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="w-full  flex justify-between">
              <form className="flex ml-12 mt-12 w-32" action="submit">
                <div className="flex justify-between">
                  <label className="input rounded-xl flex-col items-center bg-black/20 text-white text-md size-64 justify-center text-center hover:cursor-pointer">
                    <i class="fa-regular fa-image text-3xl pt-24"></i>
                    <input hidden type="file" name="filename" />
                    <div className="text-xl font-bold mt-3">Upload Picture</div>
                  </label>
                </div>
              </form>

              <div>
                <div className="mr-12 mt-12 grid grid-cols-4 gap-3 content-start">
                  <button className="rounded-xl size-20 bg-[#EED05F]"></button>
                  <button className="rounded-xl size-20 bg-[#96DCA6]"></button>
                  <button className="rounded-xl size-20 bg-[#67C5DF]"></button>
                  <button className="rounded-xl size-20 bg-[#5395C3]"></button>

                  <button className="rounded-xl size-20 bg-[#F3995B]"></button>
                  <button className="rounded-xl size-20 bg-[#BB9AEB]"></button>
                  <button className="rounded-xl size-20 bg-[#7E5FF2]"></button>
                  <button className="rounded-xl size-20 bg-[#03468F]"></button>

                  <button className="rounded-xl size-20 bg-[#FFB889]"></button>
                  <button className="rounded-xl size-20 bg-[#FFC8C8]"></button>
                  <button className="rounded-xl size-20 bg-[#F88080]"></button>
                  <button className="rounded-xl size-20 bg-[#EA4B52]"></button>
                  
                </div>
              </div>
            </div>

            <div className="w-full px-12 py-6">
              {" "}
              <form className="pt-1" action="">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xl flex items-center font-bold text-black/80">
                    Project Name
                  </p>
                </div>

                <label className="input rounded-xl flex items-center px-3 gap-4 bg-black/20 text-black/80 text-xl">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Project name ..."
                  />
                </label>
              </form>
              <p className="text-xl flex items-center font-bold text-black/80 mt-6">
                Visibility
              </p>
              <div className="flex items-center justify-between mt-2">
                <select className="select select-bordered w-64 max-w-xs bg-black/20 text-black/80 font-bold text-xl">
                  <option
                    selected
                    className="font-bold bg-black/20 text-black/80 text-2xl py-10"
                    value="public"
                  >
                    Public
                  </option>
                  <option
                    value="workspace"
                    className="font-bold bg-black/20 text-black/80 text-2xl  py-10"
                  >
                    Workspace
                  </option>
                  <option
                    value="private"
                    className="font-bold bg-black/20 text-black/80 text-2xl py-10"
                  >
                    Private
                  </option>
                </select>

                <button className="btn btn-md bg-primary hover:bg-primary/80 border-none rounded-2xl text-white w-40 font-bold text-xl">
                  Create
                </button>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default page;
