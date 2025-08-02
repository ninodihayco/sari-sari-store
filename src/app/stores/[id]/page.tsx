'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StoreDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('products');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock store data - in real app, fetch by ID
  const store = {
    id: parseInt(params.id),
    name: "Aling Maria's Sari-Sari Store",
    owner: "Maria Santos",
    location: "Quezon City",
    address: "Barangay Batasan Hills, Quezon City",
    category: "convenience",
    rating: 4.8,
    reviews: 156,
    distance: "0.5 km",
    openStatus: "Open",
    hours: "6:00 AM - 10:00 PM",
    phone: "+63 912 345 6789",
    specialties: ["Filipino snacks", "Soft drinks", "Household essentials"],
    image: "🏪",
    featured: true,
    description: "Your neighborhood sari-sari store with authentic Filipino products and friendly service. We've been serving the community for over 10 years with fresh groceries, household items, and local favorites."
  };

  const productCategories = [
    { id: 'all', name: 'All Products', icon: '📦' },
    { id: 'snacks', name: 'Snacks', icon: '🍿' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' },
    { id: 'household', name: 'Household', icon: '🧽' },
    { id: 'groceries', name: 'Groceries', icon: '🛒' },
    { id: 'fresh', name: 'Fresh Items', icon: '🥬' }
  ];

  const products = [
    {
      id: 1,
      name: "Pancit Canton",
      category: "snacks",
      price: "₱8.50",
      originalPrice: "₱10.00",
      stock: 25,
      image: "🍜",
      description: "Instant pancit canton noodles",
      featured: true
    },
    {
      id: 2,
      name: "Coca-Cola 1.5L",
      category: "drinks",
      price: "₱65.00",
      originalPrice: "₱75.00",
      stock: 12,
      image: "🥤",
      description: "Refreshing Coca-Cola soft drink",
      featured: false
    },
    {
      id: 3,
      name: "Joy Dishwashing Liquid",
      category: "household",
      price: "₱45.00",
      originalPrice: "₱50.00",
      stock: 8,
      image: "🧽",
      description: "Effective dishwashing liquid",
      featured: false
    },
    {
      id: 4,
      name: "Mama Sita's Sinigang Mix",
      category: "groceries",
      price: "₱12.00",
      originalPrice: "₱15.00",
      stock: 20,
      image: "🥘",
      description: "Authentic Filipino sinigang mix",
      featured: true
    },
    {
      id: 5,
      name: "Fresh Tomatoes",
      category: "fresh",
      price: "₱80.00/kg",
      originalPrice: "₱100.00/kg",
      stock: 5,
      image: "🍅",
      description: "Fresh local tomatoes",
      featured: false
    },
    {
      id: 6,
      name: "Lucky Me Pancit Canton",
      category: "snacks",
      price: "₱7.50",
      originalPrice: "₱9.00",
      stock: 30,
      image: "🍜",
      description: "Classic Lucky Me pancit canton",
      featured: false
    }
  ];

  const reviews = [
    {
      id: 1,
      customer: "Juan Dela Cruz",
      rating: 5,
      date: "2024-02-08",
      comment: "Best sari-sari store in the neighborhood! Aling Maria is very friendly and always has fresh products."
    },
    {
      id: 2,
      customer: "Maria Garcia",
      rating: 4,
      date: "2024-02-07",
      comment: "Convenient location and good prices. Love their Filipino snacks selection."
    },
    {
      id: 3,
      customer: "Pedro Santos",
      rating: 5,
      date: "2024-02-06",
      comment: "Very clean store and fresh products. Highly recommended!"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Store Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="text-6xl mr-6">{store.image}</div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{store.name}</h1>
                <p className="text-gray-600 mb-2">by {store.owner}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>📍 {store.address}</span>
                  <span>📞 {store.phone}</span>
                  <span>📏 {store.distance} away</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 mr-1">⭐</span>
                <span className="font-semibold">{store.rating}</span>
                <span className="text-gray-600 ml-1">({store.reviews} reviews)</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                store.openStatus === 'Open' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {store.openStatus}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
              <p className="text-gray-600">{store.hours}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Specialties</h3>
              <div className="flex flex-wrap gap-1">
                {store.specialties.map((specialty, index) => (
                  <span key={index} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Actions</h3>
              <div className="flex space-x-2">
                <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700">
                  📞 Call
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                  📍 Directions
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                  ❤️ Favorite
                </button>
              </div>
            </div>
          </div>

          <p className="text-gray-700">{store.description}</p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {['products', 'reviews', 'about'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow">
          {activeTab === 'products' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Products</h2>
                <div className="flex items-center space-x-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  >
                    {productCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <div className="text-3xl mr-3">{product.image}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </div>
                      </div>
                      {product.featured && (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-lg font-bold text-red-600">{product.price}</span>
                        {product.originalPrice !== product.price && (
                          <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-sm text-gray-600">Stock: {product.stock}</span>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded text-sm hover:bg-red-700">
                        Add to Cart
                      </button>
                      <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded text-sm hover:bg-gray-700">
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Customer Reviews</h2>
                <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700">
                  Write Review
                </button>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{review.customer}</h3>
                        <p className="text-sm text-gray-600">{review.date}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">About {store.name}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Store Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Owner</p>
                      <p className="font-medium">{store.owner}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium">{store.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Address</p>
                      <p className="font-medium">{store.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">{store.phone}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Store Description</h3>
                  <p className="text-gray-700">{store.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {store.specialties.map((specialty, index) => (
                      <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Store Hours</h3>
                  <p className="text-gray-700">{store.hours}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 