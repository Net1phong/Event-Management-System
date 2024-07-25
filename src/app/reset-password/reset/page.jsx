import React from "react";

function resetPage() {
  return (
    <>
      <div className="flex justify-between items-center px-48 mt-10">
        <div className="w-2/3">
          <img src="/Title.svg" alt="" />
        </div>
        <div className="bg-white/10 w-1/3 rounded-3xl p-12">
          <h1 className="text-4xl font-bold text-white">Password Reset</h1>
          <form className="pt-16" action="">

            <label className="input rounded-3xl flex items-center py-6 px-6 gap-4 mb-6 bg-white text-black text-xl">
              <i class="fa-solid fa-lock"></i>
              <input
                type="password"
                className="grow"
                placeholder="New Password"
              />
            </label>

            <label className="input rounded-3xl flex items-center py-6 px-6 gap-4 bg-white text-black text-xl">
              <i class="fa-solid fa-lock"></i>
              <input
                type="password"
                className="grow"
                placeholder="Confirm Password"
              />
            </label>

          </form>

          <div className="flex justify-end mt-10">
            <button className="btn btn-md bg-primary hover:bg-primary/50 border-none rounded-full text-white w-44 font-bold">Confirm</button>
          </div>
          <div className="flex justify-end pt-10">
            <img src="/Mascot.svg" alt="" width="200px" height="200px"/>
          </div>
            
        </div>
      </div>
    </>
  );
}

export default resetPage;