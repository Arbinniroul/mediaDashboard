import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import type { MetricCardProps } from '../types';

export function MetricCard({ title, value, icon, trend, className = '' }: MetricCardProps) {
  const trendColor = trend && trend > 0 ? 'text-green-500' : 'text-red-500';
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">{title}</h3>
        <span className="text-gray-400 dark:text-gray-500">{icon}</span>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        {trend !== undefined && (
          <div className={`flex items-center ${trendColor}`}>
            {trend > 0 ? <ArrowUpIcon size={16} /> : <ArrowDownIcon size={16} />}
            <span className="ml-1 text-sm">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}