import * as React from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { getHistoricalEventsForMonth } from "../utils/wikiApi"; 

const Calendar = ({ setYearFromCalendar, setMonthFromCalendar, currentDate }) => {
  const initialValue = dayjs(currentDate);
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([]);
  const [eventsForDays, setEventsForDays] = React.useState({});

  function ServerDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
      !outsideCurrentMonth && highlightedDays.includes(day.date());

    const handleClick = () => {
      const dayEvents = eventsForDays[day.date()];
      if (dayEvents) {
        console.log(`Events for ${day.date()} day :`, dayEvents);
      }
    };

    return (
      <Badge
        key={day.toString()}
        overlap="circular"
        badgeContent={isSelected ? "⭐️" : undefined}
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
          onClick={handleClick}
        />
      </Badge>
    );
  }

  const fetchHighlightedDays = async (date) => {
    setIsLoading(true);
    const month = date.month() + 1;
    try {
      const events = await getHistoricalEventsForMonth(month);
      const daysWithEvents = Object.keys(events).map(day => parseInt(day));
      setHighlightedDays(daysWithEvents);
      setEventsForDays(events);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    const rightMonth = date.month() + 1; 
    setMonthFromCalendar(rightMonth);

    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    fetchHighlightedDays(date);
  };

  const handleYearChange = (date) => {
    setYearFromCalendar(date.year());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        onYearChange={handleYearChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
