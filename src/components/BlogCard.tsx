import { Link } from "react-router";
import useImage from "../hooks/useImage";
import { Blog } from "../services/blogService";
import { formatDate } from "../utils/formatDate";

function BlogCard({
  id,
  title,
  category,
  date,
  summary,
  readingTime,
  imageName = "",
}: Blog) {
  const { loading, image } = useImage(imageName);

  return (
    <div className="col-span-3 p-8 hover:bg-pink-100 md:col-span-1">
      <div className="flex flex-col items-start justify-around gap-4">
        {loading ? (
          `loading...`
        ) : (
          <img
            className="aspect-square w-full rounded-t-lg object-fill"
            src={image}
            alt={title}
          />
        )}
        <div className="sm:max-md:h-18 flex w-full flex-col flex-wrap items-start justify-between md:max-lg:h-14">
          <div className="font-sans-black text-lg tracking-tighter text-gray-900 opacity-90 2xl:text-xl">
            {category}
          </div>
          <div className="font-sans-regular text-lg 2xl:text-xl">
            {formatDate(date)}
          </div>
        </div>
        <div className="lg:h-18 pt-4 font-sans-black text-2xl tracking-tighter text-gray-900 opacity-90 sm:max-md:h-20 md:max-lg:h-28 2xl:text-3xl">
          {title}
        </div>
        <div className="xl:[7rem] line-clamp-4 h-[6rem]">{summary}</div>
        <Link to={id}>
          <div className="mt-6 w-32 cursor-pointer rounded-full bg-mango bg-opacity-50 p-2 text-center font-medium shadow-md">
            Read More
          </div>
        </Link>
        <div className="pt-2 font-sans-regular text-lg 2xl:text-xl">{`${readingTime} read`}</div>
      </div>
    </div>
  );
}

export default BlogCard;
