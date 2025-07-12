
import React from 'react';
import { Star, MapPin, Users } from 'lucide-react';

interface BookingCardProps {
  id: string;
  title: string;
  provider: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  capacity: number;
  imageUrl: string;
  category: string;
  onBook: (id: string) => void;
}

const BookingCard: React.FC<BookingCardProps> = ({
  id,
  title,
  provider,
  location,
  rating,
  reviewCount,
  price,
  originalPrice,
  capacity,
  imageUrl,
  category,
  onBook,
}) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] animate-fade-in">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">by {provider}</p>
          </div>
        </div>

        {/* Location and Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
            <span className="text-sm text-gray-500 ml-1">({reviewCount})</span>
          </div>
        </div>

        {/* Capacity */}
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Users className="w-4 h-4 mr-1" />
          <span>Up to {capacity} guests</span>
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              ${price}
            </div>
            {originalPrice && (
              <div className="ml-2 text-sm text-gray-500 line-through">
                ${originalPrice}
              </div>
            )}
            <div className="ml-2 text-sm text-gray-500">/ night</div>
          </div>
          
          <button
            onClick={() => onBook(id)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Discount Badge */}
      {originalPrice && (
        <div className="absolute top-4 right-4">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;