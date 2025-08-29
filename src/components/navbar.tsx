"use client"
import React from 'react';
export const Navbar = () => {
  return (
    <nav className="w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between border rounded-xl mt-10 px-6 py-3 shadow-lg">
        <div className="flex items-center">
        <h1>Logo Placeholder</h1>
        </div>


        <div className="relative">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://static.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png"
            alt="User Avatar"
          />
          <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-slate-800"></span>
        </div>
      </div>
    </nav>
  );
};
