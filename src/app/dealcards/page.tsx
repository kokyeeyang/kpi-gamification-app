'use client';

import { DealCard } from '../../../components/DealCard';

const sampleDeals = [
  { id: 1, client: 'Acme Ltd', candidate: 'Alice Smith', role: 'Software Engineer', amount: 9500 },
  { id: 2, client: 'Beta Corp', candidate: 'John Doe', role: 'Data Analyst', amount: 15000 },
  { id: 3, client: 'Gamma Group', candidate: 'Linda White', role: 'Product Manager', amount: 27500 },
  { id: 4, client: 'Omega PLC', candidate: 'Mark Brown', role: 'CTO', amount: 42000 },
];

export default function DealCardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">🃏 Deal Cards</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {sampleDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
}
