"use client";

import { useState, useEffect } from "react";

interface ChatRoom {
  id: string;
  name: string;
  description: string;
  members: number;
  lastMessage: string;
  lastMessageTime: string;
  category: string;
  isActive: boolean;
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: string;
  priority: "low" | "medium" | "high";
}

interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  maxAttendees: number;
  organizer: string;
  category: string;
}

export default function TambayanPage() {
  const [currentLocation, setCurrentLocation] = useState("Philippines");
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");

  // Global locations data
  const globalLocations = {
    "Philippines": {
      cities: ["Manila", "Quezon City", "Makati", "Cebu", "Davao", "Baguio"],
      currency: "₱",
      language: "Filipino"
    },
    "USA": {
      cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"],
      currency: "$",
      language: "English"
    },
    "Canada": {
      cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa"],
      currency: "C$",
      language: "English"
    },
    "UK": {
      cities: ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool", "Leeds"],
      currency: "£",
      language: "English"
    },
    "Australia": {
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"],
      currency: "A$",
      language: "English"
    }
  };

  // Sample chat rooms data
  const chatRooms: ChatRoom[] = [
    {
      id: "1",
      name: "🇵🇭 Filipino Community",
      description: "Connect with fellow Filipinos in your area",
      members: 1247,
      lastMessage: "Kumusta! May bago bang sari-sari store sa area natin?",
      lastMessageTime: "2 min ago",
      category: "Community",
      isActive: true
    },
    {
      id: "2",
      name: "🍜 Filipino Food Lovers",
      description: "Share recipes, restaurant finds, and food adventures",
      members: 892,
      lastMessage: "Sino may alam ng authentic karenderia dito sa Makati?",
      lastMessageTime: "15 min ago",
      category: "Food",
      isActive: true
    },
    {
      id: "3",
      name: "🏪 Sari-Sari Store Owners",
      description: "Network with fellow store owners and share business tips",
      members: 456,
      lastMessage: "Tips sa pag-manage ng inventory?",
      lastMessageTime: "1 hour ago",
      category: "Business",
      isActive: true
    },
    {
      id: "4",
      name: "🎉 Community Events",
      description: "Stay updated on local events and gatherings",
      members: 678,
      lastMessage: "May palengke event sa weekend!",
      lastMessageTime: "3 hours ago",
      category: "Events",
      isActive: true
    },
    {
      id: "5",
      name: "💬 General Chat",
      description: "General discussions and casual conversations",
      members: 2341,
      lastMessage: "Magandang umaga sa lahat!",
      lastMessageTime: "5 hours ago",
      category: "General",
      isActive: true
    }
  ];

  // Sample announcements data
  const announcements: Announcement[] = [
    {
      id: "1",
      title: "🎉 Welcome to Tambayan!",
      content: "Welcome to our Filipino community hub! This is where we connect, share, and build our community together. Feel free to join any chat room or start a conversation!",
      author: "Community Admin",
      timestamp: "2 hours ago",
      priority: "high"
    },
    {
      id: "2",
      title: "📢 New Features Coming Soon",
      content: "We're working on exciting new features including voice chat, community polls, and event organization tools. Stay tuned for updates!",
      author: "SariSari Team",
      timestamp: "1 day ago",
      priority: "medium"
    },
    {
      id: "3",
      title: "🏪 Store Owner Meetup",
      content: "Calling all sari-sari store owners! Join our monthly meetup to network and share business insights. Details coming soon.",
      author: "Business Community",
      timestamp: "2 days ago",
      priority: "medium"
    }
  ];

  // Sample community events data
  const communityEvents: CommunityEvent[] = [
    {
      id: "1",
      title: "🇵🇭 Filipino Food Festival",
      description: "Join us for a celebration of Filipino cuisine with local vendors, cooking demonstrations, and cultural performances.",
      date: "August 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Quezon City Memorial Circle",
      attendees: 45,
      maxAttendees: 100,
      organizer: "Filipino Community Group",
      category: "Food Festival"
    },
    {
      id: "2",
      title: "🏪 Sari-Sari Store Networking",
      description: "Monthly meetup for sari-sari store owners to share tips, discuss challenges, and build business relationships.",
      date: "August 20, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Community Center, Makati",
      attendees: 23,
      maxAttendees: 50,
      organizer: "Store Owners Association",
      category: "Business"
    },
    {
      id: "3",
      title: "🎵 Filipino Music Night",
      description: "Live performances featuring traditional and modern Filipino music. Bring your family and enjoy the evening!",
      date: "August 25, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Rizal Park Amphitheater",
      attendees: 67,
      maxAttendees: 150,
      organizer: "Filipino Cultural Society",
      category: "Entertainment"
    }
  ];

  useEffect(() => {
    const savedLocation = localStorage.getItem("sariSariLocation");
    if (savedLocation) {
      setCurrentLocation(savedLocation);
    }
  }, []);

  const handleLocationChange = (newLocation: string) => {
    setCurrentLocation(newLocation);
    localStorage.setItem("sariSariLocation", newLocation);
    setShowLocationModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Tambayan</h1>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">📍 {currentLocation}</span>
                <button
                  onClick={() => setShowLocationModal(true)}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Change
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                New Chat
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Create Event
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-8">
          <button
            onClick={() => setActiveTab("chat")}
            className={`pb-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "chat"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            💬 Chat Rooms
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`pb-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "events"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            🎉 Community Events
          </button>
          <button
            onClick={() => setActiveTab("announcements")}
            className={`pb-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "announcements"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            📢 Announcements
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === "chat" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chatRooms.map((room) => (
              <div key={room.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{room.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{room.description}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    room.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}>
                    {room.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <span>👥 {room.members} members</span>
                    <span className="mx-2">•</span>
                    <span className="capitalize">{room.category}</span>
                  </div>
                  
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-700 mb-1">{room.lastMessage}</p>
                    <p className="text-xs text-gray-500">{room.lastMessageTime}</p>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Join Chat
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "events" && (
          <div className="space-y-6">
            {communityEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">📅 Date:</span>
                        <p className="text-gray-600">{event.date}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">🕒 Time:</span>
                        <p className="text-gray-600">{event.time}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">📍 Location:</span>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">👥 Attendees:</span>
                        <p className="text-gray-600">{event.attendees}/{event.maxAttendees}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-6 text-right">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {event.category}
                    </span>
                    <p className="text-sm text-gray-600">by {event.organizer}</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Join Event
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "announcements" && (
          <div className="space-y-6">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        announcement.priority === "high" ? "bg-red-100 text-red-800" :
                        announcement.priority === "medium" ? "bg-yellow-100 text-yellow-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {announcement.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{announcement.content}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>by {announcement.author}</span>
                      <span className="mx-2">•</span>
                      <span>{announcement.timestamp}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Read More
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Location Selection Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Select Your Location</h3>
            <div className="space-y-2">
              {Object.keys(globalLocations).map((country) => (
                <button
                  key={country}
                  onClick={() => handleLocationChange(country)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    currentLocation === country
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="font-medium">{country}</div>
                  <div className="text-sm text-gray-600">
                    {globalLocations[country as keyof typeof globalLocations].cities.slice(0, 3).join(", ")}...
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowLocationModal(false)}
              className="w-full mt-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 