"use client"
import Calendar from "./components/Calendar";

function calendarPage() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 pb-5">
      <div className="bg-white/10 rounded-xl w-3/4 h-[98vh] px-10 py-5">
        <Calendar />
      </div>
      {/* <div className="bg-white/10 rounded-xl w-3/4 h-20"></div> */}
    </div>
  );
}

export default calendarPage;
