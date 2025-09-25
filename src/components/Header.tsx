import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Rabaul <span className="text-accent">Hotel</span></h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#rooms" className="text-gray-600 hover:text-primary transition-colors">Rooms</a>
            <a href="#amenities" className="text-gray-600 hover:text-primary transition-colors">Amenities</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Contact Info & Book Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-accent" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-accent" />
              <span>info@rabaul.com</span>
            </div>
            <Button className="ml-4">Book Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-primary">Home</a>
              <a href="#rooms" className="block px-3 py-2 text-gray-600 hover:text-primary">Rooms</a>
              <a href="#amenities" className="block px-3 py-2 text-gray-600 hover:text-primary">Amenities</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-primary">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-primary">Contact</a>
              <div className="px-3 py-2">
                <Button className="w-full">Book Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}