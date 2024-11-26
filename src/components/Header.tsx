import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, User, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Group Tours', href: '/group-tours' },
    { name: 'Custom Tours', href: '/custom-tours' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-soft">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-3xl font-bold text-primary-500">
                F5 Escapes
              </Link>
            </div>
            <div className="hidden md:ml-12 md:flex md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.href ? 'text-primary-500' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block btn-primary">
              Plan Your Trip
            </button>
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-primary-500 transition-colors" />
              <User className="h-5 w-5 text-gray-600 cursor-pointer hover:text-primary-500 transition-colors" />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600 hover:text-primary-500 transition-colors" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600 hover:text-primary-500 transition-colors" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-2xl shadow-soft">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-colors ${
                  location.pathname === item.href ? 'text-primary-500 bg-primary-50' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-2 btn-primary">
              Plan Your Trip
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}