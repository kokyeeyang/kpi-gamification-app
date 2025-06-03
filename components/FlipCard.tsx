'use client';

import { useState } from 'react';
import classNames from 'classnames';

export default function FlipCard({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full aspect-square [perspective:1000px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={classNames(
          "relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-2xl shadow-lg [backface-visibility:hidden]">
          {front}
        </div>
        <div className="absolute w-full h-full bg-green-500 text-white flex items-center justify-center rounded-2xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {back}
        </div>
      </div>
    </div>
  );
}
