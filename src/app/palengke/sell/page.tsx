'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PalengkeSellPage() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    category: '',
    products: '',
    experience: '',
    businessLicense: '',
    taxId: ''
  });

  const palengkeLocations = [
    {
      id: 1,
      name: "Quezon City Memorial Circle",
      address: "Elliptical Road, Quezon City",
      capacity: 50,
      availableSpots: 18,
      schedule: "Every Saturday & Sunday",
      time: "6:00 AM - 2:00 PM",
      fee: "₱500/weekend"
    },
    {
      id: 2,
      name: "Makati City Hall Plaza",
      address: "J.P. Rizal Avenue, Makati City",
      capacity: 30,
      availableSpots: 5,
      schedule: "Every Friday & Saturday",
      time: "5:00 AM - 1:00 PM",
      fee: "₱400/weekend"
    },
    {
      id: 3,
      name: "Taguig City Market",
      address: "Market Street, Taguig City",
      capacity: 40,
      availableSpots: 40,
      schedule: "Every Sunday",
      time: "7:00 AM - 3:00 PM",
      fee: "₱300/weekend"
    }
  ];

  const subscriptionPlans = [
    {
      id: 'basic',
      name: 'Basic Seller',
      price: '₱1,500/month',
      features: [
        'Access to 1 palengke location',
        'Basic seller profile',
        'Standard support',
        'Monthly reports'
      ],
      color: 'blue'
    },
    {
      id: 'premium',
      name: 'Premium Seller',
      price: '₱3,000/month',
      features: [
        'Access to all palengke locations',
        'Featured seller profile',
        'Priority support',
        'Advanced analytics',
        'Marketing assistance',
        'Exclusive events'
      ],
      color: 'purple'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Seller',
      price: '₱5,000/month',
      features: [
        'All premium features',
        'Dedicated account manager',
        'Custom branding',
        'Bulk order management',
        'API access',
        'White-label solutions'
      ],
      color: 'green'
    }
  ];

  const productCategories = [
    { id: 'vegetables', name: 'Vegetables', icon: '🥬' },
    { id: 'fruits', name: 'Fruits', icon: '🍎' },
    { id: 'meat', name: 'Meat & Fish', icon: '🐟' },
    { id: 'dairy', name: 'Dairy & Eggs', icon: '🥚' },
    { id: 'grains', name: 'Grains & Rice', icon: '🌾' },
    { id: 'snacks', name: 'Snacks & Drinks', icon: '🍢' },
    { id: 'handicrafts', name: 'Handicrafts', icon: '🎨' },
    { id: 'other', name: 'Other', icon: '📦' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', { selectedLocation, selectedPlan, formData });
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
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sell at Palengke</h1>
          <p className="text-gray-600">Join Filipino farmers and vendors in local palengke markets</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Seller Application</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Information */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Business Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                        placeholder="e.g., Kuya Juan's Farm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Owner Name *
                      </label>
                      <input
                        type="text"
                        name="ownerName"
                        required
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                        placeholder="e.g., Juan Dela Cruz"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                        placeholder="+63 912 345 6789"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Category *
                  </label>
                  <select
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select a category</option>
                    {productCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Products Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Products You'll Sell *
                  </label>
                  <textarea
                    name="products"
                    required
                    value={formData.products}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Describe the products you plan to sell (e.g., Fresh vegetables, organic fruits, homemade snacks)"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Farming/Business Experience
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Tell us about your farming or business experience"
                  />
                </div>

                {/* Business Documents */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Business Documents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business License Number
                      </label>
                      <input
                        type="text"
                        name="businessLicense"
                        value={formData.businessLicense}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                        placeholder="Optional"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tax ID Number
                      </label>
                      <input
                        type="text"
                        name="taxId"
                        value={formData.taxId}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Location Selection */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Choose Palengke Location</h3>
              <div className="space-y-4">
                {palengkeLocations.map((location) => (
                  <div
                    key={location.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedLocation === location.id.toString()
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedLocation(location.id.toString())}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{location.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        location.availableSpots > 10
                          ? 'bg-green-100 text-green-800'
                          : location.availableSpots > 0
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {location.availableSpots} spots left
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>📅 {location.schedule}</div>
                      <div>⏰ {location.time}</div>
                      <div>💰 {location.fee}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription Plans */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Subscription Plans</h3>
              <div className="space-y-4">
                {subscriptionPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPlan === plan.id
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{plan.name}</h4>
                      <span className="text-lg font-bold text-red-600">{plan.price}</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-green-900 mb-4">Why Sell at Palengke?</h3>
              <div className="space-y-3 text-sm text-green-800">
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🌱</span>
                  Direct access to local customers
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">💰</span>
                  Higher profit margins
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🤝</span>
                  Community support network
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">📈</span>
                  Growing market demand
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🏆</span>
                  Premium seller opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 