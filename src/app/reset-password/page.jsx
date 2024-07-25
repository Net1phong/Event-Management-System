import Link from "next/link";
import React from "react";

function resetPassword() {
  return (
    <>
      <div className="flex justify-between items-center px-48 mt-10">
        <div className="w-2/3">
          <img src="/Title.svg" alt="" />
        </div>
        <div className="bg-white/10 w-1/3 rounded-3xl p-12">
          <h1 className="text-4xl font-bold text-white">Foget Password</h1>
          <form className="pt-16" action="">
            <div className="flex items-center justify-between mt-4 mb-3 px-6">
              <p className="text-md flex items-center font-bold">
                Enter your email
              </p>
            </div>

            <label className="input rounded-3xl flex items-center py-6 px-6 gap-4 mb-6 bg-white text-black text-xl">
              <i class="fa-solid fa-envelope"></i>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </form>

          <div className="flex items-center justify-between mt-10 px-6">
            <p className="text-md flex items-center font-bold  text-red-400">
              Not found that email !
            </p>
          </div>

          <div className="flex justify-end mt-10">
            <Link href="/reset-password/reset" className="btn btn-md bg-primary hover:bg-primary/50 border-none rounded-full text-white w-44 font-bold">
              Reset Password
            </Link>
          </div>
          <div className="flex justify-end pt-10">
            <img src="/Mascot.svg" alt="" width="200px" height="200px" />
          </div>
        </div>
      </div>
    </>
  );
}

export default resetPassword;
