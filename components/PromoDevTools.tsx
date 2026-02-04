'use client';

import { useState, useEffect } from 'react';
import { getMondayPromoStatus, enableTestMode, disableTestMode } from '@/lib/promotions';

/**
 * Development tool for testing Monday promotion
 * Only shows in development mode or when explicitly enabled
 */
export function PromoDevTools() {
  const [status, setStatus] = useState(getMondayPromoStatus());
  const [isVisible, setIsVisible] = useState(false);

  // Show dev tools if:
  // - Development mode OR
  // - URL has ?showDevTools=true OR
  // - localStorage has devTools enabled
  useEffect(() => {
    const isDev = process.env.NODE_ENV === 'development';
    const urlParams = new URLSearchParams(window.location.search);
    const showViaUrl = urlParams.get('showDevTools') === 'true';
    const showViaStorage = localStorage.getItem('showPromoDevTools') === 'true';

    setIsVisible(isDev || showViaUrl || showViaStorage);

    // Update status every second
    const interval = setInterval(() => {
      setStatus(getMondayPromoStatus());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleToggleTestMode = () => {
    if (status.isTestMode) {
      disableTestMode();
    } else {
      enableTestMode();
    }
    // Force reload to update the status
    window.location.reload();
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gray-900 text-white p-4 text-xs font-mono border-b border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-yellow-400">🛠️ PROMO DEV TOOLS</h3>
        <button
          onClick={() => {
            localStorage.removeItem('showPromoDevTools');
            setIsVisible(false);
          }}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>

      <div className="space-y-1 mb-3">
        <div className="flex justify-between">
          <span className="text-gray-400">Mazatlán Time:</span>
          <span className="text-green-400">
            {status.currentDay} {status.currentHour}:00
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Is Monday:</span>
          <span className={status.isMonday ? 'text-green-400' : 'text-red-400'}>
            {status.isMonday ? '✓ YES' : '✗ NO'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Business Hours (1-10PM):</span>
          <span className={status.isDuringBusinessHours ? 'text-green-400' : 'text-red-400'}>
            {status.isDuringBusinessHours ? '✓ YES' : '✗ NO'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Test Mode:</span>
          <span className={status.isTestMode ? 'text-yellow-400' : 'text-gray-500'}>
            {status.isTestMode ? '⚠️ ENABLED' : 'DISABLED'}
          </span>
        </div>
        <div className="flex justify-between font-bold pt-1 border-t border-gray-700">
          <span className="text-gray-300">Promo Active:</span>
          <span className={status.isActive ? 'text-green-400' : 'text-red-400'}>
            {status.isActive ? '✓ YES' : '✗ NO'}
          </span>
        </div>
      </div>

      <button
        onClick={handleToggleTestMode}
        className={`w-full py-2 px-3 rounded font-bold transition-colors ${
          status.isTestMode
            ? 'bg-red-600 hover:bg-red-700 text-white'
            : 'bg-green-600 hover:bg-green-700 text-white'
        }`}
      >
        {status.isTestMode ? '🔴 DISABLE TEST MODE' : '🟢 ENABLE TEST MODE'}
      </button>

      <p className="text-gray-500 text-[10px] mt-2 text-center">
        Test mode simulates Monday promo being active
      </p>
    </div>
  );
}
