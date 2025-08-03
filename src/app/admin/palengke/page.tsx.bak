'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminPalengkePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const palengkeLocations = [
    {
      id: 1,
      name: "Quezon City Memorial Circle",
      address: "Elliptical Road, Quezon City",
      capacity: 50,
      parkingSpaces: 100,
      currentSellers: 32,
      status: "active",
      nextEvent: "2024-02-15",
      schedule: "Every Saturday & Sunday"
    },
    {
      id: 2,
      name: "Makati City Hall Plaza",
      address: "J.P. Rizal Avenue, Makati City",
      capacity: 30,
      parkingSpaces: 60,
      currentSellers: 25,
      status: "active",
      nextEvent: "2024-02-14",
      schedule: "Every Friday & Saturday"
    },
    {
      id: 3,
      name: "Taguig City Market",
      address: "Market Street, Taguig City",
      capacity: 40,
      parkingSpaces: 80,
      currentSellers: 0,
      status: "inactive",
      nextEvent: "TBD",
      schedule: "Every Sunday"
    }
  ];

  const subscribedSellers = [
    {
      id: 1,
      name: "Kuya Juan's Farm",
      category: "vegetables",
      subscription: "premium",
      status: "active",
      location: "Quezon City Memorial Circle",
      rating: 4.9,
      joinedDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Aling Maria's Fruits",
      category: "fruits",
      subscription: "basic",
      status: "active",
      location: "Makati City Hall Plaza",
      rating: 4.8,
      joinedDate: "2024-01-20"
    },
    {
      id: 3,
      name: "Tatay Pedro's Fish",
      category: "meat",
      subscription: "premium",
      status: "pending",
      location: "Quezon City Memorial Circle",
      rating: 4.7,
      joinedDate: "2024-02-01"
    }
  ];

  const pendingApplications = [
    {
      id: 1,
      sellerName: "Nanay's Eggs & Dairy",
      category: "dairy",
      location: "Quezon City Memorial Circle",
      appliedDate: "2024-02-08",
      status: "pending"
    },
    {
      id: 2,
      sellerName: "Kuya Boy's Rice",
      category: "grains",
      location: "Makati City Hall Plaza",
      appliedDate: "2024-02-07",
      status: "pending"
    }
  ];

  const filteredLocations = selectedLocation === 'all' 
    ? palengkeLocations 
    : palengkeLocations.filter(loc => loc.status === selectedLocation);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-red-600">SariSari Store</Link>
              <span className="ml-4 text-gray-500">|</span>
              <span className="ml-4 text-gray-700 font-medium">City Admin</span>
            </div>
            <nav className="flex space-x-8">
              <Link href="/admin/dashboard" className="text-gray-700 hover:text-red-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/admin/palengke" className="text-red-600 font-medium">
                Palengke Admin
              </Link>
              <Link href="/admin/sellers" className="text-gray-700 hover:text-red-600 transition-colors">
                Sellers
              </Link>
              <Link href="/admin/reports" className="text-gray-700 hover:text-red-600 transition-colors">
                Reports
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Palengke Event Management</h1>
          <p className="text-gray-600">Manage palengke locations, seller subscriptions, and event scheduling</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="text-green-600 text-2xl mr-4">📍</div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{palengkeLocations.length}</div>
                <div className="text-sm text-gray-600">Active Locations</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="text-blue-600 text-2xl mr-4">👥</div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{subscribedSellers.length}</div>
                <div className="text-sm text-gray-600">Subscribed Sellers</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="text-orange-600 text-2xl mr-4">📋</div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{pendingApplications.length}</div>
                <div className="text-sm text-gray-600">Pending Applications</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="text-purple-600 text-2xl mr-4">💰</div>
              <div>
                <div className="text-2xl font-bold text-gray-900">₱45,000</div>
                <div className="text-sm text-gray-600">Monthly Revenue</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'locations', 'sellers', 'applications', 'events'].map((tab) => (
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
          {activeTab === 'overview' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Palengke Overview</h2>
              
              {/* Location Status */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Location Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {palengkeLocations.map((location) => (
                    <div key={location.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{location.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded ${
                          location.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {location.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                      <div className="text-sm text-gray-600">
                        <div>Capacity: {location.currentSellers}/{location.capacity}</div>
                        <div>Parking: {location.parkingSpaces} spaces</div>
                        <div>Next Event: {location.nextEvent}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    New seller "Tatay Pedro's Fish" applied for Quezon City Memorial Circle
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Palengke event scheduled for Makati City Hall Plaza on Feb 14
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Application from "Nanay's Eggs & Dairy" requires review
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'locations' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Palengke Locations</h2>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                  Add New Location
                </button>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <select 
                  value={selectedLocation} 
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="all">All Locations</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="space-y-4">
                {filteredLocations.map((location) => (
                  <div key={location.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{location.name}</h3>
                        <p className="text-gray-600">{location.address}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-700 text-sm">Edit</button>
                        <button className="text-red-600 hover:text-red-700 text-sm">Delete</button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Capacity</div>
                        <div className="font-medium">{location.currentSellers}/{location.capacity}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Parking Spaces</div>
                        <div className="font-medium">{location.parkingSpaces}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Schedule</div>
                        <div className="font-medium">{location.schedule}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Next Event</div>
                        <div className="font-medium">{location.nextEvent}</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                        Schedule Event
                      </button>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                        Manage Sellers
                      </button>
                      <button className="bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700">
                        View Reports
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sellers' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Subscribed Sellers</h2>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                  Manage Subscriptions
                </button>
              </div>

              <div className="space-y-4">
                {subscribedSellers.map((seller) => (
                  <div key={seller.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{seller.name}</h3>
                        <p className="text-gray-600">{seller.location}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded ${
                          seller.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {seller.status}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded ${
                          seller.subscription === 'premium' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {seller.subscription}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Category</div>
                        <div className="font-medium capitalize">{seller.category}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Rating</div>
                        <div className="font-medium">⭐ {seller.rating}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Joined</div>
                        <div className="font-medium">{seller.joinedDate}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Subscription</div>
                        <div className="font-medium capitalize">{seller.subscription}</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 text-sm">View Profile</button>
                      <button className="text-green-600 hover:text-green-700 text-sm">Approve</button>
                      <button className="text-red-600 hover:text-red-700 text-sm">Suspend</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Pending Applications</h2>
              
              <div className="space-y-4">
                {pendingApplications.map((application) => (
                  <div key={application.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{application.sellerName}</h3>
                        <p className="text-gray-600">{application.location}</p>
                      </div>
                      <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                        {application.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Category</div>
                        <div className="font-medium capitalize">{application.category}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Applied Date</div>
                        <div className="font-medium">{application.appliedDate}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Location</div>
                        <div className="font-medium">{application.location}</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                        Approve
                      </button>
                      <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700">
                        Reject
                      </button>
                      <button className="text-blue-600 hover:text-blue-700 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Palengke Events</h2>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                  Schedule New Event
                </button>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Quezon City Memorial Circle</h3>
                      <p className="text-gray-600">Saturday, February 15, 2024</p>
                    </div>
                    <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                      Scheduled
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Time</div>
                      <div className="font-medium">6:00 AM - 2:00 PM</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Registered Sellers</div>
                      <div className="font-medium">32/50</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Expected Revenue</div>
                      <div className="font-medium">₱15,000</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Status</div>
                      <div className="font-medium text-green-600">Active</div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                      Manage Event
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                      Send Notifications
                    </button>
                    <button className="text-red-600 hover:text-red-700 text-sm">
                      Cancel Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 