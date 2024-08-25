"use client";
import React from "react";
import { useState, useEffect } from "react";
import Editbg from "./components/Editbg";
import EditPf from "./components/EditPf";
export default function page() {
  const [username, setUsername] = useState("User");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username) {
      setShowPopup(true);
    }
  };

  const cancelSubmission = () => {
    setShowPopup(false);
  };

  // const handleName = () => {
  //   setUsername("List")
  // }

  return (
    <div>
      {/* content */}
      <Editbg />
      <div className="flex flex-col items-center px-4 justify-between gap-5 pb-2">
        <div className="bg-white/10 rounded-b-lg w-full px-10">
          <div className="flex  items-center justify-between gap-10 pt-10"></div>

          <EditPf />

          <div className="">
            <div className="flex  items-center flex- justify-between gap-5 pt-10">
              <div className="bg-white/10 rounded-xl  h-80 w-full  py-5">
                <h1 className="text-2xl font-extrabold px-10 pb-10 text-white ">
                  About me
                  <div className="py-3 flex justify-between gap-10">
                    <div className="bg-black/20 rounded-xl w-full h-56 px-2">
                      <p></p>
                    </div>
                    <div className="flex flex-col gap-4 w-72">
                      <div className="bg-black/20 flex rounded-xl flex-col w-full h-16 px-2">
                        <div className="flex p-4 justify-around items-center">
                          <i class="fa-brands fa-facebook text-xl"></i>

                          <p className="text-xl">Facebook</p>
                          <i class="fa-solid fa-arrow-up-right-from-square text-xl"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </h1>
              </div>
            </div>
            <div className="flex  items-center justify-between gap-10 pt-10">
              <div className="bg-white/10 rounded-xl  h-80 w-full  py-5">
                <h1 className="text-2xl font-extrabold px-10 pb-10 text-white ">
                  My project
                  <div className="flex flex-col gap-4 w-72 pt-5">
                    <div className="bg-black/20 flex rounded-xl flex-col w-fit h-16 px-2">
                      <div className="flex p-4 justify-around items-center">
                        <p className="text-xl">
                          Facebooasdfsadfasfsadfsadfsadf
                        </p>
                      </div>
                    </div>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
