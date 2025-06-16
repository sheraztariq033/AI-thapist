import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 shadow h-full hidden md:block"> {/* Hidden on small screens */}
      <h2 className="text-xl font-semibold mb-4">Navigation</h2>
      {/* Placeholder for sidebar links */}
      <ul>
        <li className="mb-2"><a href="#dashboard" className="hover:text-blue-600">Dashboard</a></li>
        <li className="mb-2"><a href="#profile" className="hover:text-blue-600">Profile</a></li>
        <li className="mb-2"><a href="#settings" className="hover:text-blue-600">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
