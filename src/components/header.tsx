'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from './logo';
import DynamicGradient from './dynamic-gradient';
import LanguageSwitcher from './language-switcher';

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
}

export default function Header({
  navItems,
  ctaText,
  ctaHref
}: HeaderProps) {
  const pathname = usePathname();

  const defaultNavItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'What we do', href: '/#what-we-do' },
    { label: 'Showcase', href: '/#showcase' },
    { label: 'About', href: '/#about' }
  ];

  const finalNavItems = navItems || defaultNavItems;
  const finalCtaText = ctaText || 'Get started';
  const finalCtaHref = ctaHref || 'https://wa.me/5583991066066';
  const headerRef = useRef<HTMLElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Scroll effect + Active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['what-we-do', 'showcase', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      // If at top, no section is active
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.replace('/#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const offsetTop = element.offsetTop - headerHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
      }
    }
  };

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isMobileMenuOpen]);

  // Initial animation
  useGSAP(
    () => {
      if (!headerRef.current) return;

      gsap.set(headerRef.current, {
        y: -20,
        autoAlpha: 0
      });

      gsap.to(headerRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3
      });
    },
    { scope: headerRef }
  );

  // Mobile menu animation with stagger
  useGSAP(
    () => {
      const mobileMenu = headerRef.current?.querySelector('.mobile-menu');
      const menuItems = headerRef.current?.querySelectorAll('.mobile-menu-item');
      if (!mobileMenu) return;

      if (isMobileMenuOpen) {
        if (menuItems && menuItems.length > 0) {
          gsap.set(menuItems, { autoAlpha: 0, x: -20 });
        }

        gsap.to(mobileMenu, {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });

        if (menuItems && menuItems.length > 0) {
          gsap.to(menuItems, {
            autoAlpha: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.out',
            delay: 0.1
          });
        }
      } else {
        gsap.to(mobileMenu, {
          autoAlpha: 0,
          y: -10,
          duration: 0.2,
          ease: 'power2.in'
        });
      }
    },
    { dependencies: [isMobileMenuOpen], scope: headerRef }
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
          }`}
      >
        <nav className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Logo width={36} height={36} />

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-8 md:flex">
              {finalNavItems.map((item, index) => {
                const sectionId = item.href.replace('/#', '');
                const isActive = item.href.startsWith('/#')
                  ? activeSection === sectionId
                  : pathname === item.href;

                return (
                  <li key={index}>
                    {item.href.startsWith('/#') ? (
                      <a
                        href={item.href}
                        onClick={(e) => handleAnchorClick(e, item.href)}
                        className={`group relative text-base font-light tracking-tight transition-colors hover:text-white ${isActive ? 'text-white' : 'text-white/80'
                          }`}
                      >
                        {item.label}
                        <span
                          className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-white/60 to-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}
                        />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`group relative text-base font-light tracking-tight transition-colors hover:text-white ${isActive ? 'text-white' : 'text-white/80'
                          }`}
                      >
                        {item.label}
                        <span
                          className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-white/60 to-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}
                        />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 md:flex">
              <LanguageSwitcher />
              {/* CTA Button */}
              <a
                href={finalCtaHref === 'https://wa.me/5583991066066' ? '#contact-form' : finalCtaHref}
                className="rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-base font-light tracking-tight text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {finalCtaText}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white transition-colors hover:text-white/80 md:hidden"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`mobile-menu md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'
              }`}
            style={{ opacity: 0 }}
          >
            <div className="border-t border-white/10 py-4">
              <ul className="space-y-1">
                {finalNavItems.map((item, index) => {
                  const sectionId = item.href.replace('/#', '');
                  const isActive = item.href.startsWith('/#')
                    ? activeSection === sectionId
                    : pathname === item.href;

                  return (
                    <li key={index} className="mobile-menu-item">
                      {item.href.startsWith('/#') ? (
                        <a
                          href={item.href}
                          onClick={(e) => handleAnchorClick(e, item.href)}
                          className={`block px-4 py-3 rounded-lg text-base font-light tracking-tight transition-all hover:bg-white/5 hover:text-white ${isActive ? 'text-white bg-white/5' : 'text-white/80'
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.label}</span>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                            )}
                          </div>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-lg text-base font-light tracking-tight transition-all hover:bg-white/5 hover:text-white ${isActive ? 'text-white bg-white/5' : 'text-white/80'
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.label}</span>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                            )}
                          </div>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 pt-4 border-t border-white/10 mobile-menu-item">
                <a
                  href={finalCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/20 active:scale-95"
                >
                  {finalCtaText}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <DynamicGradient />
    </>
  );
}
