'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") return <p>Loading...</p>

  if (session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome, {session.user?.name}!</h1>
          <p className="mb-4">Signed in as {session.user?.email}</p>
          <button 
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign out
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">X API MVPs</h1>
        <p className="mb-4">Sign in with your X account to get started</p>
        <button 
          onClick={() => signIn("twitter")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign in with X
        </button>
      </div>
    </div>
  )
}