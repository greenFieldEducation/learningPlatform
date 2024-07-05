import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Math Class',
    start: new Date(2024, 6, 7, 10, 0),
    end: new Date(2024, 6, 7, 12, 0),
  },
  {
    title: 'Science Class',
    start: new Date(2024, 6, 8, 14, 0),
    end: new Date(2024, 6, 8, 16, 0),
  },
  // Add more dummy events as needed
];

const CalendarView = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-400   mx-auto ">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-500">Upcoming Courses</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height:400 , width :400  }}
        eventPropGetter={(event) => ({
          className: 'bg-blue-500 text-white rounded-lg p-2',
        })}
        components={{
          event: CustomEvent,
        }}
      />
    </div>
  );
};

const CustomEvent = ({ event }) => {
  return (
    <span className="text-sm">
      {event.title}
    </span>
  );
};

export default CalendarView;
