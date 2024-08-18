import Link from "next/link";
import React from "react";

function timelnePage() {
  return (
    <>
      <div className="bg-white/10 rounded-xl w-full px-5 py-7 min-h-[50rem] mb-5">
        <Link href="/borad" className={`btn mr-2 font-bold `}>
          Board
        </Link>
        <button className={`btn font-bold bg-primary hover:bg-primary/100`}>
          Timeline
        </button>
        <div className="border-t-2 border-white my-3"></div>
        <div className="flex justify-between ">
          <div className="flex items-center p-4 w-1/2 bg-black/30 rounded-xl">
            <div className="font-bold">BNK-48 Event handshake</div>
            <div className="ml-3 text-sm">(10 tasks)</div>
          </div>
          <button className="btn font-bold h-14">Mytask</button>
        </div>
        <div className="bg-black/15 rounded-lg mt-4">
          <div role="tablist" className="tabs tabs-bordered tabs-lg">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Tab 1"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content p-5">
              {/* วันที่ */}
              <div className="flex items-center gap-1"><h2 className="text-white text-xl font-bold">10/20/67</h2><h3>(อีก2วัน)</h3></div>
              
              <div className="flex justify-between bg-white h-20 items-center rounded-xl px-4">
                <div className="flex gap-x-4">
                  <img className="rounded-full h-14" src="https://apwqaytxolzmkspbehub.supabase.co/storage/v1/object/public/attachments/img.jpeg" alt="" />
                  <div className="">
                    <h3 className="text-black font-bold text-xl">Task</h3>
                    <h4 className="text-gray-400">Mr.Neytipong</h4>
                  </div>
                </div>
                <div>
                    {/* เอาปุ่มมาใส่ */}
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Tab 2"
            />
            <div role="tabpanel" className="tab-content p-10">
              Tab content 2
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Tab 3"
            />
            <div role="tabpanel" className="tab-content p-10">
              Tab content 3
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default timelnePage;
