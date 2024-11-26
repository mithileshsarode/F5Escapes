import React, { useState } from 'react';
import { X, ArrowRight, Gift } from 'lucide-react';

const announcements = [
  {
    id: 1,
    text: "Early Bird Offer: 20% off on Ladakh trips for June 2024",
    link: "#"
  },
  {
    id: 2,
    text: "New Kerala Wellness Retreat dates announced for March",
    link: "#"
  },
  {
    id: 3,
    text: "Solo traveler special: No single supplement for Spiti Valley",
    link: "#"
  }
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary-500 text-white py-3 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <Gift className="h-5 w-5 mr-3 animate-bounce" />
          <a 
            href={announcements[currentIndex].link}
            className="flex items-center group hover:underline"
          >
            <span className="text-sm font-medium">
              {announcements[currentIndex].text}
            </span>
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 hover:bg-primary-600 p-1 rounded-full transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}