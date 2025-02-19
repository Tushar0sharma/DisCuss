import {React} from 'react';
import { Link } from 'react-router-dom';
import Maincategory from '../components/Maincategory';
import Postlist from './Postlist';
import Meteors from '../components/Magicui/Meteors';
import { Particles } from '../components/Magicui/Particles';
import { useState } from 'react';


const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Called when a category is clicked in Maincategory.
  const handleCategorySelect = (categorySlug) => {
    setSelectedCategory(categorySlug);
  };
  return (
    <div className="relative overflow-hidden  mt-24  flex flex-col gap-4 min-h-screen bg-black text-white">
      {/* Particles that cover the whole homepage */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        quantity={200}
        ease={80}
        refresh
      />

      {/* Breadcrumbs and Meteors */}
      <Meteors number={10} />
      <div className="flex gap-4 z-10 relative text-gray-300">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs And Articles</span>
      </div>

      {/* Introduction */}
      <div className="flex items-center gap-4 justify-between z-10 relative">
        {/* Title */}
        <div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            Welcome to DisCuss,
          </h1>
          <p className="mt-3 text-md md:text-xl text-gray-300">
            Your gateway to thought-provoking articles and expert insights.
            Explore trending topics, share your perspective, and connect with a
            community of curious minds.
          </p>
        </div>
        {/* Animated Button */}
        <Link to="add-blog" className="hidden md:block relative">
  <svg
    viewBox="0 0 200 200"
    width={150}
    height={150}
    className="text-lg tracking-widest animate-spin animatedbutton text-blue-800"
  >
    <path
      id="circlePath"
      fill="none"
      d="M 100,100 m -75,0 a 75,75,0 1,1 150,0 a 75,75,0 1,1 -150,0"
    />
    <text>
      <textPath
        className="text-white"
        href="#circlePath"
        startOffset="0%"
        style={{ fill: 'white' }} // Ensure the text is white
      >
        Write Your Story•
      </textPath>
      <textPath
        className="text-white"
        href="#circlePath"
        startOffset="50%"
        style={{ fill: 'white' }} // Ensure the text is white
      >
        Share Your Idea•
      </textPath>
    </text>
  </svg>
  <button className="bg-blue-800 text-white rounded-full flex items-center justify-center absolute top-8 w-20 h-20 right-0 left-9 bottom-0 shadow-lg transition-all hover:bg-blue-700">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={40}
      height={50}
      fill="none"
      stroke="white"
      strokeWidth="2"
    >
      <line x1={6} y1={18} x2={18} y2={6} />
      <polyline points="9 6 18 6 18 15" />
    </svg>
  </button>
</Link>

      </div>

      {/* Categories & Post List */}
      <Maincategory 
        onCategorySelect={handleCategorySelect} 
        selectedCategory={selectedCategory} 
      />
      <Postlist category={selectedCategory} />
    </div>
  );
};

export default Homepage;
