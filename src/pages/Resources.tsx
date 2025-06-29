import { ClipboardIcon } from "@heroicons/react/24/outline";
import heroBg from "../assets/images/hero-bg-watercolor.png";

const helplines = [
  {
    name: "iCall (by TISS)",
    number: "+91 9152987821",
    hours: "Monday – Saturday, 10 am – 8 pm",
  },
  {
    name: "Samaritans Mumbai",
    number: "+91 8422984528",
    hours: "All days, 4 pm – 9 pm",
  },
  {
    name: "Parivarthan",
    number: "+91 7676602602",
    hours: "Monday – Friday, 1 pm – 10 pm",
  },
  {
    name: "Vandrela Foundation",
    number: "+91 9999666555",
    hours: "24/7",
  },
  {
    name: "Mann Talks",
    number: "+91 8686139139",
    hours: "All days, 9 am – 6 pm",
  },
  {
    name: "Sangath",
    number: "011-41198666",
    hours: "All days, 10 am – 6 pm",
  },
  {
    name: "Sumunum",
    number: "1800123786868",
    hours: "All days, 11 am – 11 pm",
  },
  {
    name: "Aasra",
    number: "+91 9820466726",
    hours: "24/7",
  },
];

const queerSpaces = [
  {
    label: "LGBTQ India Resource",
    url: "https://lgbtqindiaresource.in/",
  },
  {
    label: "The Trevor Project",
    url: "https://www.thetrevorproject.org/",
  },
];

export default function Resources() {
  return (
    <div className="px-[10dvw] pt-16 pb-24 text-gray-900">
      {/* Page Title */}
      <h1
        data-aos="fade-up"
        className="font-sans-black text-5xl md:text-6xl mb-12"
      >
      </h1>

      {/* Helplines Section */}
      <h2
        data-aos="fade-up"
        className="font-sans-black text-3xl text-sunset mb-6"
      >
        Helplines
      </h2>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {helplines.map((h, i) => (
          <div
            key={i}
            className="relative bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-sans-black text-lg mb-2">{h.name}</h3>
            <div className="flex items-center justify-between">
              <span className="font-sans-black text-2xl">{h.number}</span>
              <button
                onClick={() => navigator.clipboard.writeText(h.number)}
                className="p-1 rounded hover:bg-gray-100 transition-colors"
                aria-label="Copy phone number"
              >
                <ClipboardIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <p className="mt-2 text-gray-600">{h.hours}</p>
          </div>
        ))}
      </div>

      {/* Queer Friendly Spaces */}
      <h2
        data-aos="fade-up"
        className="font-sans-black text-3xl text-mango mb-6"
      >
        Queer Friendly Spaces
      </h2>
      <ul data-aos="fade-up" className="list-disc list-inside space-y-3">
        {queerSpaces.map((s, i) => (
          <li key={i}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener"
              className="font-sans text-lg text-sapphire hover:underline transition-colors"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
