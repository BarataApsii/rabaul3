import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Wifi, Coffee, Car, Utensils, Users, Bed } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'Comfortable and elegant room with volcano views',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1655292912612-bb5b1bda9355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBtb2Rlcm4lMjBiZWR8ZW58MXx8fHwxNzU4NzczMDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Free WiFi', 'Coffee Maker', 'Volcano View', '2 Guests'],
    amenities: [
      { icon: Wifi, label: 'Free WiFi' },
      { icon: Coffee, label: 'Coffee Maker' },
      { icon: Users, label: '2 Guests' },
      { icon: Bed, label: 'King Bed' }
    ]
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Spacious suite with separate living area and tropical garden views',
    price: '$349',
    image: 'https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwbHV4dXJ5JTIwYmVkcm9vbXxlbnwxfHx8fDE3NTg2NzIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Free WiFi', 'Room Service', 'Garden View', '4 Guests'],
    amenities: [
      { icon: Wifi, label: 'Free WiFi' },
      { icon: Utensils, label: 'Room Service' },
      { icon: Users, label: '4 Guests' },
      { icon: Car, label: 'Valet Parking' }
    ]
  },
  {
    id: 3,
    name: 'Presidential Suite',
    description: 'Ultimate luxury with panoramic bay views and exclusive services',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1590490359854-dfba19688d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwbHV4dXJ5JTIwYmVkcm9vbXxlbnwxfHx8fDE3NTg2NzIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Free WiFi', 'Concierge', 'Butler Service', '6 Guests'],
    amenities: [
      { icon: Wifi, label: 'Free WiFi' },
      { icon: Utensils, label: 'Butler Service' },
      { icon: Users, label: '6 Guests' },
      { icon: Car, label: 'Valet Parking' }
    ]
  }
];

export function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Our Rooms & Suites</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of rooms and suites, each designed to provide comfort and luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {room.price}/night
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle>{room.name}</CardTitle>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <amenity.icon className="h-4 w-4 mr-1 text-accent" />
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full">Book This Room</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}