'use client';

type Deal = {
  id: number;
  client: string;
  candidate: string;
  role: string;
  amount: number;
};

const getRarity = (amount: number) => {
  if (amount < 10000) return 'Common';
  if (amount < 20000) return 'Uncommon';
  if (amount < 30000) return 'Rare';
  return 'Ultra Rare';
};

const rarityColors: Record<string, string> = {
  'Common': 'bg-gray-100 border-gray-400 text-gray-800',
  'Uncommon': 'bg-green-100 border-green-400 text-green-800',
  'Rare': 'bg-blue-100 border-blue-400 text-blue-800',
  'Ultra Rare': 'bg-gradient-to-r from-purple-400 to-yellow-300 border-yellow-600 text-white',
};

export function DealCard({ deal }: { deal: Deal }) {
  const rarity = getRarity(deal.amount);
  const colorClass = rarityColors[rarity];

  return (
    <div className={`rounded-xl border p-4 shadow-lg w-64 ${colorClass}`}>
      <h2 className="text-xl font-bold mb-1">{deal.role}</h2>
      <p className="text-sm">👤 {deal.candidate}</p>
      <p className="text-sm">🏢 {deal.client}</p>
      <p className="text-sm mt-2 font-semibold">💷 £{deal.amount.toLocaleString()}</p>
      <div className="mt-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border bg-white text-black inline-block">
        {rarity}
      </div>
    </div>
  );
}
