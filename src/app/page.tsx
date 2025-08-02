"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState('Philippines');
  const [showLocationModal, setShowLocationModal] = useState(false);

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

  const getFeaturedStoresForLocation = (location: string) => {
    const locationData = globalLocations[location as keyof typeof globalLocations];
    
    return [
      {
        id: 1,
        name: location === 'Philippines' ? "Aling Maria's Sari-Sari Store" : "Maria's Filipino Store",
        location: locationData?.cities[0] || "Quezon City",
        country: location,
        image: "🏪"
      },
      {
        id: 2,
        name: location === 'Philippines' ? "Kuya Juan's Neighborhood Store" : "Juan's Filipino Market",
        location: locationData?.cities[1] || "Makati",
        country: location,
        image: "🛒"
      },
      {
        id: 3,
        name: location === 'Philippines' ? "Nanay's Corner Store" : "Nanay's Filipino Corner",
        location: locationData?.cities[2] || "Manila",
        country: location,
        image: "🏪"
      }
    ];
  };

  const featuredStores = getFeaturedStoresForLocation(currentLocation);

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
              <h1 className="text-2xl font-bold text-red-600">SariSari Store</h1>
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
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  <span className="mr-2">📍</span>
                  {currentLocation}
                </div>
                <button
                  onClick={() => setShowLocationModal(true)}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Change
                </button>
                <Link href="/login" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Filipino Community Marketplace
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connect with local sari-sari stores, discover authentic Filipino dishes, and build community in your neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/stores" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Sari-Sari Stores
            </Link>
            <Link href="/signup" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Join as Seller
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Discover Filipino Community
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sari-Sari Store */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <div className="text-red-600 text-6xl">🏪</div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Sari-Sari Stores</h4>
                <p className="text-gray-600 mb-4">Your neighborhood convenience stores with Filipino favorites and household essentials.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">📍 Local Communities</span>
                  <Link href="/stores" className="text-red-600 hover:text-red-700 font-medium">
                    Browse Stores →
                  </Link>
                </div>
              </div>
            </div>

            {/* Palengke */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-green-600 text-6xl">🥬</div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Palengke</h4>
                <p className="text-gray-600 mb-4">Local farmers' markets where fresh produce meets community. Buy directly from local farmers.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">📍 Weekly Markets</span>
                  <Link href="/palengke" className="text-red-600 hover:text-red-700 font-medium">
                    Find Markets →
                  </Link>
                </div>
              </div>
            </div>

            {/* Karenderia */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-orange-600 text-6xl">🍽️</div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Karenderia</h4>
                <p className="text-gray-600 mb-4">Home-cooked Filipino dishes in backyard pop-up restaurants. Experience authentic local cuisine.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">📍 Backyard Kitchens</span>
                  <Link href="/karenderia" className="text-red-600 hover:text-red-700 font-medium">
                    Find Karenderia →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Filipino Stores in {currentLocation}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStores.map((store) => (
              <div key={store.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <div className="text-red-600 text-6xl">{store.image}</div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{store.name}</h4>
                  <p className="text-gray-600 mb-4">Your neighborhood convenience store with Filipino snacks, drinks, and household essentials.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">📍 {store.location}, {store.country}</span>
                    <Link href={`/stores/${store.id}`} className="text-red-600 hover:text-red-700 font-medium">
                      Visit Store →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose SariSari Store?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-red-600 text-2xl">🏪</div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Authentic Filipino</h4>
              <p className="text-gray-600">Discover genuine Filipino products and dishes from local communities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-red-600 text-2xl">💬</div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Community First</h4>
              <p className="text-gray-600">Connect with neighbors and build lasting relationships in your barangay.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-red-600 text-2xl">💰</div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Support Local</h4>
              <p className="text-gray-600">Help Filipino small businesses thrive and grow together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filipino Community Stats */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Filipino Community Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Sari-Sari Stores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600">Palengke Markets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-gray-600">Karenderia Chefs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">5,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join the Filipino Community?</h3>
          <p className="text-xl mb-8">Connect with local sari-sari stores, palengke vendors, and karenderia chefs in your area.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Sign Up Now
            </Link>
            <Link href="/stores" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Explore Stores
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">SariSari Store</h4>
              <p className="text-gray-300">Connecting Filipino communities through local commerce.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">For Shoppers</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/stores" className="hover:text-white">Browse Sari-Sari Stores</Link></li>
                <li><Link href="/palengke" className="hover:text-white">Find Palengke Markets</Link></li>
                <li><Link href="/karenderia" className="hover:text-white">Discover Karenderia</Link></li>
                <li><Link href="/tambayan" className="hover:text-white">Join Community</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">For Sellers</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/signup" className="hover:text-white">Create Store</Link></li>
                <li><Link href="/palengke/sell" className="hover:text-white">Join Palengke</Link></li>
                <li><Link href="/karenderia/host" className="hover:text-white">Host Karenderia</Link></li>
                <li><Link href="/support" className="hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 SariSari Store. Connecting Filipino communities worldwide.</p>
          </div>
        </div>
      </footer>

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
