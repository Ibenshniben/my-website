import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-bg relative">
      <Navigation />
      <ParticleBackground />
      
      <div className="relative z-10">
        {/* Your content here */}
      </div>

      <Footer />
    </main>
  );
}