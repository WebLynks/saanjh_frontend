import useImage from "../hooks/useImage";

type EventCardProps = {
  name?: string;
  imgName?: string;
  date?: string;
  amount?: string;
  numberOfSlots?: string;
  timing?: string;
};

function EventCard({
  name = "Loneliness",
  imgName = "poster_25_aug",
  date = "25th August, 2024",
  amount = "₹400",
  numberOfSlots = "6",
  timing = "4 - 6 pm",
}: EventCardProps) {
  const { loading, image } = useImage(imgName);

  return (
    <div className="col-span-3 md:col-span-1">
      <div className={`shadow-xl`}>
        <div className="">
          {loading ? `loading...` : <img className="" src={image} alt={name} />}
        </div>
        <div className="flex flex-col gap-8 bg-white p-4 opacity-80">
          <div className="flex flex-wrap justify-between">
            <div className="font-sans-black tracking-tighter text-gray-900 opacity-90">
              <div className="">{name}</div>
              <div className="text-xs">{date}</div>
            </div>
            <div className="font-sans-black tracking-tighter text-gray-900 opacity-90">
              {amount}
            </div>
          </div>
          <div className="flex justify-between font-sans-black text-xs tracking-tighter text-gray-900 opacity-90">
            <div className="">{`Slots: ${numberOfSlots} Seats`}</div>
            <div className="">{`Time: ${timing}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
