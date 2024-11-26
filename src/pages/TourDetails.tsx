import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Clock, Users, Shield, Utensils, Hotel, Camera, AlertCircle, Waves, Sun, Compass } from 'lucide-react';

export default function TourDetails() {
  const { id } = useParams();

  // In a real app, this would come from an API based on the ID
  const tour = {
    id: 1,
    name: "Lakshadweep Island Getaway",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a",
      "https://images.unsplash.com/photo-1530948990335-1eb93cbe6430"
    ],
    location: "Lakshadweep Islands",
    duration: "5 Days",
    startDate: "Nov 15, 2024",
    endDate: "Nov 19, 2024",
    price: "₹59,999",
    difficulty: "Easy",
    groupSize: "10-15",
    description: "Experience the pristine beauty of Lakshadweep Islands with a women-only group. Dive into crystal clear waters, explore vibrant coral reefs, and unwind on untouched beaches.",
    highlights: [
      "Stay in premium beach resorts with ocean views",
      "Snorkeling in crystal clear lagoons",
      "Glass bottom boat rides to view coral reefs",
      "Visit to traditional fishing villages",
      "Sunset sailing experience",
      "Beach yoga and meditation sessions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome",
        description: "Arrive at Agatti Airport. Transfer to resort by boat. Evening orientation and welcome dinner on the beach.",
        accommodation: "Premium Beach Resort"
      },
      {
        day: 2,
        title: "Island Exploration & Water Activities",
        description: "Morning snorkeling session. Post lunch glass bottom boat ride. Evening beach walk and cultural show.",
        accommodation: "Premium Beach Resort"
      },
      {
        day: 3,
        title: "Local Life & Leisure",
        description: "Visit to local village and interaction with community. Afternoon free for beach activities. Sunset sailing.",
        accommodation: "Premium Beach Resort"
      },
      {
        day: 4,
        title: "Adventure Day",
        description: "Full day of water sports including kayaking and stand-up paddling. Evening bonfire and stargazing.",
        accommodation: "Premium Beach Resort"
      },
      {
        day: 5,
        title: "Farewell",
        description: "Morning yoga on beach. Last-minute shopping. Departure to Agatti Airport.",
        accommodation: "Return Journey"
      }
    ],
    included: [
      "4 nights accommodation in premium beach resort",
      "All meals - breakfast, lunch, dinner",
      "All transfers by speed boat",
      "Professional women tour leader",
      "Snorkeling equipment and guidance",
      "All activities mentioned in itinerary",
      "All permits and entry fees"
    ],
    notIncluded: [
      "Flights to/from Agatti",
      "Personal expenses",
      "Travel insurance",
      "Additional activities not in itinerary",
      "Tips and gratuities"
    ],
    essentials: [
      "Light cotton clothes",
      "Sunscreen and hat",
      "Swimming costume",
      "Comfortable walking shoes",
      "Basic first aid kit",
      "Camera (waterproof recommended)"
    ]
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-white">
              <div className="flex items-center space-x-2 text-accent-400 mb-4">
                <Waves className="h-5 w-5" />
                <span className="text-lg font-medium">Island Getaway</span>
              </div>
              <h1 className="text-5xl font-bold mb-4">{tour.name}</h1>
              <div className="flex items-center space-x-6 text-white/90">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {tour.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {tour.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  {tour.groupSize} women
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Overview</h2>
              <p className="text-gray-600 mb-8">{tour.description}</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <Sun className="h-5 w-5 text-primary-500 mt-1 mr-3" />
                    <span className="text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Daily Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="card">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center font-bold mr-4">
                        {day.day}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{day.title}</h3>
                        <p className="text-gray-600 mb-3">{day.description}</p>
                        <div className="flex items-center text-sm text-primary-600">
                          <Hotel className="h-4 w-4 mr-2" />
                          {day.accommodation}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {tour.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Tour gallery ${index + 1}`}
                    className="rounded-2xl w-full h-64 object-cover"
                  />
                ))}
              </div>
            </section>

            {/* Essentials */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Pack</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {tour.essentials.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Compass className="h-5 w-5 text-primary-500" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <div className="card">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {tour.price}
                  <span className="text-base font-normal text-gray-600"> / person</span>
                </div>

                <div className="space-y-4 my-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">Tour Dates</div>
                      <div className="text-sm">{tour.startDate} - {tour.endDate}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">Group Size</div>
                      <div className="text-sm">{tour.groupSize} women</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <AlertCircle className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">Difficulty</div>
                      <div className="text-sm">{tour.difficulty}</div>
                    </div>
                  </div>
                </div>

                <button className="w-full btn-primary mb-4">
                  Book Now
                </button>
                <button className="w-full btn-secondary">
                  Ask a Question
                </button>
              </div>

              {/* Inclusions */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
                <div className="space-y-3">
                  {tour.included.map((item, index) => (
                    <div key={index} className="flex items-start text-gray-600">
                      <Shield className="h-5 w-5 text-primary-500 mt-1 mr-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Not Included</h3>
                <div className="space-y-3">
                  {tour.notIncluded.map((item, index) => (
                    <div key={index} className="flex items-start text-gray-600">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-1 mr-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}