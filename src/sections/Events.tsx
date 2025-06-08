import { useEffect, useState } from "react";
import pearlBackgroundImgSrc from "../assets/images/pearl_background.png";
import EventCard from "../components/EventCard";

type EventData = {
  imgName: string;
  name: string;
  date: string;
  amount: string;
  numberOfSlots: string;
  timing: string;
  details?: string;
  isRegisterOption?: boolean;
};

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.toLocaleString("en-IN", { month: "long" });
  const year = date.getFullYear();

  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return `${day}${suffix} ${month}, ${year}`;
}


function Events({ heading = "Events" }) {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/events/completed/")
      .then((res) => res.json())
      .then((data) => {
        const processed = data.slice(0, 6).map((item: any) => ({
          imgName: item.imgName || "event1", // fallback if imgName missing
          name: item.title,
          date: formatDate(item.date),
          amount: item.amount || "₹300 - ₹500",
          numberOfSlots: item.numberOfSlots || "6",
          timing: item.timing || "4:00 pm - 6:00 pm",
        }));
        setEvents(processed);
      })
      .catch((err) => console.error("Failed to fetch past events", err));
  }, []);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${pearlBackgroundImgSrc})`,
      }}
    >
      <div className="px-[10dvw] py-16">
        <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
          {heading}
        </div>
        <div className="grid grid-cols-3 gap-8 pt-10">
          {events.map((event, index) => (
            <EventCard
              key={index}
              imgName={event.imgName}
              name={event.name}
              date={event.date}
              amount={event.amount}
              numberOfSlots={event.numberOfSlots}
              timing={event.timing}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
