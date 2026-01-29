'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Brain,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Target
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhatWeDoProps {
  sectionTitle?: string;
  sectionDescription?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Solutions",
    description: "Leverage cutting-edge artificial intelligence to automate processes and gain actionable insights from your data."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Smart Automation",
    description: "Transform repetitive tasks into intelligent workflows that adapt and optimize over time."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Business Intelligence",
    description: "Make data-driven decisions with real-time analytics and predictive modeling powered by machine learning."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with full compliance to industry standards and data protection regulations."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Optimized performance that scales with your business, delivering results in milliseconds."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precision Targeting",
    description: "Reach the right audience at the right time with AI-driven targeting and personalization."
  }
];

export default function WhatWeDo({
  sectionTitle = "What we do",
  sectionDescription = "We combine artificial intelligence with business expertise to deliver solutions that drive real results.",
  services = defaultServices
}: WhatWeDoProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Set initial states
      if (titleRef.current) {
        gsap.set(titleRef.current, {
          autoAlpha: 0,
          y: 30,
          filter: 'blur(8px)'
        });
      }

      if (descRef.current) {
        gsap.set(descRef.current, {
          autoAlpha: 0,
          y: 20
        });
      }

      // Set cards initial state
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.set(cards, {
          autoAlpha: 0,
          y: 40,
          scale: 0.95
        });
      }

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        },
        defaults: { ease: 'power3.out' }
      });

      // Animate title
      if (titleRef.current) {
        tl.to(titleRef.current, {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8
        }, 0);
      }

      // Animate description
      if (descRef.current) {
        tl.to(descRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6
        }, 0.2);
      }

      // Animate cards with stagger
      if (cards && cards.length > 0) {
        tl.to(cards, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1
        }, 0.4);
      }

      // Add hover animations to cards
      cards?.forEach((card) => {
        const cardElement = card as HTMLElement;

        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="relative w-full bg-black py-24 px-6 md:py-32 md:px-10 lg:px-16"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <h2
            ref={titleRef}
            className="mb-4 text-4xl font-extralight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {sectionTitle}
          </h2>
          <p
            ref={descRef}
            className="mx-auto max-w-2xl text-base font-light leading-relaxed tracking-tight text-white/70 sm:text-lg"
          >
            {sectionDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.07]"
            >
              {/* Icon container */}
              <div className="mb-5 inline-flex rounded-xl bg-white/10 p-3 text-white/90 transition-colors group-hover:bg-white/15">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-light tracking-tight text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-light leading-relaxed tracking-tight text-white/60">
                {service.description}
              </p>

              {/* Hover effect gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
