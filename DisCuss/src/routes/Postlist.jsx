// Postlist.jsx
import React, { useState, useEffect } from "react";
import Postlistitem from "../components/Postlistitem";
import { Particles } from "../components/Magicui/Particles";
import Loading from "../components/Loading";

const Postlist = ({ category }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs whenever the selected category changes.
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        let url;
        if (category) {
          // Fetch blogs for the selected category
          url = `${import.meta.env.VITE_API_BASE_URL}/blog/get-blog-by-category/${category}`;
        } else {
          // Fetch all blogs
          url = `${import.meta.env.VITE_API_BASE_URL}/blog/get-all`;
        }
        const response = await fetch(url, { method: "GET", credentials: "include" });
        const data = await response.json();

        if (data.success) {
          // Adjust according to your API response shape.
          setBlogs(data.blogs || data.blog);
        } else {
          setError("Failed to load blogs");
        }
      } catch (err) {
        setError("Error while fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [category]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        quantity={100}
        ease={80}
        refresh
      />
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="mb-4 break-inside-avoid">
            <Postlistitem post={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Postlist;
