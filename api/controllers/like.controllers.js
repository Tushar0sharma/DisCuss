import Like from "../models/bloglike.model.js";

export const dolike = async (req, res) => {
  try {
    const { author, blogid } = req.body;
    let like = await Like.findOne({ author, blogid });
    let isuserlike;
    if (!like) {
      const savelike = new Like({ author, blogid });
      like = await savelike.save();
      isuserlike=true
    } else {
      await Like.findByIdAndDelete(like._id);
      isuserlike=false
    }
    const likecount = await Like.countDocuments({ blogid });
    res.status(200).json({isuserlike, likecount });
  } catch (error) {
    console.error("Error toggling like:", error);
    return res.status(500).json({
      success: false,
      message: "Some error occurred while liking",
      error: error.message,
    });
  }
};

// Get like count for a specific blog.
export const likecount = async (req, res) => {
  const { blogid,userid } = req.params;
  try {
    const likecount = await Like.countDocuments({ blogid });
    let isuserlike=false
    if(userid){
        const getuserlike=await Like.countDocuments({blogid,author:userid})
        if(getuserlike>0) isuserlike=true
    }
    res.status(200).json({ likecount,isuserlike });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Some error occurred while fetching like count",
      error: error.message,
    });
  }
};
