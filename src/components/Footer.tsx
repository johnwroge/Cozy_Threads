import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">About Cozy Threads</h3>
            <div className="flex items-center gap-2 text-emerald-700">
              <Leaf className="h-4 w-4" />
              <span className="text-sm font-medium">Sustainable Fashion</span>
            </div>
            <p className="text-sm text-gray-600">
              Ethically sourced, sustainably made clothing that's good for you and the planet.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/products" className="hover:text-gray-900">Shop All</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-900">About Us</Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-gray-900">Our Sustainability Pledge</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gray-900">FAQs</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/shipping" className="hover:text-gray-900">Shipping Information</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-gray-900">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-gray-900">Size Guide</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-900">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Connect With Us</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@cozythreads.com" className="text-sm hover:text-gray-900">
                hello@cozythreads.com
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2024 Cozy Threads. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;