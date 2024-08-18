import React from "react";

function Timeline({members,img,task,date}) {
  return (
    <>
      <div className="flex items-center">
        <h2 className="text-white text-xl font-bold">10/20/67</h2>
        <h3>{/* cal date */}</h3>
      </div>

      <div className="flex justify-between bg-white h-20 items-center rounded-xl px-4">
        <div className="flex gap-x-4">
          <img
            className="rounded-full h-14"
            src="https://apwqaytxolzmkspbehub.supabase.co/storage/v1/object/public/attachments/img.jpeg"
            alt="Avatar"
          />
          <div>
            <h3 className="text-black font-bold text-xl">Task</h3>
            <h4 className="text-gray-400">Mr.Neytipong</h4>
          </div>
        </div>
        <div>{/* เอาปุ่มมาใส่ */}</div>
      </div>
    </>
  );
}

export default Timeline;
