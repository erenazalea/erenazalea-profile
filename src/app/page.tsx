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
      className={`h-screen w-screen flex flex-col justify-between overflow-hidden font-sans transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0F172A] text-slate-100' : 'bg-[#F9FBF9] text-gray-800'
      }`}
    >
      {/* 1. HEADER / NAVBAR */}
      <header className="flex justify-end items-center px-8 py-4 shrink-0 gap-3">
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
          {/* Lingkaran penggeser (knob) mungil */}
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

        {/* <button className="bg-[#3B4BB1] hover:bg-[#2F3C90] cursor-pointer text-white px-6 py-2 rounded-full font-medium transition">
          About
        </button> */}
        <Image
          src="/erenazalea.png" // Path otomatis mengarah ke folder public/
          alt="About"
          width={64}
          height={32}
          className={`w-22 h-14 transition-all duration-300 ${
            !isDarkMode ? 'invert' : 'invert-0'
          }`}
        />
      </header>

      {/* 2. MAIN CONTENT (Split Left: Hero, Right: 3x3 TikTok Grid) */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-12 items-center gap-8 overflow-hidden py-4">
        
        {/* Sisi Kiri: Hero Text (4 atau 5 Kolom) */}
        <div className="md:col-span-5 flex flex-col items-start w-full">
          <span
            className={`text-sm uppercase tracking-[0.3em] block text-left transition-colors duration-300 ${
              isDarkMode ? 'text-slate-400' : 'text-gray-500'
            }`}
          >
            Welcome to my space
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mt-2 mb-4 tracking-tight flex items-baseline justify-start whitespace-nowrap">
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

        {/* Sisi Kanan: Header Section + Grid 4 Video Horizontal */}
        <div className="md:col-span-7 w-full flex flex-col justify-center items-start">
          {/* Judul Section */}
          <span
            className={`text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-3 block text-left transition-colors duration-300 ${
              isDarkMode ? 'text-slate-400' : 'text-gray-500'
            }`}
          >
            Showcases
          </span>

          {/* Grid 4 Video */}
          <div className="grid grid-cols-2 gap-4 w-full">
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
      <div className="shrink-0 w-full">
        <footer className="bg-[#E00000] text-white text-center py-2 text-sm font-medium">
          Copyright© by <span className="italic font-bold">erenazalea</span> 2026
        </footer>
      </div>
    </div>
  )
}