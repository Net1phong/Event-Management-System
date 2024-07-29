"use client";
import React from "react";
import List from "./components/list";
import Link from "next/link";

function page() {

  return (
    <>
      {/* tab */}

      <div className="bg-white/10 rounded-xl w-full px-5 py-7">
        <button
          className={`btn mr-2 font-bold bg-primary hover:bg-primary/100`}
        >
          Board
        </button>
        <Link href="/borad/timeline"
          className={`btn font-bold `}
        >
          Timeline
        </Link>
        <div className="border-t-2 border-white my-3"></div>
        <div className="flex justify-between ">
          <div className="flex items-center p-4 w-1/2 bg-black/30 rounded-2xl">
            <div className="font-bold">BNK-48 Event handshake</div>
            <div className="ml-3 text-sm">(10 tasks)</div>
          </div>
          <button className="btn font-bold">
            Mytask
          </button>
        </div>

        <List />
      </div>
    </>
  );
}

export default page;
