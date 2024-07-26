import Link from "next/link";
import React from "react";

function Getstart() {
  return (
    <div>
      <div className="flex justify-end">
        <Link href="/signup" className="btn bg-white/20 hover:bg-white/10 w-32 font-black border-none rounded-3xl text-white">
          Sign Up
        </Link>
        <Link href="/signin" className="btn bg-primary hover:bg-primary/50 w-32 font-black border-none rounded-3xl text-white mx-2">
          Sign In
        </Link>
      </div>
      <div className="ml-16">
        <img className="w-[800px]" src="/LogoWithTitle.svg" alt="" />
        <div className="mx-20">
          <h1 className="text-3xl font w-[750px] text-white">
            if you wanna management your event , work, study you can try for
            free now!!
          </h1>
          <Link href="/signup" className="btn bg-secondary hover:bg-secondary/50 font-black border-none w-48 h-16 rounded-full text-white my-8 text-2xl">
            Get start
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Getstart;
