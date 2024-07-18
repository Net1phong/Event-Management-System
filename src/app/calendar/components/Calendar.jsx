import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar({ events, handleEventClick }) {
  const formattedEvents = events.map((event) => ({
    id: event.event_id,
    title: event.title,
    start: event.startDate,
    end: event.endDate,
    allDay: event.allDay,
  }));

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      nowIndicator={true}
      // editable={true}
      droppable={true}
      selectable={true}
      selectMirror={true}
      events={formattedEvents}
      eventClick={handleEventClick}
    />
  );
}

export default Calendar;
