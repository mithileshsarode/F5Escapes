import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function FeaturedTrips() {
  const trips = [
    {
      title: 'Luxury Retreat in Bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80',
      category: 'Luxury Getaway',
      duration: '8 Days',
      price: '$2,999',
      rating: 4.9
    },
    {
      title: 'Cultural Tour of Rajasthan',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80',
      category: 'Cultural Immersion',
      duration: '10 Days',
      price: '$1,999',
      rating: 4.8
    },
    {
      title: 'Adventure in Costa Rica',
      image: 'https://images.unsplash.com/photo-1596392301391-e8622b210bd4?auto=format&fit=crop&q=80',
      category: 'Adventure Escape',
      duration: '7 Days',
      price: '$2,499',
      rating: 4.9
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Trips</h2>
          <p className="text-xl text-gray-600">Curated experiences for every type of traveler</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div key={trip.title} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-purple-600">{trip.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-500">{trip.duration}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-600">{trip.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{trip.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">{trip.price}</span>
                  <button className="flex items-center text-purple-600 font-medium hover:text-purple-700">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}