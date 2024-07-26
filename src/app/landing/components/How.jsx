import React from "react";

function How() {
  return (
    <div>
      {/* How1 */}
      <div className="flex items-center justify-between m-20">
        <div className="ml-8 w-1/2">
          <h1 className="font-black text-5xl w-[500px] mb-7 text-white">
            Make Your Board & Assign Your Work
          </h1>
          <p className="text-xl w-[500px] text-white">
            You can make boards, lists, cards and set deadlines for your work.
            Now you have a plan to do your work!
          </p>
        </div>
        <img
          className="w-1/2 rounded-xl"
          src="/Bord_page_add_card.png"
          alt=""
        />
      </div>
      {/* How2 */}
      <div className="flex items-center justify-between mt-32 m-20">
        <img className="w-1/2 rounded-xl" src="/calen.png" alt="" />
        <div className="ml-28 w-1/2">
          <h1 className="font-black text-5xl mb-7 text-white">
            Calendar for your plan
          </h1>
          <p className="text-xl w-[400px]  text-white">
            Manage your time and projects with a fully integrated calendar for
            your tasks.
          </p>
        </div>
      </div>
      {/* How3 */}
      <div>
        
        <div className="flex justify-center mt-48 mb-8">
            <h1 className="font-black text-8xl text-white">
            Collaborate with others
            </h1>
        </div>
        <div className="flex justify-center mb-20"><img className="w-[1000px] rounded-xl" src="/Bord_page.png" alt="" /></div>
        
        
      </div>
    </div>
  );
}

export default How;
