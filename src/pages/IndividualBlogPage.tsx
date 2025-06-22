import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../config/env";
import "../styles/blog.css"; // Adjust path based on your folder structure

// you can also import this from your utils if you prefer
const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

interface BlogPost {
  title: string;
  cover_image: string;
  body: string;
  published_at: string;
  category: string;
  reading_time: string;
  author: string;
}

export default function IndividualBlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/api/blogposts/${slug}/`)
      .then((res) => res.json())
      .then((data: BlogPost) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blog:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="pt-24 text-center">Loading…</div>;
  if (!blog) return <div className="pt-24 text-center">Blog not found.</div>;

  const date = formatDate(blog.published_at);

  return (
    <div className="pt-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        {/* Hero image */}
        <img
          src={blog.cover_image}
          alt={blog.title}
          className="mb-8 h-[500px] w-full rounded-lg object-cover shadow-md"
        />

        {/* Title */}
        <h1 className="mb-4 font-sans-black text-4xl text-gray-900">
          {blog.title}
        </h1>

        {/* Meta line */}
        <div className="mb-0 flex flex-wrap items-center justify-between text-gray-500">
          <div className="text-md">
            {date} · {blog.reading_time} · {blog.author}
          </div>
          <span className="rounded-full bg-mango bg-opacity-10 px-3 py-1 font-sans-black text-md text-mango">
            {blog.category}
          </span>
        </div>

        {/* Body */}
        <div className="prose prose-lg blog-content max-w-none text-gray-800">
          <div dangerouslySetInnerHTML={{ __html: blog.body }} />
        </div>
      </div>
    </div>
  );
}
