'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Instagram, Mail, Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      const elements = footerRef.current.querySelectorAll('.footer-item');

      gsap.set(elements, {
        autoAlpha: 0,
        y: 20
      });

      gsap.to(elements, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-black border-t border-white/10 py-12 px-6 md:px-10 lg:px-16"
    >
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Brand */}
          <div className="footer-item">
            <div className="mb-4">
              <Image
                src="/chip.webp"
                alt="ZielHub"
                width={50}
                height={50}
                className="object-contain"
                style={{ maxWidth: '50px', maxHeight: '50px' }}
              />
            </div>
            <p className="text-sm font-light text-white/60 leading-relaxed">
              Saving companies from digital extinction with cutting-edge technology.
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="footer-item">
            <h3 className="text-base font-light text-white mb-4">Social Media</h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/company/zielhub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-light text-white/70 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/zielhub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-light text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>

          {/* Contato */}
          <div className="footer-item">
            <h3 className="text-base font-light text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contato@zielhub.com"
                className="flex items-center gap-2 text-sm font-light text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@zielhub.com
              </a>
              <a
                href="tel:+5583991066066"
                className="flex items-center gap-2 text-sm font-light text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +55 83 99106-6066
              </a>
              <a
                href="https://wa.me/5583991066066"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-light text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-item">
            <p className="text-sm font-light text-white/60">
              © {new Date().getFullYear()} ZielHub
            </p>
            <p className="text-xs font-light text-white/40 mt-2">
              All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-item border-t border-white/10 pt-6">
          <p className="text-center text-xs font-light text-white/40">
            Made with cutting-edge technology by ZielHub
          </p>
        </div>
      </div>
    </footer>
  );
}
