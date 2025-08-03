'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PalengkePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🥬' },
    { id: 'vegetables', name: 'Vegetables', icon: '🥬' },
    { id: 'fruits', name: 'Fruits', icon: '🍎' },
    { id: 'meat', name: 'Meat & Fish', icon: '🐟' },
    { id: 'dairy', name: 'Dairy & Eggs', icon: '🥚' },
    { id: 'grains', name: 'Grains & Rice', icon: '🌾' },
  ];

  const palengkeMarkets = [
    {
      id: 1,
      name: "Quezon City Palengke",
      location: "Quezon City",
      schedule: "Every Saturday & Sunday",
      time: "6:00 AM - 2:00 PM",
      vendors: 45,
      rating: 4.8,
      image: "🥬"
    },
    {
      id: 2,
      name: "Makati Farmers Market",
      location: "Makati City",
      schedule: "Every Friday & Saturday",
      time: "5:00 AM - 1:00 PM",
      vendors: 32,
      rating: 4.9,
      image: "🍎"
    },
    {
      id: 3,
      name: "Taguig Community Market",
      location: "Taguig City",
      schedule: "Every Sunday",
      time: "7:00 AM - 3:00 PM",
      vendors: 28,
      rating: 4.7,
      image: "🐟"
    }
  ];

  const vendors = [
    {
      id: 1,
      name: "Kuya Juan's Farm",
      category: "vegetables",
      products: ["Kangkong", "Pechay", "Ampalaya", "Okra"],
      location: "Quezon City Palengke",
      rating: 4.9,
      price: "₱50-150",
      image: "🥬"
    },
    {
      id: 2,
      name: "Aling Maria's Fruits",
      category: "fruits",
      products: ["Mangoes", "Bananas", "Pineapples", "Papayas"],
      location: "Makati Farmers Market",
      rating: 4.8,
      price: "₱80-200",
      image: "🍎"
    },
    {
      id: 3,
      name: "Tatay Pedro Fish",
      category: "meat",
      products: ["Bangus", "Tilapia", "Galunggong", "Tuna"],
      location: "Taguig Community Market",
      rating: 4.7,
      price: "₱120-300",
      image: "🐟"
    },
    {
      id: 4,
      name: "Nanay's Eggs & Dairy",
      category: "dairy",
      products: ["Fresh Eggs", "Carabao Milk", "Kesong Puti"],
      location: "Quezon City Palengke",
      rating: 4.9,
      price: "₱60-180",
      image: "🥚"
    },
    {
      id: 5,
      name: "Kuya Boy's Rice",
      category: "grains",
      products: ["Jasmine Rice", "Brown Rice", "Red Rice", "Quinoa"],
      location: "Makati Farmers Market",
      rating: 4.8,
      price: "₱45-120",
      image: "🌾"
    }
  ];

  const filteredVendors = selectedCategory === 'all' 
    ? vendors 
    : vendors.filter(vendor => vendor.category === selectedCategory);

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
              <Link href="/palengke" className="text-red-600 font-medium">
                Palengke
              </Link>
              <Link href="/karenderia" className="text-gray-700 hover:text-red-600 transition-colors">
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
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Palengke Markets
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Fresh produce, local farmers, and authentic Filipino community markets. Buy directly from local farmers and support Filipino agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/palengke/markets" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Find Markets
            </Link>
            <Link href="/palengke/sell" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Sell Your Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Markets */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Palengke Markets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {palengkeMarkets.map((market) => (
              <div key={market.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-green-600 text-6xl">{market.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{market.name}</h3>
                  <p className="text-gray-600 mb-4">{market.location}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>📅 {market.schedule}</div>
                    <div>⏰ {market.time}</div>
                    <div>👥 {market.vendors} vendors</div>
                    <div className="flex items-center">
                      <span className="text-yellow-500">⭐</span>
                      <span className="ml-1">{market.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href={`/palengke/market/${market.id}`} className="text-green-600 hover:text-green-700 font-medium">
                      Visit Market →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Vendors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVendors.map((vendor) => (
              <div key={vendor.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{vendor.image}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{vendor.name}</h3>
                    <p className="text-sm text-gray-600">{vendor.location}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Products:</p>
                  <div className="flex flex-wrap gap-1">
                    {vendor.products.map((product, index) => (
                      <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm text-gray-600 ml-1">{vendor.rating}</span>
                  </div>
                  <div className="text-sm font-medium text-green-600">{vendor.price}</div>
                </div>
                <div className="mt-4">
                  <Link href={`/palengke/vendor/${vendor.id}`} className="text-green-600 hover:text-green-700 font-medium text-sm">
                    View Products →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How Palengke Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-green-600 text-2xl">📍</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Markets</h3>
              <p className="text-gray-600">Discover local palengke markets in your area with fresh produce and local vendors.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-green-600 text-2xl">🛒</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Buy Fresh</h3>
              <p className="text-gray-600">Purchase directly from local farmers and get the freshest Filipino produce.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-green-600 text-2xl">🤝</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Local</h3>
              <p className="text-gray-600">Help Filipino farmers thrive and keep traditional palengke culture alive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Filipino Palengke?</h3>
          <p className="text-xl mb-8">Join the community and discover fresh, local produce from Filipino farmers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Join as Shopper
            </Link>
            <Link href="/palengke/sell" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors">
              Sell Your Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 