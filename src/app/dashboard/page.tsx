'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../contexts/AuthContext';
import ProtectedRoute from '../../components/ProtectedRoute';

type UserType = 'shopper' | 'seller';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const { user, logout } = useAuth();

  const recentOrders = [
    {
      id: 1,
      store: "Maria's Corner Store",
      items: "Rice, Eggs, Milk",
      total: "$12.50",
      status: "Delivered",
      date: "2024-02-08"
    },
    {
      id: 2,
      store: "Juan's Home Services",
      items: "Home Cleaning",
      total: "$45.00",
      status: "Completed",
      date: "2024-02-07"
    }
  ];

  const storeStats = {
    totalSales: "$2,450",
    totalOrders: 156,
    activeProducts: 24,
    rating: 4.8
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-red-600">SariSari Store</Link>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="text-2xl">{user?.avatar || '👤'}</div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">{user?.name}</div>
                    <div className="text-gray-500">{user?.email}</div>
                  </div>
                </div>
                <button 
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-gray-700"
                  title="Logout"
                >
                  <div className="text-xl">🚪</div>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-gray-600 mt-2">
              {user?.userType === 'seller' ? 'Manage your store and track your sales' : 'Track your orders and discover new stores'}
            </p>
          </div>

          {/* User Type Display */}
          <div className="mb-6">
            <div className="bg-white rounded-lg p-3 inline-flex">
              <span className={`px-4 py-2 rounded-md text-sm font-medium ${
                user?.userType === 'shopper'
                  ? 'bg-red-600 text-white'
                  : 'bg-blue-600 text-white'
              }`}>
                {user?.userType === 'shopper' ? '🛒 Shopper' : '🏪 Seller'}
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              {['overview', 'orders', 'favorites', 'settings'].map((tab) => (
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

          {/* Dashboard Content */}
          <div className="bg-white rounded-lg shadow">
            {activeTab === 'overview' && (
              <div className="p-6">
                {user?.userType === 'shopper' ? (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">12</div>
                        <div className="text-sm text-blue-600">Total Orders</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">$245.00</div>
                        <div className="text-sm text-green-600">Total Spent</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">8</div>
                        <div className="text-sm text-purple-600">Favorite Stores</div>
                      </div>
                    </div>

                    {/* Recent Orders */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Orders</h3>
                      <div className="space-y-4">
                        {recentOrders.map((order) => (
                          <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium text-gray-900">{order.store}</h4>
                                <p className="text-sm text-gray-600">{order.items}</p>
                                <p className="text-xs text-gray-500">{order.date}</p>
                              </div>
                              <div className="text-right">
                                <div className="font-medium text-gray-900">{order.total}</div>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  order.status === 'Delivered' || order.status === 'Completed'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {order.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Store Overview</h2>
                    
                    {/* Store Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{storeStats.totalSales}</div>
                        <div className="text-sm text-green-600">Total Sales</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{storeStats.totalOrders}</div>
                        <div className="text-sm text-blue-600">Total Orders</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{storeStats.activeProducts}</div>
                        <div className="text-sm text-purple-600">Active Products</div>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">{storeStats.rating}</div>
                        <div className="text-sm text-yellow-600">Rating</div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/dashboard/add-product" className="bg-red-600 text-white p-4 rounded-lg text-center hover:bg-red-700 transition-colors">
                        <div className="text-2xl mb-2">➕</div>
                        <div className="font-medium">Add New Product</div>
                      </Link>
                      <Link href="/dashboard/manage-orders" className="bg-gray-600 text-white p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                        <div className="text-2xl mb-2">📦</div>
                        <div className="font-medium">Manage Orders</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order History</h2>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{order.store}</h4>
                          <p className="text-sm text-gray-600">{order.items}</p>
                          <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">{order.total}</div>
                          <span className={`text-xs px-2 py-1 rounded ${
                            order.status === 'Delivered' || order.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Favorite Stores</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="text-3xl mb-2">🏪</div>
                    <h4 className="font-medium text-gray-900">Maria's Corner Store</h4>
                    <p className="text-sm text-gray-600">New York, USA</p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="text-3xl mb-2">🛠️</div>
                    <h4 className="font-medium text-gray-900">Juan's Home Services</h4>
                    <p className="text-sm text-gray-600">London, UK</p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm text-gray-600 ml-1">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Profile Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" value={user?.name} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" value={user?.email} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Security</h4>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 