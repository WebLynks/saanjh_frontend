import { useEffect, useState } from "react";
import UpdateCard from "../components/UpdateCard";
import { BASE_URL } from "../config/env";

type Blog = {
  id: number;
  slug: string;
  title: string;
  published_at: string;
};

function Updates() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const bgColors = ["mango", "sapphire", "iris"];

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/blogposts/`);
        const data = await res.json();

        const sorted = data
          .sort(
            (a: Blog, b: Blog) =>
              new Date(b.published_at).getTime() -
              new Date(a.published_at).getTime()
          )
          .slice(0, 3);

        setBlogs(sorted);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchLatestBlogs();
  }, []);

  const formatDate = (iso: string): string => {
    const date = new Date(iso);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "2-digit",
    });
  };

  return (
    <div data-aos="slide-up" className="px-[10dvw] py-16">
      <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
        The Latest From Saanjh
      </div>
      <div className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-3">
        {blogs.map((blog, index) => (
          <UpdateCard
            key={blog.slug}
            bgColor={bgColors[index % bgColors.length]}
            content={blog.title}
            date={formatDate(blog.published_at)}
            id={blog.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default Updates;
