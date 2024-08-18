import React from "react";

function List() {
  return (
    <>
      <div className="bg-white/10 p-5 w-96 rounded-2xl text-xl font-bold min-h-[45rem]">
        <h1>TO DO</h1>
        <div className="border-t-2 border-white my-3"></div>


        {/* card */}
        

        <button className="btn bg-black hover:bg-primary w-full mt-2 border-none text-white">
          <div className="flex w-full ">
            <i className="fa-solid fa-plus mr-3"></i>Add a card
          </div>
        </button>
      </div>
    </>
  );
}

export default List;
