import React from 'react';
import './index.css'; // Ensure this is the correct path
import TweetButton from './TweetButton';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-600">
        <div className='absolute top-3 left-3 flex space-x-1 items-center z-[50]'>
          <a href="https://t.me/ronaldmcsol" className='transition ease-in-out duration-150'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-10 h-10 md:w-12 md:h-12 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="#FFC300" viewBox="0 0 50 50">
              <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
            </svg>
          </a>
        </div>
      <img src="ronald.png" className='absolute -left-[10%] md:left-[2%] bottom-[0%]'></img>
      <div className="bg-transparent p-8 max-w-md w-full z-10 -mt-[7%]">
        <div className="text-center mb-6">
          <img src="/mc.png" className="h-[90px] mx-auto mb-4" alt="logo" />
          <h1 className="text-3xl font-bold mb-2">McJob Application</h1>
          <p className="font-semibold">Join the McSquad!</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-left font-bold">McName</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" placeholder="McLovin" />
          </div>
          <div>
            <label className="block text-left font-bold">Go-to McOrder</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" placeholder="McGangBang, Suicide Burger, etc." />
          </div>
          <div>
            <label className="block text-left font-bold">Why should we McHire you?</label>
            <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" rows="3" placeholder="Spill the tea on your McSkills..."></textarea>
          </div>
          <div>
            <label className="block text-left font-bold">Weekend availability?</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
              <option>Weekends? You mean McWeekends, I'm lovin' it!</option>
              <option>Only if I can TikTok my shifts.</option>
              <option>Nah fam, I'm booked for brunch and recovering.</option>
            </select>
          </div>
          <div className="text-center">
            <TweetButton tweetText={"Just applied to be a McInfluencer, watch me flip this career like a burger 🍔💼"} solAddress={"$ronald"} />
          </div>
        </form>
      </div>
      <div className='absolute bottom-3 text-slate-300 font-[500'>CA: updating...</div>
    </div>
  );
}

export default App;