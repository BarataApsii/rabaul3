import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Waves, Utensils, Dumbbell, Wifi, Car, Coffee, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

const amenities = [
  {
    id: 1,
    name: 'Luxury Spa & Wellness',
    description: 'Rejuvenate your body and mind with our world-class spa treatments',
    image: 'https://images.unsplash.com/photo-1604161926875-bb58f9a0d81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc1ODY4ODY3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Sparkles
  },
  {
    id: 2,
    name: 'Fine Dining Restaurant',
    description: 'Experience culinary excellence with fresh local seafood and tropical cuisine',
    image: 'https://images.unsplash.com/photo-1543539571-2d88da875d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzU4NzEwNjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Utensils
  },
  {
    id: 3,
    name: 'Tropical Pool & Bar',
    description: 'Relax and unwind with stunning bay views from our tropical pool',
    image: 'https://images.unsplash.com/photo-1606917454663-343e58811bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBzd2ltbWluZ3xlbnwxfHx8fDE3NTg3NDEwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Waves
  }
];

const services = [
  { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet throughout the hotel' },
  { icon: Car, name: 'Valet Parking', description: '24/7 valet parking service' },
  { icon: Coffee, name: 'Room Service', description: '24-hour room service available' },
  { icon: Users, name: 'Concierge', description: 'Personal concierge to assist with your needs' },
  { icon: Dumbbell, name: 'Fitness Center', description: 'State-of-the-art fitness equipment' },
  { icon: Sparkles, name: 'Housekeeping', description: 'Daily housekeeping and turndown service' }
];

export function Amenities() {
  return (
    <section id="amenities" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">World-Class Amenities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exceptional facilities and services designed to make your stay unforgettable
          </p>
        </div>

        {/* Featured Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {amenities.map((amenity) => (
            <Card key={amenity.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={amenity.image}
                  alt={amenity.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-60 flex items-center justify-center">
                  <amenity.icon className="h-12 w-12 text-accent" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle>{amenity.name}</CardTitle>
                <CardDescription>{amenity.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl mb-8 text-center">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{service.name}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}