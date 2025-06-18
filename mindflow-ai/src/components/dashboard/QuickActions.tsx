import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/UI/Card'; // Adjust path
import Button from '../common/UI/Button'; // Adjust path
// Consider importing icons later if available e.g. from 'lucide-react'

interface QuickAction {
  id: string;
  label: string;
  actionType: 'link' | 'button';
  path?: string; // For links
  onClick?: () => void; // For buttons
  icon?: React.ReactNode; // Placeholder for icon
  variant?: 'primary' | 'secondary' | 'outline';
}

const quickActionsList: QuickAction[] = [
  {
    id: 'new-session',
    label: 'Start New Session',
    actionType: 'link',
    path: '/chat', // Assuming /chat is the route for a new session
    icon: <span className="mr-2">💬</span>, // Placeholder icon
    variant: 'primary',
  },
  {
    id: 'view-progress',
    label: 'View My Progress',
    actionType: 'link',
    path: '/progress', // Placeholder path
    icon: <span className="mr-2">📊</span>,
    variant: 'outline',
  },
  {
    id: 'explore-resources',
    label: 'Explore Resources',
    actionType: 'link',
    path: '/resources', // Placeholder path
    icon: <span className="mr-2">📚</span>,
    variant: 'outline',
  },
  {
    id: 'daily-checkin',
    label: 'Daily Check-in',
    actionType: 'button',
    onClick: () => console.log('Daily Check-in clicked'),
    icon: <span className="mr-2">☀️</span>,
    variant: 'secondary',
  },
];

const QuickActions: React.FC = () => {
  return (
    <Card title="Quick Actions">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickActionsList.map((action) => (
          action.actionType === 'link' && action.path ? (
            <Link to={action.path} key={action.id} className="block">
              <Button variant={action.variant || 'primary'} className="w-full justify-start text-left h-full">
                {action.icon}
                {action.label}
              </Button>
            </Link>
          ) : (
            <Button
              key={action.id}
              variant={action.variant || 'primary'}
              onClick={action.onClick}
              className="w-full justify-start text-left h-full"
            >
              {action.icon}
              {action.label}
            </Button>
          )
        ))}
      </div>
    </Card>
  );
};

export default QuickActions;
