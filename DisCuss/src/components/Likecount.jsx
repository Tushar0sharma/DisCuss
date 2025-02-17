import React, { useState, useEffect } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { useSelector } from "react-redux";
import { showToast } from "../helper/showToast";

const Likecount = ({ blogid }) => {
  const user = useSelector((state) => state.user); 
  const [countData, setCountData] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch like count & check if the logged-in user has liked the post
  useEffect(() => {
    const fetchLikeData = async () => {
      try {
        setLoading(true);
        const userId = user && user.isLoggedin ? user.user._id : "";
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/like/get-like/${blogid}/${userId}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await response.json();
        
        setCountData(data?.likecount ?? 0);
        // Use the isuserlike flag from the server
        setLiked(data?.isuserlike || false);
      } catch (error) {
        setError("Error while fetching like data");
      } finally {
        setLoading(false);
      }
    };

    fetchLikeData();
  }, [blogid, user]);

  // Handle like/unlike action
  const handleClick = async () => {
    if (!user.isLoggedin) {
      return showToast("error", "Please log in to like posts");
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/like/do-like`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ author: user.user._id, blogid }),
        }
      );

      if (!response.ok) {
        showToast("error", "Failed to update like");
        return;
      }

      const resData = await response.json();
      setCountData(resData.likecount);
      // Use the returned isuserlike flag to update the state
      setLiked(resData.isuserlike);
    } catch (error) {
      console.error("Error toggling like:", error);
      showToast("error", "Something went wrong!");
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <button
      onClick={handleClick}
      type="button"
      className="flex text-white items-center gap-1"
    >
      {liked ? <FcLike size={29} /> : <FcLikePlaceholder size={29} />}
      {loading ? 0 : countData}
    </button>
  );
};

export default Likecount;
