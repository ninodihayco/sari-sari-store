'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function KarenderiaPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Dishes', icon: '🍽️' },
    { id: 'breakfast', name: 'Breakfast', icon: '🍳' },
    { id: 'lunch', name: 'Lunch', icon: '🍚' },
    { id: 'dinner', name: 'Dinner', icon: '🥘' },
    { id: 'snacks', name: 'Snacks', icon: '🍢' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
  ];

  const karenderiaChefs = [
    {
      id: 1,
      name: "Nanay's Karenderia",
      chef: "Nanay Maria Santos",
      location: "Taguig City",
      schedule: "Mon-Sat",
      time: "6:00 AM - 8:00 PM",
      rating: 4.9,
      price: "₱50-150",
      image: "🍽️",
      specialties: ["Adobo", "Sinigang", "Kare-kare"],
      category: "lunch"
    },
    {
      id: 2,
      name: "Tatay's Backyard Kitchen",
      chef: "Tatay Juan Cruz",
      location: "Quezon City",
      schedule: "Wed-Sun",
      time: "11:00 AM - 9:00 PM",
      rating: 4.8,
      price: "₱80-200",
      image: "🍚",
      specialties: ["Pancit", "Lumpia", "Lechon Kawali"],
      category: "dinner"
    },
    {
      id: 3,
      name: "Aling Lita's Breakfast Corner",
      chef: "Aling Lita Reyes",
      location: "Makati City",
      schedule: "Daily",
      time: "5:00 AM - 11:00 AM",
      rating: 4.7,
      price: "₱30-100",
      image: "🍳",
      specialties: ["Tapsilog", "Longsilog", "Tocino"],
      category: "breakfast"
    },
    {
      id: 4,
      name: "Kuya Boy's Grill House",
      chef: "Kuya Boy Santos",
      location: "Pasig City",
      schedule: "Fri-Sun",
      time: "5:00 PM - 11:00 PM",
      rating: 4.9,
      price: "₱100-300",
      image: "🍢",
      specialties: ["Inihaw na Liempo", "Chicken BBQ", "Isaw"],
      category: "dinner"
    },
    {
      id: 5,
      name: "Ate Grace's Dessert Corner",
      chef: "Ate Grace Mendoza",
      location: "Manila City",
      schedule: "Wed-Sun",
      time: "2:00 PM - 8:00 PM",
      rating: 4.8,
      price: "₱40-120",
      image: "🍰",
      specialties: ["Halo-halo", "Leche Flan", "Bibingka"],
      category: "desserts"
    }
  ];

  const filteredChefs = selectedCategory === 'all' 
    ? karenderiaChefs 
    : karenderiaChefs.filter(chef => chef.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-red-600">SariSari Store</Link>
            </div>
            <nav className="flex space-x-8">
              <Link href="/stores" className="text-gray-700 hover:text-red-600 transition-colors">
                Stores
              </Link>
              <Link href="/palengke" className="text-gray-700 hover:text-red-600 transition-colors">
                Palengke
              </Link>
              <Link href="/karenderia" className="text-red-600 font-medium">
                Karenderia
              </Link>
              <Link href="/tambayan" className="text-gray-700 hover:text-red-600 transition-colors">
                Tambayan
              </Link>
              <Link href="/login" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Karenderia
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Authentic Filipino home-cooked meals in backyard pop-up restaurants. Experience the warmth of Filipino hospitality and traditional cuisine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/karenderia/browse" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Find Karenderia
            </Link>
            <Link href="/karenderia/host" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Host Your Karenderia
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Karenderia */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Karenderia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {karenderiaChefs.slice(0, 3).map((chef) => (
              <div key={chef.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <div className="text-orange-600 text-6xl">{chef.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{chef.name}</h3>
                  <p className="text-gray-600 mb-2">by {chef.chef}</p>
                  <p className="text-gray-600 mb-4">{chef.location}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>📅 {chef.schedule}</div>
                    <div>⏰ {chef.time}</div>
                    <div className="flex items-center">
                      <span className="text-yellow-500">⭐</span>
                      <span className="ml-1">{chef.rating}</span>
                    </div>
                    <div className="font-medium text-orange-600">{chef.price}</div>
                  </div>
                  <div className="mt-4">
                    <Link href={`/karenderia/${chef.id}`} className="text-orange-600 hover:text-orange-700 font-medium">
                      View Menu →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Meal Time
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Chefs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChefs.map((chef) => (
              <div key={chef.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{chef.image}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{chef.name}</h3>
                    <p className="text-sm text-gray-600">by {chef.chef}</p>
                    <p className="text-sm text-gray-600">{chef.location}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {chef.specialties.map((dish, index) => (
                      <span key={index} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm text-gray-600 ml-1">{chef.rating}</span>
                  </div>
                  <div className="text-sm font-medium text-orange-600">{chef.price}</div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <div>📅 {chef.schedule}</div>
                  <div>⏰ {chef.time}</div>
                </div>
                <div className="mt-4">
                  <Link href={`/karenderia/${chef.id}`} className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                    View Menu →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Filipino Dishes */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Popular Filipino Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🍖</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adobo</h3>
              <p className="text-sm text-gray-600">Classic Filipino dish with meat marinated in vinegar and soy sauce</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🥘</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sinigang</h3>
              <p className="text-sm text-gray-600">Sour soup with meat and vegetables, perfect comfort food</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🍚</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pancit</h3>
              <p className="text-sm text-gray-600">Stir-fried noodles with vegetables and meat</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🍳</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tapsilog</h3>
              <p className="text-sm text-gray-600">Breakfast favorite with tapa, sinangag, and itlog</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How Karenderia Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-orange-600 text-2xl">📍</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Karenderia</h3>
              <p className="text-gray-600">Discover local backyard restaurants and home-cooked Filipino meals in your area.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-orange-600 text-2xl">🍽️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Order Authentic</h3>
              <p className="text-gray-600">Order traditional Filipino dishes cooked with love and family recipes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-orange-600 text-2xl">🤝</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Local</h3>
              <p className="text-gray-600">Help Filipino home chefs thrive and keep traditional cooking alive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Filipino Karenderia?</h3>
          <p className="text-xl mb-8">Join the community and discover authentic Filipino home-cooked meals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Join as Customer
            </Link>
            <Link href="/karenderia/host" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-900 transition-colors">
              Host Your Karenderia
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 