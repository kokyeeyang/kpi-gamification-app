'use client';

import FlipCard from '../../../components/FlipCard';
import { kpiChallenges } from '../../../data/kpis';
import { useEffect, useState } from 'react';

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function BingoPage() {
  const [shuffledKPIs, setShuffledKPIs] = useState<string[]>([]);

  useEffect(() => {
    setShuffledKPIs(shuffleArray(kpiChallenges));
  }, []);

  return (
    <main className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-xl font-bold mb-4 text-center">KPI Bingo Challenge</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {shuffledKPIs.map((kpi, idx) => (
          <FlipCard key={idx} front="?" back={kpi} />
        ))}
      </div>
    </main>
  );
}
