import React from 'react';
import { Users, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

import { AnalyticsChart } from '../components/AnalyticsChart';
import { NotificationPanel } from '../components/NotificationPanel';
import type { ChartData, Notification } from '../types';

const mockChartData: ChartData[] = [
  { date: '2024-03-01', clicks: 120, impressions: 1400 },
  { date: '2024-03-02', clicks: 140, impressions: 1600 },
  { date: '2024-03-03', clicks: 160, impressions: 1800 },
  { date: '2024-03-04', clicks: 180, impressions: 2000 },
  { date: '2024-03-05', clicks: 200, impressions: 2200 },
];

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Follower',
    message: 'Donald Trump started following you',
    timestamp: new Date(),
    read: false,
  },
  {
    id: '2',
    title: 'Post Performance',
    message: 'Your latest post reached 1,0000 views',
    timestamp: new Date(Date.now() - 3600000),
    read: true,
  },
];

export function Dashboard() {
  const [notifications, setNotifications] = React.useState(mockNotifications);

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Social Media Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AnalyticsChart data={mockChartData} />
        </div>
        <div>
          <NotificationPanel
            notifications={notifications}
            onMarkAsRead={handleMarkAsRead}
          />
        </div>
      </div>
    </div>
  );
}