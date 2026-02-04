/**
 * Promotion utilities for Jimmys Restaurant
 */

/**
 * Check if test mode is enabled
 * Test mode can be enabled via:
 * - URL parameter: ?testMonday=true
 * - localStorage: localStorage.setItem('testMondayPromo', 'true')
 */
function isTestModeEnabled(): boolean {
  if (typeof window === 'undefined') return false;

  // Check URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('testMonday') === 'true') {
    return true;
  }

  // Check localStorage
  try {
    const testMode = localStorage.getItem('testMondayPromo');
    return testMode === 'true';
  } catch {
    return false;
  }
}

/**
 * Check if the Monday Pizza Promotion is currently active
 *
 * Rules:
 * - Only on Mondays
 * - Only during business hours: 1:00 PM - 10:00 PM
 * - Uses Mazatlán timezone (America/Mazatlan)
 *
 * TEST MODE: Add ?testMonday=true to URL or set localStorage.setItem('testMondayPromo', 'true')
 *
 * @returns true if promotion is active, false otherwise
 */
export function isMondayPromoActive(): boolean {
  // Check if test mode is enabled
  if (isTestModeEnabled()) {
    return true;
  }

  try {
    // Get current date/time in Mazatlán timezone
    const mazatlanTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/Mazatlan',
      weekday: 'long',
      hour: 'numeric',
      hour12: false,
    });

    // Extract day and hour
    const [dayPart] = mazatlanTime.split(', ');
    const hourMatch = mazatlanTime.match(/(\d+):/);
    const currentHour = hourMatch ? parseInt(hourMatch[1], 10) : 0;

    // Check if it's Monday
    const isMonday = dayPart === 'Monday';

    // Check if within business hours (1 PM = 13:00 to 10 PM = 22:00)
    // Note: 22:00 means up to 22:59:59, so we check hour < 23
    const isDuringBusinessHours = currentHour >= 13 && currentHour < 23;

    return isMonday && isDuringBusinessHours;
  } catch (error) {
    // If timezone detection fails, default to false (don't show promo)
    console.error('Error checking Monday promo status:', error);
    return false;
  }
}

/**
 * Get detailed information about Monday promotion status
 * Useful for debugging and UI messaging
 */
export function getMondayPromoStatus(): {
  isActive: boolean;
  isMonday: boolean;
  isDuringBusinessHours: boolean;
  currentDay: string;
  currentHour: number;
  isTestMode: boolean;
} {
  const isTestMode = isTestModeEnabled();

  try {
    const mazatlanTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/Mazatlan',
      weekday: 'long',
      hour: 'numeric',
      hour12: false,
    });

    const [dayPart] = mazatlanTime.split(', ');
    const hourMatch = mazatlanTime.match(/(\d+):/);
    const currentHour = hourMatch ? parseInt(hourMatch[1], 10) : 0;

    const isMonday = dayPart === 'Monday';
    const isDuringBusinessHours = currentHour >= 13 && currentHour < 23;

    return {
      isActive: isTestMode || (isMonday && isDuringBusinessHours),
      isMonday,
      isDuringBusinessHours,
      currentDay: dayPart,
      currentHour,
      isTestMode,
    };
  } catch (error) {
    return {
      isActive: isTestMode,
      isMonday: false,
      isDuringBusinessHours: false,
      currentDay: 'Unknown',
      currentHour: 0,
      isTestMode,
    };
  }
}

/**
 * Enable test mode for Monday promotion
 * Persists in localStorage
 */
export function enableTestMode(): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('testMondayPromo', 'true');
  }
}

/**
 * Disable test mode for Monday promotion
 */
export function disableTestMode(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('testMondayPromo');
  }
}
