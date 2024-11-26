import React from 'react';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GroupTours() {
  const tours = [
    {
      id: 1,
      name: "Ladakh Getaway",
      image: "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1",
      location: "Ladakh",
      duration: "7 Days",
      startDate: "Jun 15, 2024",
      price: "₹49,999",
      seatsLeft: 3,
      description: "Experience the breathtaking landscapes and rich culture of Ladakh"
    },
    {
      id: 2,
      name: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      location: "Kerala",
      duration: "5 Days",
      startDate: "Apr 20, 2024",
      price: "₹35,999",
      seatsLeft: 5,
      description: "Explore the serene backwaters and lush landscapes of Kerala"
    },
    {
      id: 3,
      name: "Spiti Valley Adventure",
      image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
      location: "Himachal Pradesh",
      duration: "9 Days",
      startDate: "May 10, 2024",
      price: "₹55,999",
      seatsLeft: 2,
      description: "Journey through the stunning landscapes of Spiti Valley"
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-mint py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Group Tours</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our carefully curated women-only group tours for safe, enriching, and unforgettable travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="group card hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-2xl">
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
                        {tour.price}
                      </div>
                      <div className="text-sm text-gray-500">per person</div>
                    </div>
                    <Link 
                      to={`/group-tours/${tour.id}`} 
                      className="btn-primary py-2 px-6"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}