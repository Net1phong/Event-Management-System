import Link from "next/link";
import React from "react";

function resetPassword() {
  return (
    <>
      <div className="flex justify-between items-center px-32 mt-2">
        <div className="w-2/3">
          <img src="/Title.svg" alt="" />
        </div>
        <div className="bg-white/10 w-1/3 h-[600px] rounded-3xl p-10">
          <h1 className="text-3xl font-bold text-white">Foget Password</h1>
          <form className="pt-10" action="">
            <div className="flex items-center justify-between mb-3 px-4">
              <p className="text-sm flex items-center font-semibold">
                Enter your email
              </p>
            </div>

            <label className="input rounded-3xl flex items-center px-6 gap-4 bg-white text-black text-md">
              <i class="fa-solid fa-envelope"></i>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </form>

          <div className="flex items-center justify-between mt-7 px-4">
            <p className="text-sm flex items-center font-bold  text-red-400">
              Not found that email !
            </p>
          </div>

          <div className="flex justify-end mt-7">
            <Link href="/reset-password/reset" className="btn btn-md bg-primary hover:bg-primary/50 border-none w-44 rounded-full text-white font-bold">
              Reset Password
            </Link>
          </div><div className="flex justify-end mt-36">
            <img src="/Mascot.svg" alt="" width="100px" />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default resetPassword;
