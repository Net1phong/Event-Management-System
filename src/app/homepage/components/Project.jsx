import React from "react";

function Project({ name, pic, by }) {
  return (
    <div>
      {/* card */}
      <div className="rounded-xl w-[300 px] h-60 relative">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={pic}
          alt="Movie"
        />
        <div className="bg-base-100/60 backdrop-blur-sm h-16 rounded-b-xl absolute inset-x-0 bottom-0 py-2 px-3">
          <p className=" font-bold text-white">{name}</p>
          <p className=" font-medium">{by}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
