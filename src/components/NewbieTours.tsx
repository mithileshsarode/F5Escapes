import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function NewbieTours() {
  const tours = [
    {
      id: 1,
      name: "Coorg Weekend Getaway",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
      location: "Coorg, Karnataka",
      duration: "3 Days",
      startDate: "Apr 15, 2024",
      endDate: "Apr 17, 2024",
      cost: "₹24,999",
      seatsLeft: 3,
      description: "Perfect first trip with coffee plantations, waterfalls, and local cuisine"
    },
    {
      id: 2,
      name: "Mysore Heritage Tour",
      image: "https://images.unsplash.com/photo-1600689128266-16646e5378c0",
      location: "Mysore, Karnataka",
      duration: "2 Days",
      startDate: "Mar 23, 2024",
      endDate: "Mar 24, 2024",
      cost: "₹18,999",
      seatsLeft: 4,
      description: "Explore the royal city's palaces, markets, and cultural heritage"
    },
    {
      id: 3,
      name: "Pondicherry Beach Break",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
      location: "Pondicherry",
      duration: "3 Days",
      startDate: "May 5, 2024",
      endDate: "May 7, 2024",
      cost: "₹27,999",
      seatsLeft: 2,
      description: "French colonial charm meets Indian culture by the sea"
    }
  ];

  return (
    <section className="py-24 bg-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-50 text-primary-600 px-4 py-2 rounded-full mb-4">
            <Users className="h-5 w-5 mr-2" />
            <span className="font-medium">Perfect First Trips</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Travel Journey</h2>
          <p className="text-xl text-gray-600">Curated short trips perfect for first-time travelers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div 
              key={tour.id}
              className="group card hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {tour.seatsLeft <= 3 && (
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Only {tour.seatsLeft} seats left!
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center text-primary-600 text-sm font-medium">
                    <MapPin className="h-4 w-4 mr-1" />
                    {tour.location}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">{tour.name}</h3>
                
                <p className="text-gray-600 text-sm line-clamp-2">
                  {tour.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {tour.startDate}
                  </div>
                </div>

                <div className="pt-4 border-t flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {tour.cost}
                    </div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                  <button className="btn-primary py-2">
                    Book Now
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