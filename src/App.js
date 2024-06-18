import React from 'react';
import './index.css'; // Ensure this is the correct path
import TweetButton from './TweetButton';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg2.png')" }}>
      <div className="bg-transparent p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <img src="/mc.png" className="h-[90px] mx-auto mb-4" alt="logo" />
          <h1 className="text-3xl font-bold mb-2">Job Application</h1>
          <p className="font-semibold">Join the Fry Squad!</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-left font-bold">Name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" placeholder="Ronald McDonald" />
          </div>
          <div>
            <label className="block text-left font-bold">Favorite McDonald's Meal</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" placeholder="Big Mac, McNuggets, etc." />
          </div>
          <div>
            <label className="block text-left font-bold">Why do you want to join the Fry Squad?</label>
            <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" rows="3" placeholder="Tell us why you love fries..."></textarea>
          </div>
          <div>
            <label className="block text-left font-bold">Can you work weekends?</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
              <option>Absolutely, I'm all about that weekend grind!</option>
              <option>Only if I get free fries.</option>
              <option>Weekends are for napping, sorry!</option>
            </select>
          </div>
          <div className="text-center">
            <TweetButton tweetText={"solana f***in rekt me"} solAddress={"$MCDOG"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;