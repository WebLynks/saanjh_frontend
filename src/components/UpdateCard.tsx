import { Link } from "react-router";
import { formatDate } from "../utils/formatDate";

type UpdateCardProps = {
  date: string;
  content: string;
  bgColor: string;
  id: string;
};

function UpdateCard({ date, content, bgColor, id }: UpdateCardProps) {
  return (
    <>
      <div
        className={`bg-${bgColor} col-span-3 rounded-2xl bg-opacity-75 p-6 md:col-span-1`}
      >
        <div className="flex flex-col items-start justify-between gap-8 font-sans-black tracking-tighter text-gray-900 opacity-90">
          <div className="font-sans">{formatDate(date)}</div>
          <div className="text-lg 2xl:text-xl">{content}</div>
          <Link to={`blogs/${id}`}>
            <button className="rounded-lg bg-gray-50 p-2 font-sans shadow shadow-gray-500">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UpdateCard;
