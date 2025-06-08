import { formatDate } from "../utils/formatDate";
import { Blog, fetchBlogs } from "../services/blogService";
import useImage from "../hooks/useImage";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router";

function BlogPage() {
  const blogs = fetchBlogs();
  const pinnedBlog: Blog =
    blogs.find((blog: Blog) => blog.pinned === true) || blogs[0];
  const { loading, image } = useImage(pinnedBlog.imageName);

  return (
    <div>
      <div className="flex flex-col gap-0 md:flex-row">
        <div className="w-full bg-pink-100 md:w-1/2">
          {loading ? (
            `loading...`
          ) : (
            <img
              className="h-[50dvh] w-full object-cover sm:h-[90dvh] md:h-[85dvh] lg:h-[88dvh] xl:h-[92dvh] 2xl:h-[95dvh]"
              src={image}
              alt={pinnedBlog?.title}
            />
          )}
        </div>
        <div className="w-full bg-pink-100 md:w-1/2">
          <div className="flex flex-col p-[10dvw] sm:p-[5dvw]">
            <h3 className="font-sans-black text-lg tracking-tighter text-gray-900 opacity-90 2xl:text-xl">
              {pinnedBlog.category}
            </h3>
            <p className="pt-1 font-sans-regular text-lg 2xl:text-xl">
              {formatDate(pinnedBlog.date)}
            </p>
            <h1 className="pt-6 font-sans-black text-2xl tracking-tighter text-gray-900 opacity-90 2xl:text-3xl">
              {pinnedBlog.title}
            </h1>
            <h4 className="pt-4">{pinnedBlog.summary}</h4>
            <p
              className="line-clamp-6 pt-3 sm:line-clamp-2 md:line-clamp-3 lg:line-clamp-4 xl:line-clamp-5"
              dangerouslySetInnerHTML={{ __html: pinnedBlog.body }}
            ></p>
            <Link to={pinnedBlog.id}>
              <div className="mt-6 w-32 cursor-pointer rounded-full bg-mango bg-opacity-50 p-2 text-center font-medium shadow-md">
                Read More
              </div>
            </Link>
            <p className="pt-12 font-sans-regular text-lg 2xl:text-xl">{`${pinnedBlog.readingTime} read`}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-items-center divide-x-2 divide-y-2">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
