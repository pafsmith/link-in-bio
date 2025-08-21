"use client";

import { authClient } from "../lib/auth-client";

export function LoginForm() {
  const handleLoginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    })
  }
  return (
    <div className="flex flex-col gap-4">
      <button
        className="w-full flex items-center gap-2"
        onClick={handleLoginWithGoogle}
      >
      Login with Google
    </button>
    </div>
  )
}