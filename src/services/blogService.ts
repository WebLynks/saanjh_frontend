// src/services/blogService.ts
import blogsJSON from "../assets/data/blogs.json";

export type Blog = {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  readingTime: string;
  body: string;
  pinned: boolean;
  imageName: string;
};
export const fetchBlogs = (): Blog[] => {
  return blogsJSON.blogs;
};
