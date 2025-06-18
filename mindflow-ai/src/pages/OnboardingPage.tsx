import React, { useState } from 'react';
import Welcome from '../components/onboarding/Welcome';     // Adjust path
import GoalSetting from '../components/onboarding/GoalSetting'; // Adjust path
// Import other onboarding steps here as they are created

// Define constants for step numbers for clarity
const ONBOARDING_STEPS = {
  WELCOME: 1,
  GOAL_SETTING: 2,
  // PERSONALITY_ASSESSMENT: 3, // Example for future step
  // ... more steps
};
const TOTAL_ONBOARDING_STEPS = 2; // Update as more steps are added

const OnboardingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(ONBOARDING_STEPS.WELCOME);

  // Data collected during onboarding can be stored here or in a context
  const [onboardingData, setOnboardingData] = useState({});

  const handleNextStep = () => {
    if (currentStep < TOTAL_ONBOARDING_STEPS) { // Ensure we don't go beyond defined steps
         setCurrentStep(prev => prev + 1);
    } else {
        // Handle completion of onboarding
        console.log('Onboarding complete!', onboardingData);
        // Redirect to dashboard or another page
        // navigate('/dashboard'); // Assuming useNavigate is available if needed
    }
  };

  const handleGoalSettingNext = (selectedGoals: string[], customGoal: string) => {
    setOnboardingData(prev => ({ ...prev, goals: selectedGoals, customGoal }));
    handleNextStep();
  };

  const handleGoalSettingSkip = () => {
    setOnboardingData(prev => ({ ...prev, goals: [], customGoal: '(skipped)' }));
    handleNextStep(); // Or navigate to a different step if skip logic differs
  };

  // Placeholder for previous step logic if needed in future
  // const handlePrevStep = () => {
  //   if (currentStep > 1) {
  //     setCurrentStep(prev => prev - 1);
  //   }
  // };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case ONBOARDING_STEPS.WELCOME:
        return <Welcome onGetStarted={handleNextStep} />;
      case ONBOARDING_STEPS.GOAL_SETTING:
        return <GoalSetting onNext={handleGoalSettingNext} onSkip={handleGoalSettingSkip} />;
      // Add cases for more steps here
      default:
        return <p>Loading onboarding step...</p>; // Or a fallback UI
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen"> {/* Full page background */}
      {/*
        Future location for OnboardingProgressIndicator,
        passing currentStep and TOTAL_ONBOARDING_STEPS
      */}
      {/* <OnboardingProgress currentStep={currentStep} totalSteps={TOTAL_ONBOARDING_STEPS} /> */}

      <div className="container mx-auto py-8 sm:py-12">
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default OnboardingPage;
