import UpdateCard from "../components/UpdateCard";
import { useEffect, useState } from "react";
import { Blog } from "../services/blogService";
import { BASE_URL } from "../config/env";

function Updates() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const bgColors = ["mango", "sapphire", "iris"];

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/blogs/`);
        const data: Blog[] = await res.json();

        const sorted = data
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .slice(0, 3);

        setBlogs(sorted);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchLatestBlogs();
  }, []);

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
