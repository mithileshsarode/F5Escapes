import React from 'react';
import { ArrowRight, MapPin, Star, Users } from 'lucide-react';

export default function Hero() {
  const destinations = [
    {
      title: "Ladakh Getaway",
      image: "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1",
      rating: 4.9,
      location: "Ladakh, India",
      duration: "7 Days"
    },
    {
      title: "Kerala Experience",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      rating: 4.8,
      location: "Kerala, India",
      duration: "5 Days"
    },
    {
      title: "Spiti Valley Adventure",
      image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
      rating: 4.9,
      location: "Himachal Pradesh, India",
      duration: "9 Days"
    }
  ];

  return (
    <div className="min-h-screen bg-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 py-12">
          {/* Left Column - Hero Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center bg-primary-50 text-primary-600 px-4 py-2 rounded-full">
              <Users className="h-5 w-5 mr-2" />
              <span className="font-medium">India's First Women-Only Travel Company</span>
            </div>
            
            <h1 className="text-6xl font-bold text-primary-900 leading-tight">
              Travel India
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                Like Never Before
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg">
              Join our women-only tours for safe, authentic, and transformative travel experiences across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center group">
                Explore Tours
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Custom Trips
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "1000+", label: "Happy Travelers" },
                { number: "20+", label: "Destinations" },
                { number: "100%", label: "Women-Led" }
              ].map((stat) => (
                <div key={stat.label} className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl">
                  <div className="text-2xl font-bold text-primary-600">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Destination Cards */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              {destinations.map((dest, index) => (
                <div 
                  key={dest.title}
                  className={`group relative overflow-hidden rounded-2xl ${
                    index === 2 ? 'col-span-2' : ''
                  } transform hover:-translate-y-2 transition-all duration-300`}
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{dest.title}</h3>
                          <div className="flex items-center text-white/90">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{dest.location}</span>
                          </div>
                          <div className="text-white/80 text-sm mt-1">
                            {dest.duration}
                          </div>
                        </div>
                        <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Star className="h-4 w-4 text-accent-400 fill-current" />
                          <span className="ml-1 text-white">{dest.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}