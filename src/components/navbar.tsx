
"use client"
import React, { Suspense } from 'react';
import { createAuthClient } from "better-auth/react"

const { useSession } = createAuthClient()
export const Navbar = () => { 
  const {
    data: session,
    isPending, 
    error,  
    refetch 
  } = useSession()

  const user = session?.user
  console.log(user?.email)
  return (

    <nav className="w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between border rounded-xl mt-10 px-6 py-3 shadow-lg">
        <div className="flex items-center">
          <h1>Logo Placeholder</h1>
        </div>

        {!isPending && user && (
          <div className="flex items-center gap-3">
            <p>{user.email}</p>
            <div className="relative">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://static.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png"
                alt="User Avatar"
              />
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-slate-800"></span>
            </div>
          </div>
        )}

        {!isPending && !user && (
          <a
            href="/login"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Sign In
          </a>
        )}

      </div>
    </nav>
  );
};
