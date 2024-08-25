function BoxCalenda({ BoxCalenda }) {

  if (!BoxCalenda) {
    return (
      <div className="text-center flex justify-center mt- text-4xl font-bold mt-64 text-white/50">
        No task
      </div>
    );
  }

  return (
    <div className="flex flex-col-5 mb-6">
      <div className="w-full bg-[#FFC035] h-28 rounded-xl cursor-pointer  hover:-translate-y-1 hover:scale-100 hover:bg-[#FFC035] duration-300 ">
        <div className="flex flex-row p-5 gap-20">
          <div clasname="flex flex-col ">
            <h1 className="text-xl font-extrabold text-center text-black">
              MON
            </h1>
            <h1 className="text-5xl font-extrabold   text-white">23</h1>
          </div>
          <div clasname="flex flex-col ">
            <h1 className="text-xl font-extrabold text-black">
              Meeting
            </h1>
            <h1 className="text-lg font-bold  text-black">Tomorrow has meeting with</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxCalenda;
