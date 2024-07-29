import Link from "next/link";
import React from "react";

function timelnePage() {
  return (
    <>
      <div className="bg-white/10 rounded-xl w-full px-5 py-7">
        <Link href="/borad" className={`btn mr-2 font-bold `}>
          Board
        </Link>
        <button className={`btn font-bold bg-primary hover:bg-primary/100`}>
          Timeline
        </button>
        <div className="border-t-2 border-white my-3"></div>
        <div className="flex justify-between ">
          <div className="flex items-center p-4 w-1/2 bg-black/30 rounded-2xl">
            <div className="font-bold">BNK-48 Event handshake</div>
            <div className="ml-3 text-sm">(10 tasks)</div>
          </div>
          <button className="btn font-bold">Mytask</button>
        </div>

      </div>
    </>
  );
}

export default timelnePage;
