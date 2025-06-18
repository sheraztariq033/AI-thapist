import React, { useState } from 'react';
import Card from '../common/UI/Card';   // Adjust path
import Button from '../common/UI/Button'; // Adjust path
import Input from '../common/UI/Input';   // Adjust path

interface GoalSettingProps {
  onNext: (selectedGoals: string[], customGoal: string) => void;
  onSkip: () => void;
}

interface GoalOption {
  id: string;
  label: string;
}

const predefinedGoals: GoalOption[] = [
  { id: 'reduce_anxiety', label: 'Reduce Anxiety' },
  { id: 'improve_mood', label: 'Improve Mood' },
  { id: 'coping_skills', label: 'Develop Coping Skills' },
  { id: 'understand_self', label: 'Understand Myself Better' },
  { id: 'improve_relationships', label: 'Improve Relationships' },
];

const GoalSetting: React.FC<GoalSettingProps> = ({ onNext, onSkip }) => {
  const [selectedGoalIds, setSelectedGoalIds] = useState<string[]>([]);
  const [customGoal, setCustomGoal] = useState('');

  const toggleGoalSelection = (goalId: string) => {
    setSelectedGoalIds(prev =>
      prev.includes(goalId) ? prev.filter(id => id !== goalId) : [...prev, goalId]
    );
  };

  const handleSubmit = () => {
    const selectedLabels = predefinedGoals
      .filter(goal => selectedGoalIds.includes(goal.id))
      .map(goal => goal.label);
    onNext(selectedLabels, customGoal);
    // Log for now
    console.log('Selected Goals:', selectedLabels, 'Custom Goal:', customGoal);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4">
      <Card title="What are your goals?" className="max-w-lg w-full shadow-xl" titleClassName="text-xl sm:text-2xl">
        <div className="space-y-6">
          <p className="text-gray-600 text-sm">
            Select areas you'd like to focus on, or add your own. This helps us personalize your experience.
          </p>

          <div className="space-y-3">
            {predefinedGoals.map((goal) => (
              <div
                key={goal.id}
                onClick={() => toggleGoalSelection(goal.id)}
                className={`p-3 border rounded-lg cursor-pointer transition-colors
                                    ${selectedGoalIds.includes(goal.id)
                                      ? 'bg-blue-100 border-blue-500 ring-2 ring-blue-500'
                                      : 'bg-white border-gray-300 hover:bg-gray-50'}`}
              >
                <label htmlFor={goal.id + '-checkbox'} className="flex items-center cursor-pointer"> {/* Changed htmlFor to avoid conflict with div id */}
                   {/* Basic custom checkbox appearance - can be improved with a dedicated component */}
                  <div className={`w-5 h-5 border-2 rounded mr-3 flex-shrink-0 flex items-center justify-center
                                        ${selectedGoalIds.includes(goal.id) ? 'border-blue-600 bg-blue-600' : 'border-gray-400'}`}>
                    {selectedGoalIds.includes(goal.id) && <span className="text-white text-xs">✔</span>}
                  </div>
                  <span className="text-gray-700">{goal.label}</span>
                </label>
                {/* Hidden actual checkbox for accessibility if needed, though div click handles it.
                    If using a real checkbox input, it would be here and styled.
                    <input id={goal.id + '-checkbox'} type="checkbox" checked={selectedGoalIds.includes(goal.id)} onChange={() => {}} className="hidden" />
                */}
              </div>
            ))}
          </div>

          <div>
            <Input
              label="Or, add a custom goal (optional):"
              placeholder="E.g., Be more present"
              value={customGoal}
              onChange={(e) => setCustomGoal(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
            <Button variant="outline" onClick={onSkip} className="w-full sm:w-auto">
              Skip for Now
            </Button>
            <Button variant="primary" onClick={handleSubmit} className="w-full sm:w-auto">
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GoalSetting;
