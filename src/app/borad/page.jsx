"use client";
import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
      {/* tab */}

      <div className="bg-white/10 rounded-xl w-full px-5 py-4 mb-5 min-h-[50rem] space-y-3">
        <button
          className={`btn mr-2 font-bold bg-primary hover:bg-primary/100`}
        >
          Board
        </button>
        <Link href="/borad/timeline" className={`btn font-bold`}>
          Timeline
        </Link>
        <div className="border-t-2 border-white my-3"></div>
        <div className="flex justify-between ">
          <div className="flex items-center p-4 w-1/2 bg-black/30 rounded-xl">
            <div className="font-bold">BNK-48 Event handshake</div>
            <div className="ml-3 text-sm">(10 tasks)</div>
          </div>
          <button className="btn font-bold h-14">Mytask</button>
        </div>
        {/* contents */}
        <div className="flex gap-5 overflow-x-scroll w-full">
          {/* list */}
          <div className="bg-white/10 p-5 w-96 rounded-2xl text-xl font-bold min-h-[45rem]">
            <h1>TO DO</h1>
            <div className="border-t-2 border-white my-3"></div>
            {/* card */}
            <div className="bg-white p-2 rounded-xl text-sm text-black">
              <h1 className="pb-2">BNK-48</h1>
              <p className="pb-2">des</p>
              <div className="flex items-center">
                <img
                  className="w-8 rounded-full "
                  src="https://apwqaytxolzmkspbehub.supabase.co/storage/v1/object/public/attachments/img.jpeg"
                  alt=""
                />
                <p className="pl-2">name</p>
              </div>
            </div>

            <button className="btn bg-black hover:bg-primary w-full mt-2 border-none text-white"><div className="flex w-full "><i className="fa-solid fa-plus mr-3"></i>Add a card</div></button>
          </div>
          
          <div className="btn bg-white/10 p-5 w-96 rounded-2xl text-white text-xl font-bold h-fit hover:bg-white/10 border-none">
            <div className="flex justify-between w-full items-center">ADD<i className="fa-solid fa-plus"></i></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
