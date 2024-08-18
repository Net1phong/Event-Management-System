import React from "react";

function Card() {
  return (
    <>
      <div className="bg-white p-2 rounded-xl text-sm text-black">
        <h1 className="pb-2">BNK-48</h1>
        <p className="pb-2">des</p>
        <div className="flex items-center">
          <img
            className="w-8 rounded-full "
            src="https://apwqaytxolzmkspbehub.supabase.co/storage/v1/object/public/attachments/img.jpeg"
            alt=""
          />
          <p className="pl-2">name</p>
        </div>
      </div>
    </>
  );
}

export default Card;
