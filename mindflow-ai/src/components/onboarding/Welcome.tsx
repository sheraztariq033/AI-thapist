import React from 'react';
import Card from '../common/UI/Card';   // Adjust path
import Button from '../common/UI/Button'; // Adjust path

interface WelcomeProps {
  onGetStarted: () => void; // Callback to proceed to the next step
}

const Welcome: React.FC<WelcomeProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4"> {/* Adjust min-height as needed */}
      <Card
        title="Welcome to MindFlow AI"
        className="max-w-lg text-center shadow-xl"
        titleClassName="text-2xl sm:text-3xl"
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            We're here to support you on your journey to mental wellness.
            MindFlow AI offers a personalized and understanding space for you to explore your thoughts and feelings.
          </p>
          <p className="text-gray-600">
            To help us tailor your experience, we'll start with a few questions to understand your needs and preferences.
            This will only take a few minutes.
          </p>
          <div className="pt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onGetStarted}
              className="w-full sm:w-auto"
            >
              Begin Your Journey
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-6">
            Your privacy is important to us. All your information will be kept confidential and secure.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Welcome;
