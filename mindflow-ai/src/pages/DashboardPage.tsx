import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout'; // Adjust path
import WelcomeWidget from '../components/dashboard/WelcomeWidget';   // Adjust path
import MoodWidget from '../components/dashboard/MoodWidget';       // Adjust path
import QuickActions from '../components/dashboard/QuickActions';   // Adjust path

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout title="My Dashboard">
      {/*
        A common dashboard pattern is a grid.
        We can implement a more sophisticated grid in the next step
        or directly in DashboardLayout if preferred.
        For now, a simple column layout or basic grid is fine.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Welcome widget could span more columns on larger screens if desired */}
        <div className="lg:col-span-2">
          <WelcomeWidget />
        </div>

        {/* Mood widget and Quick Actions can take up remaining space */}
        <div className="space-y-6">
          <MoodWidget />
          <QuickActions />
          {/* Add other widgets here in future */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
