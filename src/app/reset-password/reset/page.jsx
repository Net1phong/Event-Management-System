import React from "react";

function resetPage() {
  return (
    <>
      <div className="flex justify-between items-center px-32 mt-2">
        <div className="w-2/3">
          <img src="/Title.svg" alt="" />
        </div>
        <div className="bg-white/10 w-1/3 h-[600px] rounded-3xl p-10">
          <h1 className="text-3xl font-bold text-white">Password Reset</h1>
          <form className="pt-10" action="">

            <label className="input rounded-3xl flex items-center px-6 gap-4 mb-4 bg-white text-black text-md">
              <i class="fa-solid fa-lock"></i>
              <input
                type="password"
                className="grow"
                placeholder="New Password"
              />
            </label>

            <label className="input rounded-3xl flex items-center px-6 gap-4 bg-white text-black text-md">
              <i class="fa-solid fa-lock"></i>
              <input
                type="password"
                className="grow"
                placeholder="Confirm Password"
              />
            </label>

          </form>

          <div className="flex justify-end mt-7">
            <button className="btn btn-md bg-primary hover:bg-primary/50 border-none rounded-full text-white w-44 font-bold">Confirm</button>
          </div>
          <div className="flex justify-end pt-40">
            <img src="/Mascot.svg" alt="" width="100px"/>
          </div>
            
        </div>
      </div>
    </>
  );
}

export default resetPage;