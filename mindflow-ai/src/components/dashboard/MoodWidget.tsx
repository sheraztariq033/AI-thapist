import React, { useState } from 'react';
import Card from '../common/UI/Card'; // Adjust path
import Button from '../common/UI/Button'; // Adjust path

interface MoodOption {
  id: string;
  label: string;
  emoji: string; // Simple emoji representation
}

const moodOptions: MoodOption[] = [
  { id: 'happy', label: 'Happy', emoji: '😊' },
  { id: 'calm', label: 'Calm', emoji: '😌' },
  { id: 'neutral', label: 'Okay', emoji: '😐' },
  { id: 'sad', label: 'Sad', emoji: '😟' },
  { id: 'anxious', label: 'Anxious', emoji: '😬' },
];

const MoodWidget: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOption | null>(null);

  const handleMoodSelect = (mood: MoodOption) => {
    setSelectedMood(mood);
    console.log(`Mood selected: ${mood.label} (${mood.emoji})`);
    // In a real app, this would likely be saved to a backend or context
  };

  return (
    <Card title="How are you feeling right now?">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {moodOptions.map((mood) => (
          <Button
            key={mood.id}
            variant={selectedMood?.id === mood.id ? 'primary' : 'outline'}
            onClick={() => handleMoodSelect(mood)}
            className="flex flex-col items-center p-3 sm:p-4 min-w-[70px] sm:min-w-[80px]"
            size="md"
          >
            <span className="text-2xl sm:text-3xl mb-1">{mood.emoji}</span>
            <span className="text-xs sm:text-sm">{mood.label}</span>
          </Button>
        ))}
      </div>
      {selectedMood && (
        <p className="text-center mt-4 text-sm text-gray-600">
          You're feeling: {selectedMood.label} {selectedMood.emoji}
        </p>
      )}
    </Card>
  );
};

export default MoodWidget;
