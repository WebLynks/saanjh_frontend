import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

type EventType = {
  id: number;
  name: string;
  imgUrl: string;
  date: string;
  amount: string;
  numberOfSlots: string;
  timing: string;
  details: string;
  isRegisterOption: boolean;
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

function EventCardLandscape({
  name,
  imgUrl,
  date,
  amount,
  numberOfSlots,
  timing,
  details,
  isRegisterOption,
}: EventType) {
  return (
    <div className="flex flex-col gap-8 py-8 md:h-96 md:flex-row lg:gap-12 xl:gap-16">
      <div className={`w-full md:w-5/12 lg:w-4/12`}>
        <div className={`md:h-4/5 xl:h-full`}>
          <img className="h-full w-full object-fill" src={`http://localhost:8000${imgUrl}`} alt={name} />
        </div>
      </div>
      <div className="flex w-full flex-col space-y-8 md:col-span-8 md:w-7/12 lg:w-8/12">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="font-sans-black tracking-tighter text-gray-900 opacity-90">
            <div className="text-3xl lg:text-4xl 2xl:text-5xl">{name}</div>
            {numberOfSlots && (
              <div className="text-lg 2xl:text-xl">{`Slots: ${numberOfSlots} Seats`}</div>
            )}
          </div>
          <div className="font-sans-black text-xl tracking-tighter text-gray-900 opacity-90 lg:text-2xl 2xl:text-3xl">
            {amount}
          </div>
        </div>
        <div className="flex break-words">{details}</div>
        <div className="flex flex-wrap items-center justify-between font-sans-black text-lg tracking-tighter text-gray-900 opacity-90 2xl:text-xl">
          <div>{`Time: ${timing}`}</div>
          <div>{date}</div>
        </div>
        {isRegisterOption && (
          <div className="flex items-center justify-end">
            <a href="" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="rounded-xl bg-mango px-8 py-2 lg:text-lg 2xl:text-xl"
              >
                Register
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function EventsList() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/events/upcoming/`)
      .then((res) => res.json())
      .then((data) => {
        const formattedEvents = data.map((event: any) => ({
          id: event.id,
          name: event.title,
          imgUrl: event.image, // direct image URL
          date: formatDate(event.date),
          amount: event.amount || "",
          numberOfSlots: event.number_of_slots || "",
          timing: event.timing || "",
          details: event.description,
          isRegisterOption: event.is_register_option,
        }));
        setEvents(formattedEvents);
      });
  }, []);

  return (
    <div className="flex flex-col">
      {events.map((event) => (
        <EventCardLandscape key={event.id} {...event} />
      ))}
    </div>
  );
}
