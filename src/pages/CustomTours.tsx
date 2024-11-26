import React from 'react';
import { MapPin, Calendar, Users, Sparkles } from 'lucide-react';

export default function CustomTours() {
  const experiences = [
    {
      id: 1,
      title: "Cultural Immersion",
      description: "Deep dive into local traditions, festivals, and authentic experiences",
      image: "https://images.unsplash.com/photo-1604873925605-c67c12715a19",
      activities: ["Local homestays", "Cooking classes", "Festival celebrations"]
    },
    {
      id: 2,
      title: "Adventure Expeditions",
      description: "Tailored adventures from moderate treks to challenging expeditions",
      image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833",
      activities: ["Trekking", "Camping", "Wildlife safaris"]
    },
    {
      id: 3,
      title: "Wellness Retreats",
      description: "Rejuvenating experiences combining yoga, meditation, and ayurveda",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
      activities: ["Yoga sessions", "Spa treatments", "Meditation"]
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-mint py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Custom Tours</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Design your perfect journey with our expert travel planners. We create personalized experiences that match your interests and preferences.
            </p>
            <button className="btn-primary mt-8">Start Planning</button>
          </div>
        </div>
      </section>

      {/* Experience Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="group card hover:-translate-y-2">
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-2xl">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{exp.title}</h3>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  {exp.activities.map((activity) => (
                    <div key={activity} className="flex items-center text-gray-600">
                      <Sparkles className="h-4 w-4 mr-2 text-primary-500" />
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Share Your Vision",
                description: "Tell us about your dream trip, preferences, and travel style"
              },
              {
                step: "2",
                title: "Get Expert Input",
                description: "Our travel experts craft a personalized itinerary"
              },
              {
                step: "3",
                title: "Refine Together",
                description: "We collaborate to perfect every detail of your journey"
              },
              {
                step: "4",
                title: "Travel Worry-Free",
                description: "Enjoy your custom trip with 24/7 on-ground support"
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}