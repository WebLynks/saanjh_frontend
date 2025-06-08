import useImage from "../hooks/useImage";
import { Link } from "react-router";

type ServiceCardProps = {
  name: string;
  imgName: string;
  bgColor: string;
  link: string;
};

function ServiceCard({ name, imgName, bgColor, link }: ServiceCardProps) {
  const { loading, image } = useImage(imgName);

  return (
    <div className="col-span-3 md:col-span-1">
      <Link to={link}>
        <div className={`rounded-lg shadow-sm shadow-${bgColor}`}>
          <div
            className={`relative rounded-t-lg bg-${bgColor} h-80 text-center opacity-75 sm:h-96 md:h-60 xl:h-80 2xl:h-96`}
          >
            <div className="h-full space-y-2 overflow-hidden py-4 font-sans-black text-2xl tracking-tighter text-white opacity-90 md:max-lg:text-xl 2xl:text-3xl">
              <div className="opacity-50">{name}</div>
              <div className="opacity-25">{name}</div>
              <div className="opacity-50">{name}</div>
              <div className="opacity-25">{name}</div>
              <div className="opacity-50">{name}</div>
              <div className="opacity-25">{name}</div>
              <div className="opacity-50">{name}</div>
              <div className="opacity-25">{name}</div>
              <div className="opacity-50">{name}</div>
              <div className="opacity-25">{name}</div>
            </div>
            <div className="absolute start-0 top-0 z-20 flex size-full items-center justify-center">
              {loading ? (
                `loading...`
              ) : (
                <img
                  className="aspect-square size-[90%] object-fill"
                  src={image}
                  alt={name}
                />
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-6 md:max-lg:flex-col md:max-lg:items-start">
            <div className={`h-10 w-20 rounded-t-full bg-${bgColor}`}></div>
            <div className="flex flex-col items-end justify-end font-sans-black text-2xl tracking-tighter text-gray-900 opacity-90 md:max-xl:text-xl md:max-lg:items-start 2xl:text-3xl">
              {name.split(" ").map((word) => (
                <div key={word} className="">
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ServiceCard;
