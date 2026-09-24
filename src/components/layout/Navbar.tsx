'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Menu, X, PlusCircle, Crown, HeartHandshake } from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'হোম' },
    { href: '/create', label: 'বায়োডাটা তৈরি' },
    { href: '/templates', label: 'টেমপ্লেট' },
    { href: '/pricing', label: 'প্যাকেজ' },
    { href: '/blog', label: 'গাইড ও টিপস' },
    { href: '/dashboard', label: 'আমার বায়োডাটা' },
  ];

  return (
    <header className="bg-[#fffdfa]/95 backdrop-blur-md border-b border-amber-200/70 sticky top-0 z-50 transition-all shadow-[0_4px_20px_-8px_rgba(202,138,4,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo with Royal Matrimonial Emblem */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-brand-950 via-brand-900 to-amber-700 flex items-center justify-center text-amber-300 shadow-md border border-amber-400/40 group-hover:scale-105 transition-all duration-300">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 drop-shadow-xs" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-amber-500 border border-white flex items-center justify-center">
                <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />
              </div>
            </div>
            <div>
              <span className="text-lg sm:text-2xl font-bold font-bangla text-stone-950 tracking-tight flex items-center leading-none">
                বিয়েপরিচয়<span className="text-amber-600 font-sans text-base sm:text-xl font-semibold">.com</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-amber-900/80 font-semibold block mt-0.5 tracking-wider uppercase font-sans">
                Royal Matrimonial Biodata
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-50 text-brand-950 border border-brand-200/80 shadow-xs'
                      : 'text-stone-700 hover:text-brand-900 hover:bg-amber-50/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/create"
              className="btn-shimmer px-5 py-2.5 rounded-xl text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all"
            >
              <PlusCircle className="w-4 h-4 text-amber-300" />
              <span>বায়োডাটা তৈরি করুন</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl text-stone-700 hover:text-brand-950 hover:bg-amber-100/60 border border-amber-300/80 flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-900" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Backdrop & Slide Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 top-16 bg-stone-900/40 backdrop-blur-xs z-40 md:hidden animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="md:hidden relative z-50 border-t border-amber-200 bg-[#fffdfa] px-5 pt-3 pb-6 space-y-2 shadow-2xl transition-all">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  pathname === link.href
                    ? 'bg-brand-50 text-brand-950 border border-brand-200/80 font-bold'
                    : 'text-stone-700 hover:bg-amber-50/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/create"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl btn-shimmer text-white text-center font-bold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <PlusCircle className="w-4 h-4 text-amber-300" />
                <span>বায়োডাটা তৈরি করুন (ফ্রি)</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
