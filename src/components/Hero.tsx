import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, MapPin, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Slider from 'react-slick';

export function Hero() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1589138845385-6eb740d77728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cm9waWNhbCUyMHJlc29ydCUyMFBhcHVhJTIwTmV3JTIwR3VpbmVhfGVufDF8fHx8MTc1ODc3MzkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury tropical resort"
    },
    {
      src: "https://images.unsplash.com/photo-1559235196-7a82724ca9a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwaG90ZWwlMjBzdW5zZXR8ZW58MXx8fHwxNzU4NzczOTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Tropical beach sunset"
    },
    {
      src: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwb29sJTIwcmVzb3J0JTIwdHJvcGljYWx8ZW58MXx8fHwxNzU4NzczOTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury pool resort"
    },
    {
      src: "https://images.unsplash.com/photo-1723005284185-69223166edd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHZpZXclMjBob3RlbCUyMGJhbGNvbnl8ZW58MXx8fHwxNzU4NzczOTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Ocean view hotel balcony"
    },
    {
      src: "https://images.unsplash.com/photo-1723532173069-6c44fe260198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGRpbmluZyUyMHJlc3RhdXJhbnQlMjB0ZXJyYWNlfGVufDF8fHx8MTc1ODc3MzkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Tropical dining terrace"
    },
    {
      src: "https://images.unsplash.com/photo-1746130702924-cecefafa9092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBob3RlbCUyMHRyb3BpY2FsfGVufDF8fHx8MTc1ODc3MzkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury spa hotel"
    },
    {
      src: "https://images.unsplash.com/photo-1694011521375-63710ef0d9cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwdHJlZXMlMjBiZWFjaCUyMHJlc29ydCUyMHBhcmFkaXNlfGVufDF8fHx8MTc1ODc3Mzk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Palm trees beach paradise"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    lazyLoad: 'progressive' as const,
    dotsClass: "slick-dots hero-slider-dots"
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full">
          <Slider {...sliderSettings}>
            {heroImages.map((image, index) => (
              <div key={index} className="h-screen w-full">
                <div className="h-screen w-full relative">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-primary/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 mr-2 text-accent" />
            <span className="text-lg">East New Britain, Papua New Guinea</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wide">
            <span className="text-white">Rabaul</span> <span className="text-accent">Hotel</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience tropical luxury and comfort in the heart of <span className="text-accent">beautiful Rabaul</span>
          </p>

          {/* Booking Form */}
          <div className="bg-white bg-opacity-95 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <Label htmlFor="checkin" className="text-foreground flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-accent" />
                  Check In
                </Label>
                <Input
                  id="checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="checkout" className="text-foreground flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-accent" />
                  Check Out
                </Label>
                <Input
                  id="checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-foreground flex items-center">
                  <Users className="h-4 w-4 mr-2 text-accent" />
                  Guests
                </Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button size="lg" className="h-[42px]">
                Check Availability
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}