import { useEffect, useState } from 'react';

export default function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(dateTime);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).format(dateTime);

  return (
    <div 
      className="text-sm text-gray-600 dark:text-gray-300"
      aria-live="polite"
      aria-label="Current date and time"
    >
      <div className="flex items-center space-x-2">
        <span className="hidden sm:inline">{formattedDate}</span>
        <span aria-hidden="true" className="hidden sm:inline">•</span>
        <span>{formattedTime}</span>
      </div>
    </div>
  );
}
