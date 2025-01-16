
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BarChart2, Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Navigation() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 fixed bottom-0 md:top-0 w-full md:w-64 md:h-screen shadow-lg md:shadow-none z-50">
      <div className="flex md:flex-col justify-around md:justify-start md:space-y-2 p-4">
        <div className="hidden md:flex items-center space-x-3 px-2 py-4 mb-6">
          <LayoutDashboard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-semibold">Analytics Pro</span>
        </div>
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="hidden md:inline">Dashboard</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`
          }
        >
          <BarChart2 className="w-5 h-5" />
          <span className="hidden md:inline">Analytics</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`
          }
        >
          <Settings className="w-5 h-5" />
          <span className="hidden md:inline">Settings</span>
        </NavLink>

        <button
          onClick={toggleTheme}
          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span className="hidden md:inline">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>
    </nav>
  );
}