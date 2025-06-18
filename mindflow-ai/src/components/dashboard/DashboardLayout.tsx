import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string; // Optional title for the dashboard page
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8"> {/* Dashboard specific padding */}
      {title && (
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          {title}
        </h1>
      )}
      <div className="space-y-6"> {/* Container for widgets with spacing */}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
