function Comment({ comment }) {
  if (!comment) {
    return (
      <div className="text-center flex justify-center mt- text-4xl font-bold mt-64 text-white/50">
        No comment
      </div>
    );
  }

  return (
    <div className="flex flex-col-5 mb-6">
      <div
        tabIndex={0}
        className="collapse collapse-open border-base-300 bg-black/70"
      >
        <div className="collapse-title text-xl font-medium pr-5">
          <div className="flex text-center items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User Avatar"
                />
              </div>
            </div>
            <div className="pl-4 text-white w-full flex justify-between">
              <p className="">Usersadfsadfsadfasdfasdfsadf</p>

              <span className="cursor-pointer ml-5 hover:text-red-600 duration-75">
                <i class="fa-solid fa-trash py-2 "></i>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white/95 p-5 text-black font-bold">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
