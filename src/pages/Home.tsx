import React from 'react';
import BookingCard from '../components/BookingCards';
// import { toast } from '@/hooks/use-toast';

const Index = () => {
  const handleBooking = (id: string) => {
    // toast({
    //   title: "Booking Initiated",
    //   description: `Redirecting to booking page for service ${id}...`,
    // });
    console.log(`Booking service with ID: ${id}`);
  };

  const bookingData = [
    {
      id: '1',
      title: 'Luxury Beachfront Villa with Private Pool',
      provider: 'Ocean View Rentals',
      location: 'Malibu, California',
      rating: 4.9,
      reviewCount: 127,
      price: 450,
      originalPrice: 550,
      capacity: 8,
      imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80',
      category: 'Luxury Villa',
    },
    {
      id: '2',
      title: 'Cozy Mountain Cabin Getaway',
      provider: 'Mountain Escapes',
      location: 'Aspen, Colorado',
      rating: 4.8,
      reviewCount: 89,
      price: 280,
      capacity: 6,
      imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
      category: 'Mountain Retreat',
    },
    {
      id: '3',
      title: 'Downtown Penthouse with City Views',
      provider: 'Urban Stays',
      location: 'New York, NY',
      rating: 4.7,
      reviewCount: 203,
      price: 380,
      originalPrice: 420,
      capacity: 4,
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      category: 'City Apartment',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Discover Amazing Places
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find and book unique accommodations around the world with just a few clicks
          </p>
        </div>

        {/* Booking Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bookingData.map((booking, index) => (
            <div
              key={booking.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BookingCard
                {...booking}
                onBook={handleBooking}
              />
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300 hover-scale">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-xl">🏖️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Locations</h3>
              <p className="text-gray-600">Handpicked properties in the most desirable destinations</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300 hover-scale">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Booking</h3>
              <p className="text-gray-600">Book instantly with our streamlined reservation system</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300 hover-scale">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">Your payments are protected with bank-level security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;