
function layoutBoard({ children }) {
  return (
    <div className="flex flex-col items-center px-4  justify-between gap-5 pt-4">
      <div className="bg-white/10 rounded-xl w-full h-[13vh] px-10 py-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-10">
            <div className="flex-col">
              <p className="text-md font-extrabold">TO DAY’S DATE</p>
              <p className="pt-2 text-xl font-extrabold">MAR 1, 2024</p>
            </div>
            <p className="text-md font-extrabold">TOTAL PROJECT</p>
          </div>
          <button className="btn font-bold flex">Create Project</button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default layoutBoard;
