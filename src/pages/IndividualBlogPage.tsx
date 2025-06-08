import { useParams } from "react-router";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import useImage from "../hooks/useImage";
import { Blog, fetchBlogs } from "../services/blogService";

function IndividualBlogPage() {
  const { blogId } = useParams();
  const blogs = fetchBlogs();
  const openedBlog: Blog | undefined = blogs.find(
    (blog: Blog) => blog.id === blogId,
  );
  const { loading, image } = useImage(openedBlog?.imageName || "");
  return (
    <>
      <div className="relative flex items-center justify-center">
        {loading ? (
          `loading...`
        ) : (
          <img
            src={image}
            alt={openedBlog?.imageName}
            className="h-[100dvh] w-full object-cover"
          />
        )}
        <div className="absolute top-20 flex flex-col items-center justify-center px-[10dvw] py-16 text-center text-white">
          <div className="tracking- font-sans-black text-5xl">
            {openedBlog?.title}
          </div>
          <div className="pt-8 font-medium">{openedBlog?.summary}</div>
        </div>
        <ArrowDownCircleIcon className="absolute bottom-8 size-20 animate-bounce text-white" />
      </div>
      <div
        className="px-[10dvw] py-16"
        dangerouslySetInnerHTML={{ __html: openedBlog?.body || "" }}
      ></div>
    </>
  );
}

export default IndividualBlogPage;
