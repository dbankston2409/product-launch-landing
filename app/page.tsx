'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to your backend
    console.log('Email submitted:', email)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Logo/Badge */}
        <div className="mb-8 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <p className="text-sm font-medium text-white/90">🚀 Coming Soon</p>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-center mb-6 max-w-4xl">
          The Future of
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Innovation </span>
          is Here
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/80 text-center mb-12 max-w-2xl">
          Revolutionary technology that transforms the way you work. Be the first to experience it.
        </p>

        {/* Email Capture Form */}
        <div className="w-full max-w-md mb-12">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {submitted ? '✓ Joined!' : 'Join Waitlist'}
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-center text-green-300 text-sm">
              Thanks! We'll notify you at launch.
            </p>
          )}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
            <p className="text-white/60 text-sm">Optimized for speed and performance</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-white font-semibold mb-2">Secure by Default</h3>
            <p className="text-white/60 text-sm">Enterprise-grade security built-in</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-white font-semibold mb-2">Easy to Use</h3>
            <p className="text-white/60 text-sm">Intuitive interface anyone can master</p>
          </div>
        </div>

        {/* Launch Timeline */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm mb-2">Launching in</p>
          <div className="flex gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <div className="text-3xl font-bold text-white">30</div>
              <div className="text-xs text-white/60">Days</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <div className="text-3xl font-bold text-white">00</div>
              <div className="text-xs text-white/60">Hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <div className="text-3xl font-bold text-white">00</div>
              <div className="text-xs text-white/60">Minutes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  )
}
