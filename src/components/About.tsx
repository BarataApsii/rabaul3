import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Award, Users, Calendar } from 'lucide-react';
import React from 'react';

const stats = [
  { icon: Star, value: '4.9', label: 'Guest Rating' },
  { icon: Award, value: '25+', label: 'Awards Won' },
  { icon: Users, value: '10K+', label: 'Happy Guests' },
  { icon: Calendar, value: '15', label: 'Years of Excellence' }
];

const awards = [
  'Best Tropical Resort 2024',
  'Excellence in Service Award',
  'Top Rated Papua New Guinea Hotel',
  'Sustainable Tourism Award'
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl mb-6">About <span className="text-accent">Rabaul Hotel</span></h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, Rabaul Hotel has been the epitome of tropical luxury hospitality in beautiful East New Britain. 
              Our commitment to exceptional service, world-class amenities, and unforgettable experiences has made us 
              the preferred choice for discerning travelers exploring Papua New Guinea.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From our elegantly appointed rooms with volcano views to our award-winning restaurant serving fresh local cuisine, 
              every detail has been carefully crafted to showcase the natural beauty of Rabaul. Our dedicated team of hospitality 
              professionals is committed to making your tropical getaway truly memorable.
            </p>

            {/* Awards */}
            <div className="mb-8">
              <h3 className="text-xl mb-4">Awards & Recognition</h3>
              <div className="flex flex-wrap gap-2">
                {awards.map((award, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {award}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-4 rounded-full">
                          <stat.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mission Statement */}
            <Card className="mt-8 p-6 bg-primary text-white">
              <CardContent className="p-0">
                <h3 className="text-xl mb-4">Our Mission</h3>
                <p className="leading-relaxed">
                  "To create extraordinary tropical experiences that inspire, comfort, and delight our guests, 
                  while fostering a culture of excellence, sustainability, and genuine <span className="text-accent">Papua New Guinea hospitality</span>."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}