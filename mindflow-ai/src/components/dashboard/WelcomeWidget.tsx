import React from 'react';
import { useAuth } from '../../context/AuthContext'; // Adjust path
import Card from '../common/UI/Card'; // Adjust path

const WelcomeWidget: React.FC = () => {
  const { user } = useAuth();

  const userName = user?.name || user?.email || 'Explorer'; // Fallback for user name

  // Array of simple motivational quotes
  const quotes = [
    "Every day is a new beginning.",
    "You are stronger than you think.",
    "Small steps lead to big changes.",
    "Be kind to yourself today.",
    "Your journey is unique and valid."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <Card
      title={`Welcome back, ${userName}!`}
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
      titleClassName="text-white border-blue-400"
      bodyClassName="text-blue-50"
    >
      <p className="text-lg">{randomQuote}</p>
      <p className="mt-3 text-sm">We're glad to see you again. Let's make today a good one.</p>
    </Card>
  );
};

export default WelcomeWidget;
