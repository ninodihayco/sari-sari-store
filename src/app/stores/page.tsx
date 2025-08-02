'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StoresPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [currentLocation, setCurrentLocation] = useState('Philippines');
  const [showLocationModal, setShowLocationModal] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', icon: '🏪' },
    { id: 'convenience', name: 'Convenience Store', icon: '🏪' },
    { id: 'grocery', name: 'Grocery', icon: '🛒' },
    { id: 'snacks', name: 'Snacks & Drinks', icon: '🍿' },
    { id: 'household', name: 'Household Items', icon: '🧽' },
    { id: 'fresh', name: 'Fresh Produce', icon: '🥬' },
    { id: 'bakery', name: 'Bakery', icon: '🥖' },
    { id: 'pharmacy', name: 'Pharmacy', icon: '💊' }
  ];

  const globalLocations = {
    'Philippines': {
      cities: ['Quezon City', 'Makati', 'Manila', 'Taguig', 'Pasig', 'Marikina', 'Caloocan'],
      currency: '₱',
      language: 'Filipino/English'
    },
    'United States': {
      cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio'],
      currency: '$',
      language: 'English'
    },
    'Canada': {
      cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg'],
      currency: 'C$',
      language: 'English/French'
    },
    'United Kingdom': {
      cities: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Leeds', 'Sheffield'],
      currency: '£',
      language: 'English'
    },
    'Australia': {
      cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle'],
      currency: 'A$',
      language: 'English'
    },
    'Singapore': {
      cities: ['Singapore City', 'Jurong West', 'Woodlands', 'Tampines', 'Sengkang', 'Hougang', 'Yishun'],
      currency: 'S$',
      language: 'English/Mandarin/Malay/Tamil'
    },
    'Japan': {
      cities: ['Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Kobe', 'Kyoto'],
      currency: '¥',
      language: 'Japanese'
    },
    'Germany': {
      cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf'],
      currency: '€',
      language: 'German'
    },
    'France': {
      cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg'],
      currency: '€',
      language: 'French'
    },
    'Brazil': {
      cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus'],
      currency: 'R$',
      language: 'Portuguese'
    },
    'Mexico': {
      cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'Toluca', 'León'],
      currency: 'MXN$',
      language: 'Spanish'
    }
  };

  // Sample stores that adapt to location
  const getStoresForLocation = (location: string) => {
    const locationData = globalLocations[location as keyof typeof globalLocations];
    const currency = locationData?.currency || '₱';
    
    const baseStores = [
      {
        id: 1,
        name: location === 'Philippines' ? "Aling Maria's Sari-Sari Store" : "Maria's Filipino Store",
        owner: "Maria Santos",
        location: locationData?.cities[0] || "Quezon City",
        address: `${locationData?.cities[0] || "Quezon City"}, ${location}`,
        category: "convenience",
        rating: 4.8,
        reviews: 156,
        distance: "0.5 km",
        openStatus: "Open",
        hours: "6:00 AM - 10:00 PM",
        specialties: ["Filipino snacks", "Soft drinks", "Household essentials"],
        image: "🏪",
        featured: true
      },
      {
        id: 2,
        name: location === 'Philippines' ? "Kuya Juan's Neighborhood Store" : "Juan's Filipino Market",
        owner: "Juan Dela Cruz",
        location: locationData?.cities[1] || "Makati",
        address: `${locationData?.cities[1] || "Makati"}, ${location}`,
        category: "grocery",
        rating: 4.9,
        reviews: 203,
        distance: "1.2 km",
        openStatus: "Open",
        hours: "5:00 AM - 11:00 PM",
        specialties: ["Fresh vegetables", "Rice", "Cooking ingredients"],
        image: "🛒",
        featured: true
      },
      {
        id: 3,
        name: location === 'Philippines' ? "Nanay's Corner Store" : "Nanay's Filipino Corner",
        owner: "Nanay Lita Reyes",
        location: locationData?.cities[2] || "Manila",
        address: `${locationData?.cities[2] || "Manila"}, ${location}`,
        category: "convenience",
        rating: 4.7,
        reviews: 89,
        distance: "0.8 km",
        openStatus: "Open",
        hours: "7:00 AM - 9:00 PM",
        specialties: ["School supplies", "Snacks", "Beverages"],
        image: "🏪",
        featured: false
      },
      {
        id: 4,
        name: location === 'Philippines' ? "Tatay's Fresh Market" : "Tatay's Filipino Fresh Market",
        owner: "Tatay Pedro Santos",
        location: locationData?.cities[3] || "Taguig",
        address: `${locationData?.cities[3] || "Taguig"}, ${location}`,
        category: "fresh",
        rating: 4.6,
        reviews: 134,
        distance: "2.1 km",
        openStatus: "Open",
        hours: "5:00 AM - 8:00 PM",
        specialties: ["Fresh fruits", "Vegetables", "Local produce"],
        image: "🥬",
        featured: false
      },
      {
        id: 5,
        name: location === 'Philippines' ? "Ate Grace's Bakery Store" : "Grace's Filipino Bakery",
        owner: "Grace Mendoza",
        location: locationData?.cities[4] || "Pasig",
        address: `${locationData?.cities[4] || "Pasig"}, ${location}`,
        category: "bakery",
        rating: 4.9,
        reviews: 178,
        distance: "1.5 km",
        openStatus: "Open",
        hours: "6:00 AM - 7:00 PM",
        specialties: ["Fresh bread", "Pastries", "Cakes"],
        image: "🥖",
        featured: true
      },
      {
        id: 6,
        name: location === 'Philippines' ? "Kuya Boy's Snack Corner" : "Boy's Filipino Snack Corner",
        owner: "Boy Santos",
        location: locationData?.cities[5] || "Marikina",
        address: `${locationData?.cities[5] || "Marikina"}, ${location}`,
        category: "snacks",
        rating: 4.5,
        reviews: 67,
        distance: "3.2 km",
        openStatus: "Closed",
        hours: "8:00 AM - 6:00 PM",
        specialties: ["Filipino snacks", "Soft drinks", "Candies"],
        image: "🍿",
        featured: false
      },
      {
        id: 7,
        name: location === 'Philippines' ? "Aling Nena's Household Store" : "Nena's Filipino Household Store",
        owner: "Nena Cruz",
        location: locationData?.cities[6] || "Caloocan",
        address: `${locationData?.cities[6] || "Caloocan"}, ${location}`,
        category: "household",
        rating: 4.4,
        reviews: 92,
        distance: "4.1 km",
        openStatus: "Open",
        hours: "8:00 AM - 8:00 PM",
        specialties: ["Cleaning supplies", "Toiletries", "Kitchen items"],
        image: "🧽",
        featured: false
      },
      {
        id: 8,
        name: location === 'Philippines' ? "Doc Tony's Pharmacy Store" : "Tony's Filipino Pharmacy",
        owner: "Tony Reyes",
        location: locationData?.cities[0] || "Quezon City",
        address: `${locationData?.cities[0] || "Quezon City"}, ${location}`,
        category: "pharmacy",
        rating: 4.8,
        reviews: 145,
        distance: "0.9 km",
        openStatus: "Open",
        hours: "7:00 AM - 9:00 PM",
        specialties: ["Medicines", "Vitamins", "First aid"],
        image: "💊",
        featured: false
      }
    ];

    return baseStores;
  };

  const stores = getStoresForLocation(currentLocation);
  const locationData = globalLocations[currentLocation as keyof typeof globalLocations];
  const locations = locationData ? ['all', ...locationData.cities] : ['all'];

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCategory = selectedCategory === 'all' || store.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || store.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const sortedStores = [...filteredStores].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'distance':
        return parseFloat(a.distance) - parseFloat(b.distance);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Detect user's location on component mount
  useEffect(() => {
    const savedLocation = localStorage.getItem('sariSariLocation');
    if (savedLocation && globalLocations[savedLocation as keyof typeof globalLocations]) {
      setCurrentLocation(savedLocation);
    }
  }, []);

  const handleLocationChange = (newLocation: string) => {
    setCurrentLocation(newLocation);
    localStorage.setItem('sariSariLocation', newLocation);
    setShowLocationModal(false);
  };

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
              <Link href="/stores" className="text-red-600 font-medium">
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
        {/* Location Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Sari-Sari Stores</h1>
              <p className="text-gray-600">Discover Filipino convenience stores in your area</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Current Location</div>
                <div className="font-medium text-gray-900">{currentLocation}</div>
              </div>
              <button
                onClick={() => setShowLocationModal(true)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Change Location
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Stores</label>
              <input
                type="text"
                placeholder="Search by store name, owner, or products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Options */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              >
                <option value="rating">Highest Rating</option>
                <option value="distance">Nearest</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
            <div className="text-sm text-gray-600">
              {sortedStores.length} stores found in {currentLocation}
            </div>
          </div>
        </div>

        {/* Featured Stores */}
        {sortedStores.filter(store => store.featured).length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Stores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedStores.filter(store => store.featured).map((store) => (
                <div key={store.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-red-500">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="text-3xl mr-3">{store.image}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{store.name}</h3>
                          <p className="text-sm text-gray-600">by {store.owner}</p>
                        </div>
                      </div>
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                        Featured
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">📍</span>
                        {store.address}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">⏰</span>
                        {store.hours}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">📊</span>
                        ⭐ {store.rating} ({store.reviews} reviews)
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">📏</span>
                        {store.distance} away
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {store.specialties.map((specialty, index) => (
                          <span key={index} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`text-sm px-2 py-1 rounded ${
                        store.openStatus === 'Open' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {store.openStatus}
                      </span>
                      <Link 
                        href={`/stores/${store.id}`}
                        className="text-red-600 hover:text-red-700 font-medium text-sm"
                      >
                        View Store →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Stores */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Stores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedStores.map((store) => (
              <div key={store.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-3xl mr-3">{store.image}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{store.name}</h3>
                        <p className="text-sm text-gray-600">by {store.owner}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">📍</span>
                      {store.address}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">⏰</span>
                      {store.hours}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">📊</span>
                      ⭐ {store.rating} ({store.reviews} reviews)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">📏</span>
                      {store.distance} away
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {store.specialties.map((specialty, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`text-sm px-2 py-1 rounded ${
                      store.openStatus === 'Open' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {store.openStatus}
                    </span>
                    <Link 
                      href={`/stores/${store.id}`}
                      className="text-red-600 hover:text-red-700 font-medium text-sm"
                    >
                      View Store →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Results */}
        {sortedStores.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏪</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No stores found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or location</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLocation('all');
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Location Selection Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Your Location</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {Object.keys(globalLocations).map((country) => (
                <button
                  key={country}
                  onClick={() => handleLocationChange(country)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    currentLocation === country
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{country}</div>
                  <div className="text-sm text-gray-600">
                    {globalLocations[country as keyof typeof globalLocations].cities.slice(0, 3).join(', ')}...
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowLocationModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 