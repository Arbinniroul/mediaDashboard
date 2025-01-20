import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { Analytics } from './pages/Analytics';
import { Settings } from './pages/Settings';
import { Loader2 } from 'lucide-react';

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2 className="w-8 h-8 animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Navigation />
          <div className="md:pl-64 pb-16 md:pb-0">
            <main className="min-h-screen p-4 md:p-6">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}