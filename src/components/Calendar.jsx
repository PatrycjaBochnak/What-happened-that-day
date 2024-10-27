import * as React from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { PickersDay } from "@mui/x-date-pickers";
import { DateCalendar } from "@mui/x-date-pickers";
import { DayCalendarSkeleton } from "@mui/x-date-pickers";
import { getHistoricalEventsForMonth } from "../utils/wikiApi";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Calendar = ({
  setYearFromCalendar,
  setMonthFromCalendar,
  currentDate,
}) => {
  const initialValue = dayjs(currentDate);
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([]);
  const [eventsForDays, setEventsForDays] = React.useState({});
  const [selectedDayEvents, setSelectedDayEvents] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);

  function ServerDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
      !outsideCurrentMonth && highlightedDays.includes(day.date());

    const handleClick = () => {
      const dayEvents = eventsForDays[day.date()];
      if (dayEvents) {
        setSelectedDayEvents({
          day: day.date(),
          events: dayEvents,
        });
        setOpenModal(true);
        console.log(`Events for ${day.date()} day:`, dayEvents);
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
      const daysWithEvents = Object.keys(events).map((day) => parseInt(day));
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

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedDayEvents(null);
  };

  return (
    <div className="flex flex-col items-center justify-center">
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
          style={{
            color: "black"
          }}
          className="w-[90%] sm:w-[300px] lg:w-[500px] xl:w-[600px] h-auto"
        />
      </LocalizationProvider>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: 600,
            overflowY: "auto",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
          className="w-[90%] sm:w-[400px] md:w-[500px] lg:w-[600px] max-h-[80vh]"
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <CloseIcon />
          </IconButton>

          <h2 id="modal-title" className="text-xl sm:text-xl font-bold">
            Events for{" "}
            {selectedDayEvents
              ? dayjs().set("date", selectedDayEvents.day).format("D MMMM")
              : ""}
            :
          </h2>

          <ul id="modal-description" className="list-disc pl-6 mt-2 text-sm sm:text-base">
            {selectedDayEvents &&
              selectedDayEvents.events.map((event, index) => (
                <li key={index}>
                  <strong>{event.date}:</strong> {event.text}
                </li>
              ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
};

export default Calendar;
