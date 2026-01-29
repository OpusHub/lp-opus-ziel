'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface AboutProps {
  hero?: {
    badge: string;
    title: string;
    description: string;
  };
  mission?: {
    title: string;
    description: string;
  };
  vision?: {
    title: string;
    description: string;
  };
  values?: {
    title: string;
    items: Array<{
      icon: React.ReactNode;
      title: string;
      description: string;
    }>;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
  cta?: {
    title: string;
    description: string;
    button: string;
  };
}

export default function About({
  hero,
  mission,
  vision,
  values,
  stats,
  cta
}: AboutProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  // Hero animation
  useGSAP(() => {
    if (!heroRef.current) return;

    const elements = heroRef.current.querySelectorAll('.animate-hero');

    gsap.set(elements, {
      autoAlpha: 0,
      y: 30,
      filter: 'blur(8px)'
    });

    gsap.to(elements, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      autoAlpha: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: heroRef });

  // Mission & Vision animation
  useGSAP(() => {
    if (!missionRef.current) return;

    const cards = missionRef.current.querySelectorAll('.mission-card');

    gsap.set(cards, {
      autoAlpha: 0,
      y: 40,
      scale: 0.95
    });

    gsap.to(cards, {
      scrollTrigger: {
        trigger: missionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: missionRef });

  // Stats animation
  useGSAP(() => {
    if (!statsRef.current) return;

    const statItems = statsRef.current.querySelectorAll('.stat-item');

    gsap.set(statItems, {
      autoAlpha: 0,
      scale: 0.8
    });

    gsap.to(statItems, {
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      autoAlpha: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    });
  }, { scope: statsRef });

  // Values animation
  useGSAP(() => {
    if (!valuesRef.current) return;

    const valueCards = valuesRef.current.querySelectorAll('.value-card');

    gsap.set(valueCards, {
      autoAlpha: 0,
      y: 50,
      scale: 0.9
    });

    gsap.to(valueCards, {
      scrollTrigger: {
        trigger: valuesRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out'
    });
  }, { scope: valuesRef });

  // CTA animation
  useGSAP(() => {
    if (!ctaRef.current) return;

    gsap.set(ctaRef.current, {
      autoAlpha: 0,
      y: 40
    });

    gsap.to(ctaRef.current, {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: ctaRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-black py-24 px-6 md:py-32 md:px-10 lg:px-16"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      <div className="relative z-20 mx-auto max-w-7xl">
        {/* Hero */}
        {hero && (
          <div ref={heroRef} className="mb-20 text-center">
            <div className="animate-hero inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm mb-6">
              <span className="text-sm font-light tracking-tight text-white/80">{hero.badge}</span>
            </div>

            <h2 className="animate-hero text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white mb-6">
              {hero.title}
            </h2>

            <p className="animate-hero text-lg md:text-xl font-light leading-relaxed tracking-tight text-white/70 max-w-3xl mx-auto">
              {hero.description}
            </p>
          </div>
        )}

        {/* Mission & Vision */}
        {(mission || vision) && (
          <div ref={missionRef} className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              {mission && (
                <div className="mission-card group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/50 p-8 backdrop-blur-sm hover:border-white/20 transition-colors">
                  <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-light tracking-tight text-white mb-4">
                    {mission.title}
                  </h3>
                  <p className="text-base font-light leading-relaxed tracking-tight text-white/60">
                    {mission.description}
                  </p>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                  </div>
                </div>
              )}

              {vision && (
                <div className="mission-card group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/50 p-8 backdrop-blur-sm hover:border-white/20 transition-colors">
                  <div className="mb-4 inline-flex rounded-xl bg-purple-500/10 p-3 text-purple-400">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-light tracking-tight text-white mb-4">
                    {vision.title}
                  </h3>
                  <p className="text-base font-light leading-relaxed tracking-tight text-white/60">
                    {vision.description}
                  </p>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div ref={statsRef} className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="text-4xl md:text-5xl font-light tracking-tight text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-light tracking-tight text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Values */}
        {values && values.items && values.items.length > 0 && (
          <div ref={valuesRef} className="mb-20">
            <h3 className="text-3xl md:text-4xl font-extralight tracking-tight text-white text-center mb-12">
              {values.title}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.items.map((value, index) => (
                <div
                  key={index}
                  className="value-card group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/50 p-6 backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 text-white/90 transition-colors group-hover:bg-white/15">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-light tracking-tight text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm font-light leading-relaxed tracking-tight text-white/60">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        {cta && (
          <div ref={ctaRef}>
            <div className="text-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 backdrop-blur-sm">
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
                {cta.title}
              </h3>
              <p className="text-lg font-light leading-relaxed tracking-tight text-white/70 mb-8 max-w-2xl mx-auto">
                {cta.description}
              </p>
              <a
                href="https://wa.me/5583991066066"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-8 py-3 text-base font-light tracking-tight text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {cta.button}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
