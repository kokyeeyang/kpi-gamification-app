'use client';

import { useState } from 'react';

const initialChallenges = Array.from({length:25}, (_, i) => ({
    id:i,
    title: `Challenge ${i + 1}`,
    unlocked: true,
    completed: true
}));

export default function BingoPage() {
    const [challenges, setChallenges] = useState(initialChallenges);

    const toggleCompleted = (id:number) => {
        setChallenges(prev => prev.map(ch => ch.id === id ? {...ch, completed: !ch.completed} : ch));
    };

    return (
        <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">Recruitment KPI Bingo</h1>
            <div className="grid grid-cols-5 gap-2 w-full max-w-md">
                {challenges.map(ch => (
                    <button
                        key={ch.id}
                        onClick={() => ch.unlocked}
                        className={`
                            aspect-square p-2 rounded-lg text-sm font-medium flex items-center justify-center text-center
                            ${ch.unlocked ? 'border border-gray-300' : 'bg-gray-300 text-black-500 cursor-not-allowed'}
                            ${ch.completed ? 'bg-green-400 text-black line-through' : ''}
                        `}
                    >
                        {ch.unlocked ? ch.title : '🔒'}
                    </button>
                ))}
            </div>
        </div>
    )
};

