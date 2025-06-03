"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const questions = [
  {
    question: 'What was the highest deal this week?',
    options: ['£10,000', '£25,000', '£40,000', '£55,000'],
    answer: '£55,000',
  },
  {
    question: 'Which global office is leading this week?',
    options: ['London', 'New York', 'Singapore', 'Berlin'],
    answer: 'Singapore',
  },
  {
    question: 'How many placements were made this week?',
    options: ['12', '18', '21', '25'],
    answer: '21',
  },
  {
    question: 'Which team made the most calls this week?',
    options: ['Red', 'Blue', 'Yellow', 'Green'],
    answer: 'Blue',
  },
  {
    question: 'How many interviews were arranged this week?',
    options: ['30', '42', '58', '61'],
    answer: '58',
  },
  {
    question: 'What was the average deal value this week?',
    options: ['£15,000', '£20,000', '£22,500', '£27,000'],
    answer: '£22,500',
  },
  {
    question: 'Who closed the fastest deal this week?',
    options: ['Alice', 'Bob', 'Clara', 'David'],
    answer: 'Clara',
  },
  {
    question: 'Which sector performed best this week?',
    options: ['Tech', 'Finance', 'Healthcare', 'Legal'],
    answer: 'Tech',
  },
  {
    question: 'What was the most placed job title?',
    options: ['Engineer', 'Analyst', 'Consultant', 'Manager'],
    answer: 'Analyst',
  },
  {
    question: 'How many new clients were signed this week?',
    options: ['2', '4', '6', '8'],
    answer: '6',
  },
];

const hangmanParts = [
  'O', // Head
  '|', // Torso
  '/', // Left Arm
  '\\', // Right Arm
  '/', // Left Leg
  '\\', // Right Leg
];

type Question = {
    question: string;
    options: string[];
    answer: string;
}
export default function KPIHangmanGame() {
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [showMessage, setShowMessage] = useState('');
  const maxWrong = hangmanParts.length;

  useEffect(() => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuiz(shuffled.slice(0, 10));
  }, []);

  const handleAnswer = (option: string) => {
    if (!quiz[currentQ]) return;
    const isCorrect = option === quiz[currentQ].answer;

    if (isCorrect) {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
      });
      setShowMessage('✅ Correct! Great job!');
    } else {
      setWrong((prev) => prev + 1);
      setShowMessage('❌ Oops! Not quite right. Try the next one!');
    }

    setTimeout(() => {
      setShowMessage('');
      setCurrentQ((prev) => prev + 1);
    }, 1200);
  };

  const renderHangman = () => {
    return (
      <div className="bg-white rounded-xl shadow-md p-4 mb-6 text-black w-full text-center max-w-xs mx-auto">
        <div className="text-xl font-mono leading-snug">
          <div>+---+</div>
          <div>|   {wrong > 0 ? hangmanParts[0] : ''}</div>
          <div>|  {wrong > 2 ? hangmanParts[2] : ' '}{wrong > 1 ? hangmanParts[1] : ' '}{wrong > 3 ? hangmanParts[3] : ''}</div>
          <div>|  {wrong > 4 ? hangmanParts[4] : ' '} {wrong > 5 ? hangmanParts[5] : ''}</div>
          <div>|</div>
          <div>====</div>
        </div>
      </div>
    );
  };

  const gameOver = wrong >= maxWrong;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-start">
      <h1 className="text-2xl font-bold mb-4 text-center">🎯 Interesting facts Challenge</h1>
      <div className="w-full max-w-md">
        {renderHangman()}

        {!gameOver && quiz[currentQ] && (
          <>
            <div className="text-sm text-center text-gray-600 mb-2">
              Wrong Answers: <strong>{wrong}</strong> / {maxWrong}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={quiz[currentQ].question}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white p-4 rounded-xl shadow-lg mb-4"
              >
                <h2 className="text-lg text-black font-semibold mb-2">
                  {quiz[currentQ].question}
                </h2>
                <div className="flex flex-col gap-2">
                  {quiz[currentQ].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        )}

        {showMessage && (
          <div className="text-center font-medium text-green-600">
            {showMessage}
          </div>
        )}

        {!quiz[currentQ] && !gameOver && (
          <div className="text-center font-bold text-xl mt-6">
            🎉 Game Over! You got through {wrong} wrong answer(s)!
          </div>
        )}

        {gameOver && (
          <div className="text-center text-red-600 font-bold text-xl mt-6">
            ☠️ You lost! The hangman is complete. Try again on refresh!
          </div>
        )}
      </div>
    </div>
  );
}
