import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Rooms />
      <Amenities />
      <About />
      <Footer />
    </div>
  );
}