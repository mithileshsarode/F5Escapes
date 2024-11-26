import React from 'react';
import { Heart, Users, Globe, Shield } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: "Malini Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Travel enthusiast with 15+ years of experience in curating women-focused tours"
    },
    {
      name: "Priya Singh",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Expert in creating safe and memorable travel experiences"
    },
    {
      name: "Sarah Thomas",
      role: "Lead Tour Guide",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      bio: "Certified adventure guide with passion for cultural experiences"
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-mint py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Founded in 2014, F5 Escapes has been at the forefront of women's travel in India, creating safe and enriching experiences that challenge stereotypes and empower women to explore freely.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Our Mission",
                description: "To make travel accessible and safe for all women"
              },
              {
                icon: Users,
                title: "Community",
                description: "Building a supportive network of women travelers"
              },
              {
                icon: Globe,
                title: "Sustainability",
                description: "Promoting responsible and eco-friendly tourism"
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "Ensuring secure and comfortable travel experiences"
              }
            ].map((value) => (
              <div key={value.title} className="text-center p-6 bg-white rounded-2xl shadow-soft">
                <value.icon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-2xl shadow-soft">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}