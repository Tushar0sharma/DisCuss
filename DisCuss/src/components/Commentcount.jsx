import React, { useState, useEffect } from "react";
import { FaRegComment } from "react-icons/fa";
const Commentcount = ({ blogid }) => {
  const [countData, setCountData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/comment/count/${blogid}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await response.json();
        setCountData(data);
      } catch (error) {
        setError("Error while fetching comment count");
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, [blogid]);

  if (loading) return <div>Loading count...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <button className="flex items-center gap-1">
      <FaRegComment size={24} />
      {countData && countData.cnt}
    </button>
  );
};

export default Commentcount;
