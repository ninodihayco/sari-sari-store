'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StoreRegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    storeName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    barangay: '',
    category: '',
    description: '',
    specialties: [] as string[],
    hours: {
      monday: { open: '6:00', close: '22:00', closed: false },
      tuesday: { open: '6:00', close: '22:00', closed: false },
      wednesday: { open: '6:00', close: '22:00', closed: false },
      thursday: { open: '6:00', close: '22:00', closed: false },
      friday: { open: '6:00', close: '22:00', closed: false },
      saturday: { open: '6:00', close: '22:00', closed: false },
      sunday: { open: '6:00', close: '22:00', closed: false }
    },
    businessLicense: '',
    taxId: '',
    bankAccount: '',
    gcashNumber: ''
  });

  const categories = [
    { id: 'convenience', name: 'Convenience Store', icon: '🏪' },
    { id: 'grocery', name: 'Grocery Store', icon: '🛒' },
    { id: 'snacks', name: 'Snacks & Drinks', icon: '🍿' },
    { id: 'household', name: 'Household Items', icon: '🧽' },
    { id: 'fresh', name: 'Fresh Produce', icon: '🥬' },
    { id: 'bakery', name: 'Bakery', icon: '🥖' },
    { id: 'pharmacy', name: 'Pharmacy', icon: '💊' },
    { id: 'other', name: 'Other', icon: '📦' }
  ];

  const cities = [
    'Quezon City', 'Makati', 'Manila', 'Taguig', 'Pasig', 'Marikina', 'Caloocan', 'Parañaque', 'Las Piñas', 'Muntinlupa'
  ];

  const barangays = {
    'Quezon City': ['Batasan Hills', 'UP Village', 'Cubao', 'Katipunan', 'Eastwood', 'UP Diliman'],
    'Makati': ['Poblacion', 'Bel-Air', 'San Lorenzo', 'Urdaneta', 'Forbes Park', 'Dasmariñas'],
    'Manila': ['San Andres', 'Malate', 'Ermita', 'Intramuros', 'Tondo', 'Binondo'],
    'Taguig': ['Tuktukan', 'Pateros', 'Upper Bicutan', 'Lower Bicutan', 'Western Bicutan'],
    'Pasig': ['San Antonio', 'Ortigas', 'Capitol', 'Manggahan', 'Rosario', 'Santolan']
  };

  const specialtyOptions = [
    'Filipino snacks', 'Soft drinks', 'Household essentials', 'Fresh vegetables', 'Rice & grains',
    'Cooking ingredients', 'School supplies', 'Beverages', 'Candies', 'Bread & pastries',
    'Cleaning supplies', 'Toiletries', 'Kitchen items', 'Medicines', 'Vitamins'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSpecialtyToggle = (specialty: string) => {
    setFormData(prev => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty]
    }));
  };

  const handleHoursChange = (day: string, field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      hours: {
        ...prev.hours,
        [day]: {
          ...prev.hours[day as keyof typeof prev.hours],
          [field]: value
        }
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Store registration submitted:', formData);
    // Handle form submission
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
              <Link href="/login" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Register Your Sari-Sari Store</h1>
          <p className="text-gray-600">Join the Filipino community and start selling your products online</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? 'bg-red-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Step {step} of 4: {
                step === 1 ? 'Basic Information' :
                step === 2 ? 'Store Details' :
                step === 3 ? 'Business Hours' :
                'Payment Setup'
              }
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Store Name *
                    </label>
                    <input
                      type="text"
                      name="storeName"
                      required
                      value={formData.storeName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                      placeholder="e.g., Aling Maria's Sari-Sari Store"
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
                      placeholder="e.g., Maria Santos"
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
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Store Details</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <select
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Select a city</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Barangay *
                      </label>
                      <select
                        name="barangay"
                        required
                        value={formData.barangay}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                        disabled={!formData.city}
                      >
                        <option value="">Select a barangay</option>
                        {formData.city && barangays[formData.city as keyof typeof barangays]?.map((barangay) => (
                          <option key={barangay} value={barangay}>{barangay}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Complete Address *
                    </label>
                    <textarea
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                      placeholder="Street address, building, landmarks..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Store Category *
                    </label>
                    <select
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.icon} {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Store Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                      placeholder="Tell customers about your store, products, and service..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specialties
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {specialtyOptions.map((specialty) => (
                        <label key={specialty} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.specialties.includes(specialty)}
                            onChange={() => handleSpecialtyToggle(specialty)}
                            className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                          />
                          <span className="text-sm text-gray-700">{specialty}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Business Hours</h2>
                <div className="space-y-4">
                  {Object.entries(formData.hours).map(([day, hours]) => (
                    <div key={day} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-24">
                        <span className="text-sm font-medium text-gray-700 capitalize">{day}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={!hours.closed}
                          onChange={(e) => handleHoursChange(day, 'closed', !e.target.checked)}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-600">Open</span>
                      </div>
                      {!hours.closed && (
                        <>
                          <input
                            type="time"
                            value={hours.open}
                            onChange={(e) => handleHoursChange(day, 'open', e.target.value)}
                            className="px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                          <span className="text-sm text-gray-600">to</span>
                          <input
                            type="time"
                            value={hours.close}
                            onChange={(e) => handleHoursChange(day, 'close', e.target.value)}
                            className="px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Setup</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Account Number
                      </label>
                      <input
                        type="text"
                        name="bankAccount"
                        value={formData.bankAccount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                        placeholder="For payments"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        GCash Number
                      </label>
                      <input
                        type="text"
                        name="gcashNumber"
                        value={formData.gcashNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                        placeholder="+63 912 345 6789"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <div className="flex space-x-4">
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Register Store
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="mt-8 bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-4">Why Register Your Store?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <span className="text-green-600 mr-3">💰</span>
              <span className="text-sm text-green-800">Increase sales with online presence</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-3">👥</span>
              <span className="text-sm text-green-800">Reach more customers in your area</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-3">📱</span>
              <span className="text-sm text-green-800">Easy order management system</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 