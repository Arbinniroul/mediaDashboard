import React from 'react';
import { AnalyticsChart } from '../components/AnalyticsChart';
import type { ChartData } from '../types';

const extendedChartData: ChartData[] = [
  { date: '2024-02-25', clicks: 100, impressions: 1200 },
  { date: '2024-02-26', clicks: 110, impressions: 1300 },
  { date: '2024-02-27', clicks: 130, impressions: 1500 },
  { date: '2024-02-28', clicks: 120, impressions: 1400 },
  { date: '2024-02-29', clicks: 140, impressions: 1600 },
  { date: '2024-03-01', clicks: 160, impressions: 1800 },
  { date: '2024-03-02', clicks: 180, impressions: 2000 },
];

export function Analytics() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Analytics
      </h1>
      <div className="space-y-6">
        <AnalyticsChart data={extendedChartData} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Key Insights
            </h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li>• Average daily clicks: 134</li>
              <li>• Average impressions: 1,542</li>
              <li>• Click-through rate: 8.7%</li>
              <li>• Growth rate: +15% week over week</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Recommendations
            </h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li>• Best posting time: 2 PM - 4 PM</li>
              <li>• Top performing content: Video posts</li>
              <li>• Engagement boost: Use more hashtags</li>
              <li>• Content gap: Weekend posts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}