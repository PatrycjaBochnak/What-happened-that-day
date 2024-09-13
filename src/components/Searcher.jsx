import { list } from "postcss";
import React, { useState, useEffect } from "react";
import fetchHistoricalEvent from "../utils/wikiApi";
import Calendar from "./Calendar";

function Searcher() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const [yearFromCalendar, setYearFromCalendar] = useState(currentYear);
  const [monthFromCalendar, setMonthFromCalendar] = useState(currentMonth);
  const [historicalEvents, setHistoricalEvents] = useState([]);
  const [highlightedDays, setHighlightedDays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getHistoricalEvents() {
      setIsLoading(true);
      try {
        const wikiData = await fetchHistoricalEvent(yearFromCalendar);
        if (wikiData) {
          setHistoricalEvents(wikiData);
          console.log("wikiData", wikiData);
          const daysWithEvents = extractDaysFromEvents(
            wikiData,
            monthFromCalendar
          );
          setHighlightedDays(daysWithEvents);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getHistoricalEvents();
  }, [yearFromCalendar, monthFromCalendar]);

  function stripHTML(htmlString) {
    const eventsPerDay = {
      months: [
        {
          nameOfMonth: undefined,
          days: [
            {
              numberOfDay: undefined,
              events: [],
            },
          ],
        },
      ],
    };
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    // Select all li elements
    const listItems = doc.querySelectorAll("li");
    console.log(listItems);
    function getTopLevelListItems(doc) {
      // Pobierz wszystkie elementy <ul> w dokumencie
      const allUls = doc.querySelectorAll('ul');
      // Zbierz wszystkie najwyższe poziomy <li>
      const topLevelItems = [];
  
      allUls.forEach(ul => {
          // Pobierz wszystkie <li> bezpośrednio w tym <ul>
          const topLevelLis = ul.querySelectorAll(':scope > li');
          topLevelItems.push(...topLevelLis);
      });
  
      return topLevelItems;
  }
   console.log(getTopLevelListItems(doc))
    // Extract and log text content from each li
    getTopLevelListItems(doc).forEach((li) => {
      const currentNameOfMonth = li.textContent.split(" ")[0];
      if (
        !eventsPerDay.months.some(
          (month) => month.nameOfMonth === currentNameOfMonth
        )
      ) {
        eventsPerDay.months.push({ nameOfMonth: currentNameOfMonth });
      }

      if (doc.querySelectorAll("ul")) {
      } else {
      }
      console.log(getTopLevelListItems(doc))
      // arrTemp.push(li.textContent.replace(/<[^>]*>/g, ''));
    });
  }


  // Funkcja do przetwarzania HTML i wyodrębniania wydarzeń
  function extractEventsFromHTML(htmlString) {
    const arrLi = [];
    const monthNames = [
      "January",
      // "February",
      // "March",
      // "April",
      // "May",
      // "June",
      // "July",
      // "August",
      // "September",
      // "October",
      // "November",
      // "December",
    ];

    // Wyrażenie regularne do wyszukiwania wszystkich <li> elementów

    const monthEvents = [];

    const match = stripHTML(htmlString);
    console.log(match);
    // while ((match = stripHTML(htmlString)) !== null) {
    //   const itemText = match[1]; // Tekst wewnątrz <li>
    //   console.log(match);
    //   console.log(itemText);
    //   // Sprawdź, czy tekst zawiera któryś z miesięcy
    //   for (const month of monthNames) {
    //     // Sprawdź miesiąc i dni w tekście
    //     const monthRegex = new RegExp(`^(\\d{1,2}) ${month}`, "i");
    //     const monthMatch = monthRegex.exec(itemText);
    //     console.log(monthRegex);
    //     console.log(monthMatch);
    //     if (monthMatch) {
    //       const day = parseInt(monthMatch[1], 10);
    //       let description = itemText.replace(monthRegex, "").trim();
    //       console.log(description);

    //       // Sprawdź, czy są zagnieżdżone <ul> w <li>
    //       const ulRegex = /<ul>(.*?)<\/ul>/gis;
    //       const nestedListMatches = [...description.matchAll(ulRegex)];

    //       if (nestedListMatches.length > 0) {
    //         // Jeśli są zagnieżdżone listy, przetwórz każdą z nich
    //         nestedListMatches.forEach((nestedListMatch) => {
    //           const nestedItems = nestedListMatch[1].split(/<\/li>\s*<li>/gi);
    //           nestedItems.forEach((nestedItem) => {
    //             const cleanText = nestedItem.replace(/<[^>]+>/g, "").trim();
    //             console.log(cleanText);
    //             if (cleanText) {
    //               monthEvents.push({
    //                 day,
    //                 month,
    //                 description: cleanText,
    //               });
    //             }
    //           });
    //         });
    //       } else {
    //         // Jeśli brak zagnieżdżonych list, dodaj pojedyncze wydarzenie
    //         if (description) {
    //           monthEvents.push({
    //             day,
    //             month,
    //             description,
    //           });
    //         }
    //       }
    //     }
    //   }
    // }

    return monthEvents;
  }

  const extractDaysFromEvents = (events, month) => {
    // const days = events
    //   .map((event) => {
    //     console.log("Przetwarzane wydarzenie:", event);

    //     // Dopasowanie dnia i nazwy miesiąca z możliwymi spacjami
    //     const eventDate = event.match(/(\d{1,2})\s+(\w+)/);

    //     console.log("Dopasowanie eventDate:", eventDate);

    //     if (
    //       eventDate &&
    //       eventDate[2].toLowerCase() === getMonthName(month).toLowerCase() // Sprawdzenie, czy miesiąc się zgadza
    //     ) {
    //       return {
    //         day: parseInt(eventDate[1], 10), // Dzień jako liczba
    //         month: eventDate[2], // Nazwa miesiąca
    //         content: event, // Pełna treść wydarzenia
    //       };
    //     }
    //     return null;
    //   })
    //   .filter(Boolean); // Usunięcie wartości null

    // console.log("Przetworzone wydarzenia:", days);
    // return days;

    const cleanEvents = extractEventsFromHTML(events);

    console.log(cleanEvents);
    return cleanEvents;
  };

  const getMonthName = (monthNumber) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[monthNumber - 1];
  };

  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-md">
      {isLoading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div>
          <Calendar
            setYearFromCalendar={setYearFromCalendar}
            setMonthFromCalendar={setMonthFromCalendar}
            currentDate={currentDate}
            highlightedDays={highlightedDays}
          />
        </div>
      )}
    </div>
  );
}

export default Searcher;
