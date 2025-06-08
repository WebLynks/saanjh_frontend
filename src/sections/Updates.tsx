import UpdateCard from "../components/UpdateCard";
import { Blog, fetchBlogs } from "../services/blogService";

function Updates() {
  const blogs: Blog[] = fetchBlogs().slice(0, 3);
  const bgColors = ["mango", "sapphire", "iris"];

  return (
    <>
      <div data-aos="slide-up" className="px-[10dvw] py-16">
        <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
          The Latest From Saanjh
        </div>
        <div className="grid grid-cols-3 gap-4 pt-10">
          {blogs.map((blog, index) => (
            <UpdateCard
              key={blog.id}
              bgColor={bgColors[index]}
              content={blog.title}
              date={blog.date}
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Updates;
