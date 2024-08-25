"use client";

import React, { useState, useEffect } from "react";

export default function EditPf() {
  const [name, setName] = useState("User");
  const [about, setAbout] = useState("");
  const [urlfacebook, setFacebookLink] = useState("");
  const [urlinstargram, setInstagramLink] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // ดึงข้อมูลจาก localStorage ตอนเริ่มต้น
  useEffect(() => {
    const savedProfileData = JSON.parse(localStorage.getItem("profileData"));
    if (savedProfileData) {
      setName(savedProfileData.name);
      setAbout(savedProfileData.about);
      setFacebookLink(savedProfileData.facebookLink);
      setInstagramLink(savedProfileData.instagramLink);
    }
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handleFacebookLinkChange = (event) => {
    setFacebookLink(event.target.value);
  };

  const handleInstagramLinkChange = (event) => {
    setInstagramLink(event.target.value);
  };

  const handlePopup = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const cancelSubmission = () => {
    setShowPopup(false);
  };

  const saveProfileData = (data) => {
    localStorage.setItem("profileData", JSON.stringify(data));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const profileData = {
      name: name.trim() || "User", 
      about: about,
      facebookLink: urlfacebook,
      instagramLink: urlinstargram,
    };
    saveProfileData(profileData);
    setShowPopup(false);

    // รีเซ็ตค่าในฟอร์ม
    setName("User");
    setAbout("");
    setFacebookLink("");
    setInstagramLink("");
  };

  return (
    <div className="mt-2">
      <div className="flex text-center items-center gap-3 ">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost avatar hover:bg-transparent"
          >
            <div className="w-40 rounded-full skeleton ">{/* Imag */}</div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-primary backdrop-blur-sm font-bold rounded-box z-[100] mt-3 w-52 p-2 shadow text-white"
          >
            <li>
              <a>
                <i className="fa-solid fa-user"></i> Edit Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="pl-4 text-white text-3xl font-bold w-full flex justify-between">
          <p className="">{name}</p>
          <form action="" onSubmit={handlePopup} className="relative">
            <button className="btn bg-primary rounded-full border-none hover:scale-110 duration-300">
              <i className="fa-solid fa-pencil text-xl"></i>
            </button>
          </form>

          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="w-[1000px] h-fit bg-white p-5 rounded-xl shadow-lg relative">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black text-xl hover:text-primary"
                  onClick={cancelSubmission}
                >
                  ✕
                </button>
                <form onSubmit={handleSubmit} className="relative">
                  <h1 className="text-2xl text-primary text-start font-extrabold ">
                    Setting Profile
                  </h1>
                  <div className="flex flex-col items-start text-start text-black gap-5">
                    <div className="w-full pt-14">
                      <h1 className="font-extrabold text-2xl pb-2">Name</h1>
                      <input
                        type="text"
                        className="w-full h-fit font-semibold text-base rounded-lg border-none p-2 bg-[#D9D9D9] focus:outline-none"
                        placeholder="Enter name"
                        value={name}
                        onChange={handleNameChange}
                      />
                    </div>
                    <div className="w-full">
                      <h1 className="font-extrabold text-2xl pb-2">About me</h1>
                      <textarea
                        placeholder="Enter something about you ...."
                        className="w-full h-[100px] resize-none font-semibold text-base rounded-lg border-none p-2 bg-[#D9D9D9] focus:outline-none"
                        value={about}
                        onChange={handleAboutChange}
                      ></textarea>
                    </div>
                    <div className="w-full">
                      <div className="pb-4">
                        <h1 className="font-extrabold text-2xl">Link</h1>
                      </div>
                      <div className="flex gap-3 pb-2 items-center">
                        <img
                          src="facebook.png"
                          alt="facebook"
                          className="w-10 h-10"
                        />
                        <h1 className="font-extrabold text-xl">Facebook</h1>
                      </div>
                      <input
                        type="text"
                        className="w-full h-fit font-semibold text-base rounded-lg border-none p-2 bg-[#D9D9D9] focus:outline-none"
                        placeholder="Enter Url"
                        value={urlfacebook}
                        onChange={handleFacebookLinkChange}
                      />
                      <div className="flex gap-3 pb-2 pt-5 items-center">
                        <img
                          src="instagram.png"
                          alt="instagram"
                          className="w-10 h-10"
                        />
                        <h1 className="font-extrabold text-xl">Instagram</h1>
                      </div>
                      <input
                        type="text"
                        className="w-full h-fit font-semibold text-base rounded-lg border-none p-2 bg-[#D9D9D9] focus:outline-none"
                        placeholder="Enter Url"
                        value={urlinstargram}
                        onChange={handleInstagramLinkChange}
                      />
                      <div className="flex justify-end mt-20">
                        <button
                          type="submit"
                          className="btn font-extrabold bg-primary border-none rounded-lg text-white w-52 text-2xl"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
