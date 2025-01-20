import React from 'react';
import { Bell, Moon, Sun, User, Shield, Database } from 'lucide-react';

export function Settings() {
  const settings = [
    {
      category: 'Account',
      icon: <User className="w-5 h-5" />,
      items: [
        { name: 'Profile Information', description: 'Update your account details and profile picture' },
        { name: 'Email Preferences', description: 'Manage your email notifications and subscriptions' },
        { name: 'Password', description: 'Change your password and security settings' },
      ],
    },
    {
      category: 'Notifications',
      icon: <Bell className="w-5 h-5" />,
      items: [
        { name: 'Push Notifications', description: 'Configure desktop and mobile notifications' },
        { name: 'Email Alerts', description: 'Set up email alerts for important events' },
        { name: 'Activity Digest', description: 'Receive daily or weekly activity summaries' },
      ],
    },
    {
      category: 'Privacy',
      icon: <Shield className="w-5 h-5" />,
      items: [
        { name: 'Data Sharing', description: 'Control how your data is shared and used' },
        { name: 'Activity Log', description: 'View and manage your account activity' },
        { name: 'Connected Apps', description: 'Manage third-party app connections' },
      ],
    },
    {
      category: 'Data Management',
      icon: <Database className="w-5 h-5" />,
      items: [
        { name: 'Export Data', description: 'Download your analytics and account data' },
        { name: 'Data Retention', description: 'Configure data storage and deletion policies' },
        { name: 'Backup Settings', description: 'Set up automatic data backups' },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>
      
      <div className="space-y-6">
        {settings.map((section) => (
          <div key={section.category} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                {section.icon}
                <h2 className="text-xl font-semibold">{section.category}</h2>
              </div>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                >
                  <h3 className="font-medium mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}