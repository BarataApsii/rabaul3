import React from 'react';
import { MapPin, Mountain, Waves, Landmark, ShipWheel, Castle, BookOpen, TreePine, ShoppingCart, Hotel } from 'lucide-react';

export function Explore() {
  const attractions = [
    {
      icon: <Mountain className="w-6 h-6 text-accent" />,
      title: "Mt Tavurvur Volcano",
      description: "Witness the power of nature at this active volcano with dramatic crater views, especially stunning at sunrise."
    },
    {
      icon: <Waves className="w-6 h-6 text-accent" />,
      title: "Simpson Harbour & Caldera",
      description: "Stunning flooded caldera surrounded by volcanoes, perfect for scenic walks and wildlife spotting."
    },
    {
      icon: <ShipWheel className="w-6 h-6 text-accent" />,
      title: "Matupit Island",
      description: "Experience traditional village life and enjoy excellent snorkeling in crystal clear waters."
    },
    {
      icon: <Castle className="w-6 h-6 text-accent" />,
      title: "WWII Relics & Tunnels",
      description: "Explore historic tunnels and bunkers from the Japanese occupation during World War II."
    },
    {
      icon: <Landmark className="w-6 h-6 text-accent" />,
      title: "Old Rabaul Ruins",
      description: "See the remnants of the old town, a powerful reminder of the 1994 volcanic eruptions."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-accent" />,
      title: "Rabaul Museum",
      description: "Discover the region's volcanic history, local culture, and wartime heritage."
    },
    {
      icon: <TreePine className="w-6 h-6 text-accent" />,
      title: "Bitapaka War Cemetery",
      description: "A peaceful memorial honoring those who perished in World Wars I and II."
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-accent" />,
      title: "Rabaul Market",
      description: "Immerse yourself in local life with fresh seafood, tropical fruits, and traditional crafts."
    }
  ];

  return (
    <section id="explore" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Explore Rabaul</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-full mr-4">
                  {attraction.icon}
                </div>
                <h3 className="text-xl font-semibold">{attraction.title}</h3>
              </div>
              <p className="text-gray-600">{attraction.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
