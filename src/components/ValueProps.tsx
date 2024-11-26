import React from 'react';
import { Shield, Package, Globe, Users } from 'lucide-react';

export default function ValueProps() {
  const values = [
    {
      icon: Shield,
      title: 'Empowerment & Safety',
      description: 'Travel safely with experienced female-led guides'
    },
    {
      icon: Package,
      title: 'All-Inclusive Packages',
      description: 'Hassle-free experiences with no hidden costs'
    },
    {
      icon: Globe,
      title: 'Local & Authentic',
      description: 'Immersive cultural experiences, from local flavors to responsible tourism'
    },
    {
      icon: Users,
      title: 'Small Groups',
      description: 'Intimate groups for personalized experiences'
    }
  ];

  return (
    <section className="py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <value.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}