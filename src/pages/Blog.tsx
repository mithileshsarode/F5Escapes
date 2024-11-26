import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "10 Safety Tips for Solo Women Travelers in India",
      excerpt: "Essential safety guidelines and practical advice for women planning to travel solo in India...",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
      author: "Malini Kumar",
      date: "Mar 15, 2024",
      category: "Travel Tips"
    },
    {
      id: 2,
      title: "Hidden Gems: Unexplored Places in Kerala",
      excerpt: "Discover secret spots and lesser-known destinations in God's own country...",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      author: "Priya Singh",
      date: "Mar 10, 2024",
      category: "Destinations"
    },
    {
      id: 3,
      title: "A Complete Guide to Ladakh's Monasteries",
      excerpt: "Exploring the spiritual and cultural heritage of Ladakh's ancient Buddhist monasteries...",
      image: "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1",
      author: "Sarah Thomas",
      date: "Mar 5, 2024",
      category: "Culture"
    }
  ];

  const categories = [
    "All Posts",
    "Travel Tips",
    "Destinations",
    "Culture",
    "Adventure",
    "Wellness"
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-mint py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Travel Stories & Tips</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover travel inspiration, practical tips, and stories from our community of women travelers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-500 whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group card hover:-translate-y-2">
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-primary-600">{post.category}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <button className="flex items-center text-primary-500 font-medium group-hover:text-primary-600">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}