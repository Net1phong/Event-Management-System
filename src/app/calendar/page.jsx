"use client";
import { useState, useEffect } from "react";
import axios from "axios";

// components
import Calendar from "./components/Calendar";

function CalendarPage() {
  const [dataEvents, setDataEvents] = useState([]);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const formatDate = (dateString, endDate) => {
    const date = new Date(dateString);
    {
      !endDate
        ? date.setUTCDate(date.getUTCDate() + 1)
        : date.setUTCDate(date.getUTCDate() + 2);
    }
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${year}-${month}-${day}`;
  };

  const formatDateDetail = (dateString) => {
    const date = new Date(dateString);
    date.setUTCDate(date.getUTCDate() + 1);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/events`
        );
        const formattedData = response.map((data) => ({
          ...data,
          startDate: formatDate(data.startDate),
          endDate: formatDate(data.endDate, true),
        }));
        setDataEvents(formattedData);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  console.log(dataEvents);

  const detailClose = () => {
    setDetailOpen(false);
    setSelectedEvent(null);
  };

  const handleEventClick = async (arg) => {
    try {
      const { data: response } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/events/${arg.event.id}`
      );
      const formattedData = response.map((data) => ({
        ...data,
        startDate: formatDateDetail(data.startDate),
        endDate: formatDateDetail(data.endDate),
      }));
      setSelectedEvent(formattedData[0]);
      await setDetailOpen(true);
      window.scrollTo({
        top: document.getElementById("detail").offsetTop,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between gap-5 pb-5">
      <div className="bg-white/10 rounded-xl w-3/4 h-[98vh] px-10 py-5">
        <Calendar events={dataEvents} handleEventClick={handleEventClick} />
      </div>
      {/* detail */}
      {detailOpen && (
        <div
          id="detail"
          className="bg-white/10 rounded-xl w-3/4 h-fit p-5 space-y-3 relative"
        >
          <div className="absolute top-3 right-3">
            <button
              onClick={detailClose}
              className="btn btn-circle btn-ghost text-white hover:rotate-90 transition-all duration-300 hover:bg-primary/50"
            >
              <i className="fa-solid fa-xmark fa-xl"></i>
            </button>
          </div>
          <h2 className="text-5xl text-white font-extrabold capitalize">
            {selectedEvent.title}
          </h2>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold w-1/2">
              Board : {""}
              <span className="text-white text-2xl">{selectedEvent.board}</span>
            </h3>
            <h3 className="text-xl font-bold w-1/2 px-2">
              Date :{" "}
              <span className="text-white text-2xl">
                {selectedEvent.startDate == selectedEvent.endDate
                  ? selectedEvent.endDate
                  : `${selectedEvent.startDate} - ${selectedEvent.endDate}`}
              </span>
            </h3>
          </div>
          <div className="flex items-center gap-5">
            <h3 className="text-xl font-bold">Status : </h3>
            <select className="select bg-white text-black w-full max-w-48 font-bold text-xl rounded-2xl">
              <option selected>{selectedEvent.status}</option>
              <option>In Progress</option>
              <option>Review</option>
              <option>Done</option>
            </select>
          </div>
          <h3 className="text-xl font-bold">Description :</h3>
          <div className="w-full min-h-44 h-fit bg-white/15 shadow-xl rounded-xl p-5">
            <p className="text-xl text-white font-semibold">
              {selectedEvent.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarPage;
