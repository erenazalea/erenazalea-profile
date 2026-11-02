'use client'

import { useState } from 'react'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  // Daftar Video TikTok (Isi dengan ID video TikTok kamu)
  const tiktokVideos = [
    { id: '1', videoId: '7650383175247482119', title: 'Video 1' },
    { id: '2', videoId: '7631431613179596040', title: 'Video 2' },
    { id: '3', videoId: '7608830575108984072', title: 'Video 3' },
    { id: '4', videoId: '7321001998248103174', title: 'Video 4' },
  ]

  return (
    <div
      className={`min-h-screen w-full flex flex-col justify-between overflow-x-hidden font-sans transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0F172A] text-slate-100' : 'bg-[#F9FBF9] text-gray-800'
      }`}
    >
      {/* 1. HEADER / NAVBAR */}
      <header className="flex justify-end items-center px-6 md:px-12 py-4 shrink-0 gap-4">
        {/* Toggle Switch */}
        <button
          onClick={toggleTheme}
          type="button"
          role="switch"
          aria-checked={isDarkMode}
          aria-label="Toggle Theme"
          className={`relative inline-flex h-6 w-11 items-center shrink-0 cursor-pointer rounded-full p-0.5 border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none ${
            isDarkMode ? 'bg-slate-700' : 'bg-gray-300'
          }`}
        >
          <span
            className={`pointer-events-none flex h-4 w-4 transform items-center justify-center rounded-full text-[10px] shadow-sm transition-transform duration-300 ease-in-out ${
              isDarkMode
                ? 'translate-x-5 bg-slate-900 text-yellow-400'
                : 'translate-x-0 bg-white text-amber-500'
            }`}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </span>
        </button>

        {/* Logo Erenazalea */}
        <Image
          src="/erenazalea.png"
          alt="Erenazalea Logo"
          width={80}
          height={40}
          priority
          className={`w-20 h-auto object-contain transition-all duration-300 ${
            !isDarkMode ? 'invert' : 'invert-0'
          }`}
        />
      </header>

      {/* 2. MAIN CONTENT (Split Left: Hero, Right: Showcases Grid) */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-6 md:py-10 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
        
        {/* Sisi Kiri / Atas: Hero Text */}
        <div className="md:col-span-5 flex flex-col items-start w-full">
          <span
            className={`text-xs md:text-sm uppercase tracking-[0.3em] block text-left transition-colors duration-300 ${
              isDarkMode ? 'text-slate-400' : 'text-gray-500'
            }`}
          >
            WELCOME TO MY SPACE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mt-2 mb-2 md:mb-6 tracking-tight flex items-baseline justify-start whitespace-nowrap">
            <span>I am</span>
            <span
              className={`italic font-normal ml-3 inline-flex items-baseline transition-colors duration-300 ${
                isDarkMode ? 'text-blue-400' : 'text-[#2A4393]'
              }`}
            >
              <Typewriter
                options={{
                  strings: ['erenazalea', 'erena', 'azalea'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'inline-block',
                  cursorClassName: `inline-block ${
                    isDarkMode ? 'text-blue-400' : 'text-[#2A4393]'
                  }`,
                }}
              />
            </span>
          </h1>
        </div>

        {/* Sisi Kanan / Bawah: Showcases Video */}
        <div className="md:col-span-7 w-full flex flex-col justify-center items-start">
          <span
            className={`text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-3 block text-left transition-colors duration-300 ${
              isDarkMode ? 'text-slate-400' : 'text-gray-500'
            }`}
          >
            SHOWCASES
          </span>
          
          {/* Video Grid: 1 Kolom di HP/iPad (grid-cols-1), 2 Kolom di iPad Landscape/Laptop (sm:grid-cols-2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {tiktokVideos.slice(0, 4).map((video) => (
              <div
                key={video.id}
                className={`relative w-full aspect-[16/9] rounded-xl overflow-hidden border shadow-md transition-all duration-300 hover:scale-[1.02] ${
                  isDarkMode
                    ? 'bg-slate-800 border-slate-700 hover:border-blue-400'
                    : 'bg-white border-gray-200 hover:border-[#3B4BB1]'
                }`}
              >
                <iframe
                  src={`https://www.tiktok.com/player/v1/${video.videoId}?autoplay=0`}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="fullscreen"
                  title={video.title}
                ></iframe>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* 3. FOOTER AREA */}
      <footer className="shrink-0 w-full bg-[#E00000] text-white text-center py-2.5 text-sm font-medium z-10">
        Copyright© by <span className="italic font-bold">erenazalea</span> 2026
      </footer>
    </div>
  )
}