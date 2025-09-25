import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg mb-1">Our Location</h4>
                  <p className="text-gray-600">Mango Avenue<br />P.O Box 1<br />Rabaul, East New Britain Province<br />Papua New Guinea</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg mb-2">Phone Numbers</h4>
                  <div className="space-y-1">
                    <p className="text-gray-600"><a href="tel:+67571893571" className="hover:text-accent transition-colors">+675 7189 3571</a></p>
                    <p className="text-gray-600"><a href="tel:+6759821999" className="hover:text-accent transition-colors">+675 982 1999</a></p>
                    <p className="text-gray-600"><a href="tel:+67571749608" className="hover:text-accent transition-colors">+675 7174 9608</a></p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg mb-1">Email Address</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@rabaulhotel.com" className="hover:text-accent transition-colors">
                      info@rabaulhotel.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg mb-1">Working Hours</h4>
                  <p className="text-gray-600">24/7 Front Desk Service<br />Check-in: 2:00 PM | Check-out: 11:00 AM</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <p className="text-gray-600 mb-6">We'll get back to you within 24 hours</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="How can we help?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent text-white py-3 px-6 rounded-md hover:bg-accent-dark transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
