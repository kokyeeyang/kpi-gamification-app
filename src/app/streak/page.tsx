'use client';

import { ArrowRight } from 'lucide-react'; // Install lucide-react if needed
import { useState } from 'react';

const STREAK_TITLES = ['Bravo!', 'Hot!', 'On Fire!', 'Momentum!', 'Focused!'];

export default function StreakProgress() {
  const [currentStreak, setCurrentStreak] = useState(2); // Change this to simulate streak level (0–5)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4 space-y-8">
      <h1 className="text-2xl font-bold text-center">🔥 Deal Streak</h1>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-full overflow-x-auto sm:overflow-x-visible">
        {STREAK_TITLES.map((title, i) => (
          <div key={i} className="flex items-center">
            {/* Cloud */}
            <div
              className={`relative w-32 h-22 bg-white rounded-full shadow-lg flex items-center justify-center text-sm text-center px-2 transition-all duration-300
                ${i < currentStreak ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-500'}
              `}
            >
              {title}
              {/* Decorative cloud bumps */}
              <div className="absolute -top-2 left-3 w-5 h-5 bg-inherit rounded-full"></div>
              <div className="absolute -top-2 right-3 w-5 h-5 bg-inherit rounded-full"></div>
              <div className="absolute -bottom-2 left-5 w-4 h-4 bg-inherit rounded-full"></div>
              <div className="absolute -bottom-2 right-5 w-4 h-4 bg-inherit rounded-full"></div>
            </div>

            {/* Arrow (skip for last item) */}
            {i !== STREAK_TITLES.length - 1 && (
              <ArrowRight className="mx-2 text-gray-400 w-6 h-6 shrink-0" />
            )}
          </div>
        ))}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => setCurrentStreak((prev) => Math.max(prev - 1, 0))}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          -1 Day
        </button>
        <button
          onClick={() => setCurrentStreak((prev) => Math.min(prev + 1, STREAK_TITLES.length))}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          +1 Day
        </button>
      </div>
    </div>
  );
}
