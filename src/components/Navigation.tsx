'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full z-[999] fixed top-0 bg-[rgb(26,31,71)] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/ib-logo-hvit.png"
            alt="Ib Strømsvåg Logo"
            width={50}
            height={50}
            className="transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/prosjekter">
            <button className="px-6 py-3 bg-[rgb(48,53,90)] rounded-lg hover:bg-[rgb(58,63,100)] transition-all duration-300 text-white font-medium">
              Prosjekter
            </button>
          </Link>
          <Link href="/om-meg">
            <button className="px-6 py-3 bg-[rgb(48,53,90)] rounded-lg hover:bg-[rgb(58,63,100)] transition-all duration-300 text-white font-medium">
              Om meg
            </button>
          </Link>
          <Link href="/cv">
            <button className="px-6 py-3 bg-[rgb(48,53,90)] rounded-lg hover:bg-[rgb(58,63,100)] transition-all duration-300 text-white font-medium">
              CV
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-[rgb(48,53,90)]`}>
        <div className="flex flex-col space-y-2 p-4">
          <Link href="/" className="text-white hover:bg-white/10 px-4 py-2 rounded">
            Hjem
          </Link>
          <Link href="/prosjekter" className="text-white hover:bg-white/10 px-4 py-2 rounded">
            Prosjekter
          </Link>
          <Link href="/om-meg" className="text-white hover:bg-white/10 px-4 py-2 rounded">
            Om meg
          </Link>
          <Link href="/cv" className="text-white hover:bg-white/10 px-4 py-2 rounded">
            CV
          </Link>
        </div>
      </div>
    </nav>
  );
}