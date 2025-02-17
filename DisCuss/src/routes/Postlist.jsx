import React, { useEffect, useState } from "react";
import Postlistitem from "../components/Postlistitem"; // Each item’s card
import { Particles } from "../components/Magicui/Particles";

const Postlist = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs on mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/blog/get-all`,
          { method: "GET", credentials: "include" }
        );
        const data = await response.json();

        if (data.success) {
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
  }, []);

  // Show loading or error
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  // Return something for each blog
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 
        columns-1  -> 1 column on very small screens
        sm:columns-2 -> 2 columns at ≥640px
        md:columns-3 -> 3 columns at ≥768px
        lg:columns-4 -> 4 columns at ≥1024px
        gap-4      -> space between columns
      */}
       <Particles
              className="absolute top-0 left-0 w-full h-full z-0"
              quantity={100}
              ease={80}
              refresh
            />
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4">
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
