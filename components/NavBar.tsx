'use client'
import  { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Product' },
    { href: '#', label: 'Features' },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Testimonials' }
  ];

  return (
    <header className="w-full bg-white fixed py-2 z-50 px-4 md:px-10">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">xPage</div>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="text-lg text-gray-700 hover:text-gray-900">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex space-x-4">
          <Button variant="default">
            <Link href="/dashboard">Get started</Link>
          </Button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 pt-4 pb-6">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="text-lg text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            ))}
            <Button variant="default" className="w-full">
              <Link href="/dashboard">Get started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;