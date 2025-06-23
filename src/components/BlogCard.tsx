import { Link } from "react-router";
import useImage from "../hooks/useImage";
import { formatDate } from "../utils/formatDate";

interface Blog {
  id: string;
  title: string;
  category: string;
  published_at?: string;
  summary: string;
  reading_time?: string;
  cover_image: string;
  slug: string;
}

function BlogCard({
  title,
  category,
  summary,
  reading_time,
  published_at,
  cover_image,
  slug,
}: Blog) {

  const { loading } = useImage(cover_image);

  return (
    <div className="col-span-3 p-8 hover:bg-pink-100 md:col-span-1">
      <div className="flex flex-col items-start justify-around gap-4">
        {loading ? (
          `Loading...`
        ) : (
          <img
            className="aspect-square w-full rounded-t-lg object-fill"
            src={`${cover_image}`}
            alt={title}
          />
        )}
        <div className="flex w-full flex-col items-start">
          <div className="font-sans-black text-lg tracking-tighter text-gray-900 opacity-90 2xl:text-xl">
            {category}
          </div>
          <div className="font-sans-regular text-lg 2xl:text-xl">
            {formatDate(published_at)}
          </div>
        </div>
        <div className="pt-4 font-sans-black text-2xl tracking-tighter text-gray-900 opacity-90 2xl:text-3xl">
          {title}
        </div>
        <div className="line-clamp-4 h-[6rem]">{summary}</div>
        <Link to={`/blogs/${slug}`}>
          <div className="mt-6 w-32 cursor-pointer rounded-full bg-mango bg-opacity-50 p-2 text-center font-medium shadow-md">
            Read More
          </div>
        </Link>
        <div className="pt-2 font-sans-regular text-lg 2xl:text-xl">
          {`${reading_time || "1 min"} read`}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
