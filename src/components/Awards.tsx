import React from 'react';
import { Award, Star, Trophy, Users } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      icon: Trophy,
      title: "Top Travel Company",
      organization: "Economic Times",
      year: "2019",
      description: "Featured among India's Top 10 Travel Companies"
    },
    {
      icon: Star,
      title: "Women Entrepreneur Award",
      organization: "FICCI",
      year: "2018",
      description: "Recognized for innovation in travel industry"
    },
    {
      icon: Award,
      title: "Tourism Award",
      organization: "Government of Karnataka",
      year: "2017",
      description: "Excellence in promoting responsible tourism"
    },
    {
      icon: Users,
      title: "Change Maker",
      organization: "Conde Nast Traveller",
      year: "2016",
      description: "Listed among top women-led travel initiatives"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600">Recognized for our commitment to women's travel and sustainable tourism</p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award) => (
            <div 
              key={award.title} 
              className="group card hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <award.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{award.title}</h3>
                <div className="text-sm text-primary-600 font-medium">
                  {award.organization} • {award.year}
                </div>
                <p className="text-gray-600">{award.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured In Section */}
        <div className="mt-20">
          <h3 className="text-center text-lg font-medium text-gray-600 mb-8">Featured In</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[
              "The Hindu",
              "Times of India",
              "Your Story",
              "The News Minute",
              "Deccan Herald"
            ].map((publication) => (
              <span 
                key={publication}
                className="text-xl font-serif text-gray-500"
              >
                {publication}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}