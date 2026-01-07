// app/sign-up/[[...sign-up]]/page.tsx
'use client'

import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-black pt-20">
      <div className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Join KIKO</h1>
          <p className="text-gray-400">Create your account to secure your Founder Edition</p>
        </div>
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: "bg-cyan-500 hover:bg-cyan-600 text-white",
              card: "bg-gray-900 border border-gray-800 shadow-xl",
              footerActionLink: "text-cyan-400 hover:text-cyan-300",
            }
          }}
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          redirectUrl="/product"
        />
      </div>
    </div>
  )
}